const express = require('express')
const post = require('../usecases/post')
const auth = require('../middlewares/auth')
const router = express.Router()

// router.use(auth)

// /posts -> getAll()
router.get('/', async (request, response) => {
  try {
    const allPosts = await post.getAll()
    response.json({
      success: true,
      message: 'All posts',
      data: {
        allPosts
      }
    })
  } catch (error) {
    response.status(401)
    console.log(error)
    console.log(error.message)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// /posts -> create()
router.post('/', auth, async (request, response) => {
  try {
    var {
      title,
      author,
      dateCreated,
      timeRead,
      image,
      description
    } = request.body
    const newPost = await post.create({ title, author, dateCreated, timeRead, image, description })
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
router.delete('/:id', auth, async (request, response) => {
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
router.patch('/:id', auth, async (request, response) => {
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
