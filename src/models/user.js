const mongoose = require('mongoose')

// create schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    minlength: 2,
    maxlength: 200,
    required: true,
    trim: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  },
  password: {
    type: String,
    minlength: 1,
    maxlength: 200,
    required: true
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 100
  }
})

// create model
module.exports = mongoose.model('users', userSchema)
