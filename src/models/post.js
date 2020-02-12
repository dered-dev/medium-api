const mongoose = require('mongoose')

// create schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 200,
    required: true,
    trim: true
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 128,
    required: true,
    trim: true
  },
  author: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  timeRead: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    minlength: 4,
    maxlength: 200,
    required: true,
    trim: true
  }
})

// create model
module.exports = mongoose.model('posts', postSchema)
