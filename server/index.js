// server entry file
const express = require('express');
const donuts = require('./db/index.js');

var app = express();

// express static
const port = 3000;

app.get('/donuts', (req, res) => {
  // get all the donos
  console.log('hello from /get');
  donuts.getAllDonuts((err, donuts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("🚀 ~ file: index.js ~ line 18 ~ donuts.getAllDonuts ~ donuts", donuts)
      res.send(donuts);
    }
  })
})

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('server running on ' + port);
  }
})