const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/googal', (req, res) => {
  res.send('Hello googal!')
})
app.get('/youtube', (req, res) => {
  res.send('Hello youtube!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})