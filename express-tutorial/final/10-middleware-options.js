const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/api/products', (req, res) => {
  res.send('About');
});
app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('About');
});
app.listen(5000, () => { console.log("Server is listening on Port 5000...."); });
console.ti;