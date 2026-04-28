const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook/fanvue', (req, res) => {
  console.log('Fanvue Event:', req.body);
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('Server is live');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
