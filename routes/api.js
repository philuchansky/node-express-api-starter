const
  express = require('express'),
  apiRouter = express.Router(),
  Blurb = require('../models/Blurb.js')

apiRouter.get('/', (req, res) => {
  res.json({message: "Hello World!"})
})

module.exports = apiRouter
