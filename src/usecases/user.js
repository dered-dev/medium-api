
const User = require('../models/user')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

async function create (userData) {
  const { password, ...restUserData } = userData
  const encriptedPassword = await bcrypt.hash(password)
  // encriptar(password)
  return User.create({
    password: encriptedPassword,
    ...restUserData
  })
}

function deleteByID (id) {
  return User.findByIdAndDelete(id)
}
function getAll () {
  return User.find()
}

async function login (email, password) {
  const userFound = await User.findOne({ email })
  if (!userFound) throw new Error('Unauthorized')
  const isValidPassword = await bcrypt.compare(password, userFound.password)
  if (!isValidPassword) throw new Error('Unauthorized')

  return jwt.sign({ id: userFound._id })
}

module.exports = {
  create,
  deleteByID,
  login,
  getAll
}
