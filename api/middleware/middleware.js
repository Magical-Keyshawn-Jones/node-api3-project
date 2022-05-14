const user = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  // Storing Important Values
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl

  console.log(`[${timestamp}] ${method} to ${url}`)

  next()
}

 async function validateUserId (req, res, next) {
  // DO YOUR MAGIC
  const { id } = req.params
  const userProfile = await user.getById(id)

  if (!userProfile) {
    return res.status(404).json({ message: 'user not found' })
  }

  req.user = userProfile

  next()
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body

  if (name === undefined) {
    res.status(400).json({ message: 'missing required name field' })
  }

  next ()
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const { text } = req.body

  if (text === undefined) {
    res.status(400).json({ message: 'missing required text field' })
  }

  next ()
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validatePost,
  validateUserId,
  validateUser
}