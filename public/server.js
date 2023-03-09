const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3001;
const base = `${__dirname}`;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());




app.get('/', (req, res) => {
  res.sendFile(`${base}/amrit.html`);
  console.log(base);
});


app.get('/script.js', (req, res) => {
  res.sendFile(`${base}/script.js`);
});

app.get('/ss', (req, res) => {
  res.sendFile(`${base}/ss.js`);
});

app.get('/sam', (req, res) => {
  res.sendFile(`${base}/sam.html`);
});

app.get('/result', (req, res) => {
  res.sendFile(`${base}/result.html`);
});

app.get('/user', (req, res) => {
  res.sendFile(`${base}/kuchbhi.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
