const express = require('express')
const {connectDB} = require("./helpers/db");
const {port, host, db} = require("./configuration");

const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started auth service on port: ${port}`)
    console.log(`On host: ${host}`)
    console.log(`Our db: ${db}`)
  })
}

app.get('/test', (req, res) => {
  res.send('Auth working!')
})

connectDB()
  .on('error', () => console.log("err"))
  .on('disconnected', connectDB)
  .once('open', startServer)