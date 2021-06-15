const router = require('express').Router()
const fs = require('fs')
const axios = require('axios')
const db = require('../models')

router.get('/', (req,res) => {
    
        res.render('user')
    
    
})

router.post('/', (req,res) => {
    let activityKey = req.body.activityKey

    db.favorites.findOrCreate({
        where: {
            activityKey: activityKey
        }
    })
    .then((data) => {
        res.redirect('/user')
    })
    .catch((err) =>{
        console.log('error')
    })
})

module.exports = router