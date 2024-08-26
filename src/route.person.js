const express = require('express')
const router = express.Router()

const people = require("../db/people")
/**
 * define the home page route * 
 */
router.get('/hello', (req, res) => {
  res.json({ message: 'Welcome to the person route!' })
})

/**
 * define the person route
 */
router.get('/', (req, res) => {
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

router.get('/:id/addresses', (req, res) => {
  const personId = parseInt(req.params.id);
  const person = people.find(p => p.id === personId);

  if (person) {
    res.json(person.addresses);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

router.post('/', (req, res) => {
  const { name, age, addresses } = req.body;

  // Validate the request body
  if (!name || typeof age !== 'number' || !Array.isArray(addresses)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  // Create a new person object with a unique ID
  const newPerson = {
    id: people.length > 0 ? people[people.length - 1].id + 1 : 1, // Generate a unique ID
    name,
    age,
    addresses
  };

  // Add the new person to the array
  people.push(newPerson);

  // Respond with the new person
  res.status(201).json(newPerson);
});


module.exports = router