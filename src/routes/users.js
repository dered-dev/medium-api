const express = require('express')
const user = require('../usecases/user')
const router = express.Router()
const auth = require('../middlewares/auth')

router.post('/', async (request, response) => {
  try {
    const userCreated = await user.create(request.body)
    response.json({
      success: true,
      message: 'User created',
      data: {
        userCreated
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
router.post('/login', async (request, response) => {
  try {
    const { password, email } = request.body
    if (!password || !email) throw new Error('Unauthorized')
    const jwt = await user.login(email, password)
    response.json({
      success: true,
      message: 'Logged in',
      data: {
        token: jwt
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized'
    })
  }
})
router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.body
    const userDeleted = await user.deleteByID(id)
    response.json({
      success: true,
      message: 'User deleted',
      data: {
        user: userDeleted
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/', async (request, response) => {
  try {
    const allUsers = await user.getAll()
    response.json({
      success: true,
      message: 'all users',
      data: {
        allUsers
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
