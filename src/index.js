const express = require('express');
const handlebars = require('express-handlebars');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/create', (req, res) => {
  res.render('create')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/details', (req, res) => {
  res.render('details')
});

app.get('*', (req, res) => {
  res.render('404')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});