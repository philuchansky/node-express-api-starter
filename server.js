const
  dotenv = require('dotenv').load({silent: true}),
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  PORT = process.env.PORT || 3000,
  MONGODB_URL = process.env.MONGODB_URL,
  apiRoutes = require('./routes/api.js')

mongoose.connect(MONGODB_URL, (err) => {
  console.log(err || 'Connected to MongoDB.')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))


app.get('/', (req, res) => {
  res.json({message: "Hello World!"})
})

app.use('/api', apiRoutes)

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}.`)
})
