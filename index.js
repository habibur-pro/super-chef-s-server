const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

const data = require('./data/data.json')

app.get('/', (req, res) => {
    // res.send('Coocks corner in running')
    res.send(data)
})

app.listen(port, () => {
    console.log('coocks server running on port' + port)
})