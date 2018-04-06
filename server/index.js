const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const dbSavers = require('../db/index.js');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../dist`));

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/accounts', (req, res) => {
  dbSavers.accountSave(`${req.body.firstName} ${req.body.lastName}`, req.body.email, req.body.password);
  res.send('saved');
});
app.post('/payments', (req, res) => {
  dbSavers.paymentSave(req.body.creditCard, req.body.experation, req.body.cvv, req.body.zip);
  res.send('saved');
});
app.post('/shipping', (req, res) => {
  dbSavers.shippingSave(`${req.body.address1} ${req.body.address2}`, req.body.city, req.body.state, req.body.zip);
  res.send('saved');
});

app.listen(3000, () => console.log('listening on port 3000!'));
