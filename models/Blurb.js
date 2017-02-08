const
  mongoose = require('mongoose'),
  blurbSchema = new mongoose.Schema({
    title: {type: String},
    body: {type: String}
  }, {timestamps: true})

mongoose.Promise = global.Promise
module.exports = mongoose.model('Blurb', blurbSchema)
