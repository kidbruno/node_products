const mongoose = require('mongoose')
const { Schema } = mongoose
const Category = require('./Category')

const Product = mongoose.model(

    'Product',
    new Schema({
        name: {type: 'String', required: true},
        sku: {type: 'Number', required: true},
        price: {type: 'Number', required: true},
        size: {type: 'String', required: true},
        amount: {type: 'Number', required: true},
        //caso fosse pegar somente o ID da categoria
        // category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
        category: {type: 'String', required: true}
    })
)

module.exports = Product