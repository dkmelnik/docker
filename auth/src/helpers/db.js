const mongoose = require('mongoose')
const {db} = require("../configuration");

module.exports.connectDB = () => {
  mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  return mongoose.connection
}