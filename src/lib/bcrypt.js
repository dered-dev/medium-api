
const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = process.env

function hash (plaintText) {
  return bcrypt.hash(plaintText, parseInt(SALT_ROUNDS))
}
module.exports = {
  ...bcrypt,
  hash
}
