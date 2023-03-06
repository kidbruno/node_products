const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.showProducts)
router.get('/adicionar', ProductController.add)
router.post('/adicionar', ProductController.storageProduct)
router.get('/getCategoria', ProductController.getCategoria)
router.get('/editar/:id', ProductController.editProduct)
router.post('/editar', ProductController.updateProduct)
router.get('/delete/:id', ProductController.deleteProduct)

module.exports = router