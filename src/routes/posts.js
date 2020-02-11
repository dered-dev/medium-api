const express = require('express')
const post = require('../usecases/post')
const router = express.Router()

// /posts -> getAll()
router.get('/', async (request, response) => {
  try {
    const posts = await post.getAll()
    response.json({
      success: true,
      message: 'All posts',
      data: {
        posts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// /posts -> create()
router.post('/', async (request, response) => {
  try {
    var {
      title,
      author,
      dateCreated,
      timeRead,
      image
    } = request.body
    const newPost = await post.create({ title, author, dateCreated, timeRead, image })
    response.json({
      success: true,
      message: 'New Post',
      data: {
        newPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// /posts -> getById()
router.get('/:id', async (request, response) => {
  try {
    var { id } = request.params
    const postData = await post.getById(id)
    response.json({
      success: true,
      message: 'Post data',
      data: {
        post: postData
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// /posts -> deleteByid()
router.delete('/:id', async (request, response) => {
  try {
    var { id } = request.params
    const postData = await post.deleteByid(id)
    response.json({
      success: true,
      message: 'Post deleted',
      data: {
        post: postData
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
// /posts -> updateById()
router.patch('/:id', async (request, response) => {
  try {
    var infoToUpdate = request.body
    var { id } = request.params
    const postUpdated = await post.updateById(id, infoToUpdate)
    response.json({
      success: true,
      message: 'Post updated',
      data: {
        postUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
