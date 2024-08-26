const express = require('express')
const router = express.Router()

const people = [
  { id: 1, nombre: 'Yanet Desquisiada', edad: 30 },
  { id: 2, nombre: 'Kevin Loco', edad: 25 },
  { id: 3, nombre: 'Antonio Odioso', edad: 35 }
];

/**
 * define the home page route * 
 */
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the person route!' })
})

/**
 * define the person route
 */
router.get('/list', (req, res) => {
  res.json(people);
})

router.get('/:id', (req, res) => {
  const personId = parseInt(req.params.id);
  const person = people.find(p => p.id === personId);

  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

module.exports = router