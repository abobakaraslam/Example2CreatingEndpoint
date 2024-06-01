//File: index.js in root directory
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/web', (req, res) => {
    res.send('Web Development')
})
app.get('/web/exercise', (req, res) => {
    res.send('Exercises 1, 2, 4')
})
app.get('/web/exercise/result', (req, res) => {
    res.send('Result')
})
app.listen(port)