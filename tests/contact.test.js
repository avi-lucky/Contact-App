const request = require('supertest')
const app = require('../app')
const Contact = require('../src/models/contact')
const db = require('../db/mongoose')

const contactOne = {
    name: 'Ankita',
    phone: '9876976012',
    email: 'ankita07@example.com'
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
    .expect(200)
    expect(response.body[0].name).toEqual(contactOne.name)
})

// update contact
test('Should update a contact', async () => {
    await request(app).patch(`/contact/${id}`)
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
    .send()
    .expect(200);
})
