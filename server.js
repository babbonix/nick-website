const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('assets/img'));

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});











