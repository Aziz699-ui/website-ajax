const express = require('express');
const path = require('path');
const pages = require('./pages');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/api/page/:slug', (req, res) => {
  const page = pages[req.params.slug];
  if (!page) return res.status(404).json({ error: 'Page not found' });
  res.json(page);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
