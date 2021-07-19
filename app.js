const express = require('express')
const db = require('./db/mongoose')
const contactRouter = require('./src/routers/contact')
const userRouter = require('./src/routers/user')
const path = require('path')
const http = require('http')

const app = express();

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '/public')

app.get('/', function (req, res, next) {
  res.sendFile('/home/celticlab/Downloads/Noddy/contact-app/public/signin.html')
  // console.log('Successfully User Created!')
})

app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(contactRouter)
app.use(userRouter)

var jwt = require('jsonwebtoken');
const User = require('./src/models/user')
var token = jwt.sign({ _id:  '60ed4843479c3d1ff715ba6a' }, 'thisismynewproject');

// console.log(token)

jwt.verify(token, 'thisismynewproject', function(err, token) {
    // console.log(token)
  })

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

module.exports = app