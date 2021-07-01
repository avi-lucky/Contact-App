const request = require('supertest')
const app = require('../app')
const Contact = require('../src/models/contact')
const db = require('../db/mongoose')

const contactOne = {
    name: 'Ankita',
    phone: '9876976012',
    email: 'ankita07@example.com'
}

beforeEach(async () => {
    await Contact.deleteMany()
    await new Contact(contactOne).save()
})

// create new contact
test('Should create a new contact', async () => {
    await request(app).post('/contact').send({
        name: 'Archit',
        phone: '9876543212',
        email: 'archit07@example.com'
    }).expect(201)
})

// delete contact
test('Should delete a contact', async () => {
    await request(app)
    .delete('/contact/:id')
    const contact = await Contact.findByIdAndDelete(_id)
    .send()
    expect(Contact).toBeNull()
})
