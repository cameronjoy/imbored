const router = require('express').Router()
const fs = require('fs')
const axios = require('axios')
const db = require('../models')

router.get('/', (req,res) => {
    
    db.favorites.findAll()
    .then(faves => {
    //    console.log(faves)
       
        res.render('user', {favorites: faves })
            
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
        // console.log('adding fave to this user', user.name)
        user.createFavorite({
            activityKey: activityKey,
            note: "", 
            activity: activity
        }).then(fave => {
            console.log(fave)
            res.redirect(`/user`)
        })
    })

router.get('edit', (req,res) => {
    res.send('howdy')
})


router.get('/edit/:id', (req,res) => {
    console.log('hello im here')
    const activityId = req.params.id
    db.favorites.findOne({
        where: { id: activityId }
    })
    .then((result) => {
        console.log(`editing activity with id ${activityId} 😫😫😫`)
        console.log(result)
        res.render('edit', {fave: result})
    })
   
    // res.send('hello hello')
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const note = req.body.note
    console.log(note)
    db.favorites
      .update(
        { note: req.body.note },
        {
          where: { id: id },
        }
      )
      .then((comment) => {
          console.log(comment.id)
          console.log(comment.note)
        res.redirect('/user')
      })
  })

    

router.delete('/:id', (req,res) => {
    const id = req.params.id
    db.favorites.destroy({
        where:{ id: id }
    })
    res.redirect('/user')
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