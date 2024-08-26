const express = require('express')
const router = express.Router()

const people = [
  { 
    id: 1, 
    nombre: 'Yanet Desquisiada', 
    edad: 30,
    direcciones: [
      'Calle Falsa 123, Ciudad A',
      'Avenida Siempre Viva 456, Ciudad B'
    ]
  },
  { 
    id: 2, 
    nombre: 'Kevin Loco', 
    edad: 25,
    direcciones: [
      'Calle del Olvido 789, Ciudad C',
      'Avenida de los Locos 101, Ciudad D'
    ]
  },
  { 
    id: 3, 
    nombre: 'Antonio Odioso', 
    edad: 35,
    direcciones: [
      'Calle Amargura 112, Ciudad E',
      'Avenida Odio 314, Ciudad F'
    ]
  }
];

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
    res.json(person.direcciones);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

router.post('/', (req, res) => {
  const { nombre, edad, direcciones } = req.body;

  // Validate the request body
  if (!nombre || typeof edad !== 'number' || !Array.isArray(direcciones)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  // Create a new person object with a unique ID
  const newPerson = {
    id: people.length > 0 ? people[people.length - 1].id + 1 : 1, // Generate a unique ID
    nombre,
    edad,
    direcciones
  };

  // Add the new person to the array
  people.push(newPerson);

  // Respond with the new person
  res.status(201).json(newPerson);
});


module.exports = router