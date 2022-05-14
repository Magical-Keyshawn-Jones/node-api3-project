const express = require('express');
const user = require('./users-model')
const post = require('../posts/posts-model')

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  user.get()
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'could not retrieve users'})
  })
  
});

router.get('/:id', (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  res.status(200).json(req.user)

});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  post.insert()
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'could not create post'})
  })

});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  user.update()
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'could not complete changes' })
  })

});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  user.remove()
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'could not delete user'})
  })
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router