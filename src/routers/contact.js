const http = require('http');
const express = require('express')
const Contact = require('../models/contact')
const router = new express.Router()


router.get('/', function (req, res, next) {
	res.render('contact', { title: ' What we have to do?' });
});

// create new contact
router.post('/contact', async (req, res,) => {
  const contact = new Contact ({
    name: req.body.name,
    phone: parseInt(req.body.phone),
    email: req.body.email
  })
  try {
     await contact.save()
      res.status(201).send(contact)
  } catch (e) {
      res.status(400).send(e)
    }
})

// find all the contacts
router.get('/contact', async (req, res,) => {
  try {
    const contact = await Contact.find({})
    res.send(contact)
  } catch (e) {
    res.status(500).send(e)
  }
})

// find one contact
router.get('/contact/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const contact = await Contact.findById({_id})

    if (!contact) {
      return res.status(404).send()
    }
    res.send(contact)
  } catch (e) {
    res.status(500).send()
  }
})

// edit contact
router.patch('/contact/:id', async (req, res) => {
  const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'phone', 'email']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
    if (!contact) {
      return res.status(404).send()
    }
    res.send(contact)
  } catch (e) {
    res.status(400).send(e)
  }
})

// delete contact
router.delete('/contact/:id/delete', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    
    if (!contact) {
      return res.status(404).send()
    }
    res.send(contact)
  } catch (e) {
    res.status(500).send()
  }
})
      
module.exports = router