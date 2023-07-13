import data from './data.js';
import express from 'express';
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Your app is running on http://127.0.0.1:${PORT}`);
});
