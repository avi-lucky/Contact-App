// // CRUD create read update delete

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/contact-app-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})