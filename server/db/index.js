// database entry file what is real
const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: 'harshin1',
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

module.exports = db;
