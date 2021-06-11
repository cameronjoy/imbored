const { default: axios } = require('axios')
let express = require('express')
let ejsLayouts = require('express-ejs-layouts')
let axios = require('axios')
// let db = require('./models')
let rowdy = require('rowdy-logger')

let app = express()

rowdy.begin(app)

app.set('view engine', 'ejs')

// GET - show home screen
app.get('/', (req,res) => {
    res.render('index')
})



app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public/'))

app.use('/favorites', require('./controllers/favorites'))
app.use('/results', require('./controllers/results'))

app.get('/', (req, res) => {
    axios.get
})

let server = app.listen(3000, () => {
    console.log('we on this shit')
    // rowdy.print()
})

module.exports = server

