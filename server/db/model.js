// database queries
const db = require('./index');

const getAllDonuts = (callback) => {
  const querystr = 'SELECT * FROM donuts';

  db.query(querystr, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
};

const postDonut = (donutParams, callback) => {
  const querystr = 'INSERT INTO donuts (quantity, type_donut, sprinkles, price) values( ?, ?, ?, ?);';
  const { quantity, type, sprinkles, price } = donutParams;
  const options = [quantity, type, sprinkles, price];

  db.query(querystr, options, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
};

// getAllDonuts((data) => {
//   console.log(data);
// })

module.exports = { 
  getAllDonuts,
  postDonut,
};
