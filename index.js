const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

const chefsData = require('./data/data.json')

app.get('/', (req, res) => {
    // res.send('Coocks corner in running')
    res.send(chefsData)

})

// send all chefs data 
app.get('/chefsdata', (req, res) => {
    res.send(chefsData)
})

app.listen(port, () => {
    console.log('coocks server running on port' + port)
})