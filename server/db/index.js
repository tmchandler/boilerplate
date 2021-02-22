// database entry file what is real
const mysql = require('mysql');


const db = mysql.createConnection({
  user: 'root',
  password: 'TunaStarfish45',
  database: 'donutshop',
  host: 'localhost'
})

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('db connect works');
  }
});

let getAllDonuts = (callback) => {
  let querystr = 'SELECT * FROM donuts';

  db.query(querystr, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data);
    }
  })
}

// getAllDonuts((data) => {
//   console.log(data);
// })

module.exports.getAllDonuts = getAllDonuts;