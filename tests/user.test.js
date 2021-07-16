const request = require('supertest')
const app = require('../app')
const User = require('../src/models/user')
const Contact = require('../src/models/contact')
const db = require('../db/mongoose')

const userOne = {
    name: 'Rakesh',
    email: 'rakesh@example.com',
    password: 'Rakesh20!'
}

beforeAll(async () => {
    await User.deleteMany()
})

var token, user

// sigin up user
test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: userOne.name,
        email: userOne.email,
        password: userOne.password
    })
    .expect((res) => {(res.body.user)})
    .expect(201)
})

// login user
test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    })
    .expect(200)
    .expect((res) => {token = res.body.token, user = res.body.user})
})

const contactOne = {
    name: 'Ankita',
    phone: '9876976012',       
    email: 'ankita07@example.com',
}

const contactTwo = {
    name: 'Summit',
    phone: '9876543210',
    email: 'summit21@gmail.com'
}

var id

// create new contact
test('Should create a new contact', async () => {
    await request(app).post('/contact')
    .set('Authorization', `Bearer ${token}`)
    .send({
        name: contactOne.name,
        phone: contactOne.phone,
        email: contactOne.email
    })
    .expect((res) => {id = res.body._id})
    .expect(201)
})

// should read contact
test('Should read all contact', async () => {
    const response = await request(app).get('/contact')
    .set('Authorization', `Bearer ${token}`)
    .expect(200)
    expect(response.body[0].name).toEqual(contactOne.name)
})

// update contact
test('Should update a contact', async () => {
    await request(app).patch(`/contact/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send({
        name: contactTwo.name,
        phone: contactTwo.phone,
        email: contactTwo.email
    })
    .expect(200)
})

// delete contact
test('Should delete a contact', async () => {
    await request(app)
    .delete(`/contact/${id}/delete`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);
})

// logout user
test('Should logout existing user', async () => {
    await request(app)
    .post('/users/logout')
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200)
})