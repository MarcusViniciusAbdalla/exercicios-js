const express = require('express')
const app = express()
const bodyParser = require('bodyParser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    resp.send('<h1>Parabéns!</h1>')
})

app.listen(3003)

