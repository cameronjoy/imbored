const axios  = require('axios')
let express = require('express')
let ejsLayouts = require('express-ejs-layouts')
// let db = require('./models')
let rowdy = require('rowdy-logger')


let app = express()

var rowdyResults = rowdy.begin(app)
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
app.use('/user', require('./controllers/user'))

// app.get('/results', (req, res) => {
//     axios.get('http://www.boredapi.com/api/activity')
//     .then(response => {
//         res.redirect('/results')
//         console.log(response)
//     })
//     .catch(err => {console.log(err)})
// })

let server = app.listen(3000, () => {
    console.log('we on this shit')
    rowdyResults.print()
})

module.exports = server

