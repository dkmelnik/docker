const express = require('express')

const app = express();
const port = process.env.PORT
const host = process.env.HOST

app.get('/test', (req, res) => {
  res.send('Api working!')
})

app.listen(port, () => {
  console.clear()
  console.log(`Started api service on port: ${port}`)
  console.log(`On host: ${host}`)
})