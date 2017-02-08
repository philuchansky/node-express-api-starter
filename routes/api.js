const
  express = require('express'),
  apiRouter = express.Router(),
  Blurb = require('../models/Blurb.js')

apiRouter.get('/blurbs', (req, res) => {
  Blurb.find()
    .then(blurbs => res.json(blurbs))
    .catch(handleError(res))
})

apiRouter.get('/blurbs/:id', (req, res) => {
  Blurb.findById(req.params.id)
    .then(blurb => res.json(blurb))
    .catch(handleError(res))
})

module.exports = apiRouter

function handleError(res) {
  return function(error) {
    res.json({success: false, error: error})
  }
}
