const mongoose = require('mongoose')
const Card = require('./models/Card')
const express = require('express')

mongoose.connect('mongodb://localhost:27017/flashcards', {
  useNewUrlParser: true,
})

const app = express()
app.use(express.json())
app.listen(3334, () => console.log('Express ready on port 3334'))

app.get('/cards', (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

app.get('/cards/:id', (req, res) => {
  Card.findById(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

app.post('/cards', (req, res) => {
  Card.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

app.patch('/cards/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

app.delete('/cards/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})
