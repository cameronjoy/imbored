const router = require('express').Router()
const fs = require('fs')
const axios = require('axios')


// get results
router.get('/', (req, res) => {
    const request = req.query
    let type = request.type
    let participants = request.participants
    let price = request.price

    if(participants==2 && price==0.1){
        axios.get(`http://www.boredapi.com/api/activity?type=${type}&minparticipants=${participants}&minprice=${price}`)
    .then(response => {
        let activityKey = response.data.key
        let activityResult = response.data.activity
        let participantsResult = response.data.participants
        let typeResult = response.data.type
        let priceResult = response.data.price
        console.log(activityResult, typeResult, priceResult)
        res.render('results', {activity: activityResult, type: typeResult, participants: participantsResult, price: priceResult, activityKey: activityKey})
    })
    .catch(err => {console.log(err)})

    } else if(participants==2){
        let activityKey = response.data.key
        axios.get(`http://www.boredapi.com/api/activity?type=${type}&minparticipants=${participants}&price=${price}`)
    .then(response => {
        let activityResult = response.data.activity
        let participantsResult = response.data.participants
        let typeResult = response.data.type
        let priceResult = response.data.price
        console.log(activityResult, typeResult, priceResult)
        res.render('results', {activity: activityResult, type: typeResult, participants: participantsResult, price: priceResult, activityKey: activityKey})
    })
    .catch(err => {console.log(err)})

    } else if(price==0.1){
        axios.get(`http://www.boredapi.com/api/activity?type=${type}&participants=${participants}&minprice=0.0`)
    .then(response => {
        let activityKey = response.data.key
        let activityResult = response.data.activity
        let participantsResult = response.data.participants
        let typeResult = response.data.type
        let priceResult = response.data.price
        console.log(activityResult, typeResult, priceResult)
        res.render('results', {activity: activityResult, type: typeResult, participants: participantsResult, price: priceResult, activityKey: activityKey})
    })
    .catch(err => {console.log(err)})
    } else {
        axios.get(`http://www.boredapi.com/api/activity?type=${type}&participants=${participants}&price=${price}`)
    .then(response => {
        let activityKey = response.data.key
        let activityResult = response.data.activity
        let participantsResult = response.data.participants
        let typeResult = response.data.type
        let priceResult = response.data.price
        console.log(activityResult, typeResult, priceResult)
        res.render('results', {activity: activityResult, type: typeResult, participants: participantsResult, price: priceResult, activityKey: activityKey})
    })
    .catch(err => {console.log(err)})
    }
})

module.exports = router