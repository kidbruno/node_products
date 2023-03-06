const mongoose = require('mongoose')
const { Schema } = mongoose

const Category = mongoose.model(

    'Category',
    new Schema({
        name: {type: 'String', required: true},
        code: {type: 'Number', required: true},
    })

)

module.exports = Category