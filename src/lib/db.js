const mongoose = require('mongoose')
require('dotenv').config()

const {
  DB_PASSWORD,
  DB_NAME,
  DB_USER,
  DB_HOST
} = process.env

console.log(DB_PASSWORD, DB_NAME, DB_USER, DB_HOST)
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
