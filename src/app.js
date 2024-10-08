const express = require('express')
const app = express()
const config = require('../cfg/config.json');
const routePerson = require('./route.person');

// Middleware para parsear JSON
app.use(express.json());

app.use('/person', routePerson);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})