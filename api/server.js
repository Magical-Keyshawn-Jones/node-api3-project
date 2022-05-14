const express = require('express');
const router = require('./users/users-router')
const middleware = require('./middleware/middleware')

const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json())

// global middlewares and the user's router need to be connected here
// middleWare are gatekeepers(validators or blockers) and messengers

server.use(middleware.logger)

server.use('/api/', router)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});



module.exports = server;
