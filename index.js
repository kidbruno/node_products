const express = require('express')
const exphbs = require('express-handlebars')
const router = express.Router()

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//rotas
const CategoryRouter = require('./routes/CategoryRoutes')
const ProductRouter = require('./routes/ProductRoutes')

//conexão BD
const mongoose = require('./db/conn')

//lendo Json
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//arquivos staticos
app.use(express.static('public'))

//chamando minhas rotas
app.use('/category', CategoryRouter)
app.use('/product', ProductRouter)

app.listen(3000)

app.get('/', (req, res) =>{
    res.render('../views/index')
})