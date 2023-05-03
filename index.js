const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

const chefsData = require('./data/data.json')

app.get('/', (req, res) => {
    res.send('Super Chef server is')


})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id
    const selectedChef = chefsData.find(chef => chef.id === id)
    res.send(selectedChef)
})

// send all chefs data 
app.get('/chefs', (req, res) => {
    res.send(chefsData)
})

app.listen(port, () => {
    console.log('coocks server running on port' + port)
})