// server entry file
const express = require('express');
const donuts = require('./db/model.js');
const port = 3000;

var app = express();

app.use(express.json());
// express static
app.use(express.static('dist'))

app.get('/donuts', (req, res) => {
  // get all the donos
  // console.log('hello from /get');
  donuts.getAllDonuts((err, donuts) => {
    if (err) {
      // res.status(500).send(err); // we usually avoid sending back the entire error
      res.status(500).send('Issue retrieving donuts.');
    } else {
      // console.log("🚀 ~ file: index.js ~ line 18 ~ donuts.getAllDonuts ~ donuts", donuts)
      res.send(donuts);
    };
  });
});

app.post('/donuts', (req, res) => {
  donuts.postDonut(req.body, (err, success) => {
    if (err) {
      res.status(400).send('Issue storing donut.');
      // depending on the issue, this may be a 500, but 400 might be more common for us
    } else {
      res.status(201).send(success);
    };
  });
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('server running on ' + port);
  }
})