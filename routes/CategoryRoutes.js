const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.showCategories)
router.get('/adicionar', CategoryController.add)
router.post('/adicionar', CategoryController.storageCategory)
router.get('/editar/:id', CategoryController.edit)
router.post('/update', CategoryController.update)
router.get('/delete/:id', CategoryController.delete)


module.exports = router
