const Product = require('../models/Product')
const Category = require('../models/Category')

module.exports = class ProductController{

    static async showProducts (req, res){

        const products = await Product.find().lean()
        res.render('../views/products/showProducts', {products})
    }

    static async add(req, res){

        //pegando a categoria
        const category = await ProductController.getCategoria()
 
        res.render('../views/products/addProducts', {category})
    }

    static async storageProduct(req, res){

        const {name, sku, price, size, amount, category} = req.body

        const product = new Product({name, sku, price, size, amount, category})

        await product.save()

        res.redirect('/product/')
    }

    static async getCategoria(req, res){

        const category = await Category.find().lean()
        return category
    }

    static async editProduct(req, res){

        const id = req.params.id

        const category = await ProductController.getCategoria()

        const product = await Product.findById({'_id': id}).lean()
        res.render('../views/products/editProduct', {product, category})
    }

    static async updateProduct(req, res){
        
        const id = req.body.id

        const {name, price, size} = req.body
        const product = {name, price, size}

        try{
            await Product.updateMany({'_id': id}, product)
            console.log("Produto atualizado com sucesso!")
            res.redirect('/product/')
        
        }catch(err){
            console.log(err)
        }
    }

    static async deleteProduct(req, res){

        const id = req.params.id

        try{

            await Product.deleteOne({'_id': id})
            console.log('Prduto deletado com sucesso!')
            res.redirect('/product/')

        }catch(err){
            console.log(err)
        }
        
    }

}