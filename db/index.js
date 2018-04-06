const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/checkout');

const account = new Schema({
  name: String,
  email: String,
  password: String,
});

const Accounts = mongoose.model('Accounts', account);

const payment = new Schema({
  card: String,
  experation: String,
  cvv: String,
  zip: String,
});

const Payments = mongoose.model('Payments', payment);

const shipping = new Schema({
  address: String,
  city: String,
  state: String,
  zip: String,
});

const Shippings = mongoose.model('Shippings', shipping);

const dbSavers = {
  accountSave: (name, email, password) => {
    const person = new Accounts({
      name,
      email,
      password,
    });
    person.save((err) => {
      if (err) { console.log(err); }
    });
  },
  paymentSave: (card, experation, cvv, zip) => {
    const person = new Payments({
      card,
      experation,
      cvv,
      zip,
    });
    person.save((err) => {
      if (err) { console.log(err); }
    });
  },
  shippingSave: (address, city, state, zip) => {
    const person = new Shippings({
      address,
      city,
      state,
      zip,
    });
    person.save((err) => {
      if (err) { console.log(err); }
    });
  },
};

module.exports = dbSavers;
