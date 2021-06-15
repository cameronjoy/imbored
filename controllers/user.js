const router = require('express').Router()
const fs = require('fs')
const axios = require('axios')
const db = require('../models')

router.get('/', (req,res) => {
    
    db.favorites.findAll()
    .then(faves => {
       console.log(faves)
        res.render('user', {favorites: faves})
            
        })
        
    
        
    
    
})

router.get('/:id', (req,res) => {
    console.log(req.params.id)
    res.send('howdy')
})

router.post('/', (req,res) => {
    let activityKey = req.body.activityKey
    let activity = req.body.activity

    console.log(req.body)
    db.user.findOne()
    .then(user => {
        console.log('adding fave to this user', user.name)
        user.createFavorite({
            activityKey: activityKey,
            note: "", 
            activity: activity
        }).then(fave => {
            console.log(fave)
            res.redirect(`/user`)
        })
    })

    router.delete('/:id', (req,res) => {
        const id = req.params.id
        db.favorites.destroy({
            where:{ id: id }
        })
    })

    

    // db.favorites.findOrCreate({
    //     where: {
    //         userId: 1,
    //         activityKey: activityKey
    //     }
    // })
    // .then((data) => {
    //     res.redirect('/user')
    // })
    // .catch((err) =>{
    //     console.log('error')
    // })
})

module.exports = router