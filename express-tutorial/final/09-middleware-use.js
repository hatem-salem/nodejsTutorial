const express = require('express');
const app = express();
const logger = require('./logger');

app.use("/api", logger);


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
  res.send('About');
});
app.listen(5000, () => { console.log("Server is listening on Port 5000...."); });
console.ti;