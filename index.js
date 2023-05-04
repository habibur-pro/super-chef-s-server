const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

const chefsData = require('./data/chefsData.json')
const reviews = require('./data/reviews.json')

app.get('/', (req, res) => {
    res.send('Super Chef server is')


})

app.get('/chefs/:chefId', (req, res) => {
    const id = req.params.chefId
    const selectedChef = chefsData.find(chef => chef.chefId === id)
    res.send(selectedChef)
})

// send all chefs data 
app.get('/chefs', (req, res) => {
    res.send(chefsData)
})

// set reviews 

app.get('/reviews', (req, res) => {
    res.send(reviews)
})

app.listen(port, () => {
    console.log('coocks server running on port' + port)
})