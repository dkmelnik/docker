const express = require('express')
const {connectDB} = require("./helpers/db");
const {port, host, db} = require("./configuration");
const mongoose = require("mongoose");

const app = express();

const postSchema = { name: String }
const Post = mongoose.model("Post", postSchema);


const startServer = () => {
  app.listen(port, () => {
    const silence = new Post({ name: 'Zildjian' });
    console.log(`Started api service on port: ${port}`)
    console.log(`On host: ${host}`)
    console.log(`Our db: ${db}`)
    Post.find(function (err,posts){
      if (err) return console.log(err)
      else console.log(posts)
    })
    silence.save(function (err, savedSilence){
      if (err) return console.log(err)
      else console.log(savedSilence)
    })
  })
}

app.get('/test', (req, res) => {
  res.send('Api working!')
})

connectDB()
  .on('error', () => console.log("err"))
  .on('disconnected', connectDB)
  .once('open', startServer)