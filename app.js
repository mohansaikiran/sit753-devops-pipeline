const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({result: 'Hello, World!'});
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok', message: 'Service is running!' });
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.json({ result: sum });
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

module.exports = app;