
const Post = require('../models/post')

function create ({ title, author, dateCreated, timeRead, image }) {
  const newPost = new Post({ title, author, dateCreated, timeRead, image })
  return newPost.save()
}

function deleteByid (id) {
  return Post.findByIdAndDelete(id)
}

function getAll () {
  return Post.find({})
}

function getById (id) {
  return Post.findById(id)
}

function updateById (id, infoToUpdate) {
  return Post.findByIdAndUpdate(id, infoToUpdate)
}

module.exports = {
  create,
  deleteByid,
  getAll,
  getById,
  updateById
}
