const express = require('express')
const db = require('./db/mongoose')
const contactRouter = require('./src/routers/contact')
const path = require('path')
const http = require('http')



const app = express();

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(contactRouter)

// app.get('/', (req, res) => {
//     const contact = new Contact(req.body)
    
//     contact.save().then(() => {
//         res.send(contact)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

module.exports = app