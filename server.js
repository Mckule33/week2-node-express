require('dotenv').config();

const express = require('express');
const app = express()
const port = process.env.PORT;

app.get('/about', (req, res) => {
  res.send('Happy Day!')
})

app.get('/about', (req, res) => {
  res.send('Hurray')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







