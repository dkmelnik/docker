const express = require('express')
const {connectDB} = require("./helpers/db");
const {port, host, db, apiUrl} = require("./configuration");
const axios = require('axios').default;

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
app.get('/api/currentUser', (req,res)=>{
  res.json({
    id: "124134",
    email: "docker-test@gmail.com"
  })
})
app.get('/testwithapidata', (req,res)=> {
  axios.get(apiUrl + "/testapigetdata").then(response => {
    res.json({
      testapigetdata: true,
      currentApiData: response.data
    })
  })
})
connectDB()
  .on('error', () => console.log("err"))
  .on('disconnected', connectDB)
  .once('open', startServer)
