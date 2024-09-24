const express = require('express');
const path = require('path');  // Required to work with file paths
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok', message: 'Service is running!' });
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.json({ result: sum });
});

const server = app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

module.exports = server;