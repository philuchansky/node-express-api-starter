const
  mongoose = require('mongoose'),
  blurbSchema = new mongoose.Schema({
    title: {type: String},
    body: {type: String}
  }, {timestamps: true})

module.exports = mongoose.model('Blurb', blurbSchema)
