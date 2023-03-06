const Category = require('../models/Category')

module.exports = class CategoryController {

    static async showCategories(req, res){

        const products = await Category.find().lean()
        res.render('../views/categories/showCategories', {products})
        return
    }

    static add(req, res){
        res.render('../views/categories/addCategories')
    }

    static async storageCategory(req, res){
        
        const {name, code} = req.body

        if(!name){
            res.render('../views/categories/addCategories')
        }

        if(!code){
            res.render('../views/categories/addCategories')
        }

        try{
            const product = new Category({name,code})
            await product.save()
            console.log('Categoria adicionada com Sucesso!')
            res.redirect('/category/')

        }catch(err){
            console.log(err)
        }
    }

    static async edit(req, res){
        
        const categoryId = req.params.id

        const category = await Category.findById(categoryId).lean()
        res.render('../views/categories/editCategories', {category})
        return
    }

    static async update(req, res){
        
        const id = req.body.id
        const {name, code} = req.body
       
        const category = {
            name,
            code
        }
        
        await Category.updateOne({_id: id}, category)
        res.redirect('/category/')
    }

    static async delete(req, res){

        const id = req.params.id

        try{
            await Category.deleteOne({_id: id})
            res.redirect('/category/')

        }catch(err){
            console.log(err)
        }
    }
    
}