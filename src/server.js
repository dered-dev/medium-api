const express = require('express')

const postsRouters = require('./routes/posts')

const app = express()
app.use(express.json())

app.use('/posts', postsRouters)

module.exports = app
