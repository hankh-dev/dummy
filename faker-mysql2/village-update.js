const mysql = require("mysql2/promise");
const { fakerKO } = require('@faker-js/faker');
var randomEmail = require('random-email');
let connection;
let insertId;

const db = async () => {


  try {
    // db connection
    connection = await mysql.createConnection({
      host: `${process.env.MARIADB_0412_HOST}`, 
      // host: `localhost`, 
      user: "root",
      password: `${process.env.MARIADB_0412_PASS}`, 
      database: "village4",
    });

    // Select all rows from example table
    // let [rows, fields] = await connection.query("SELECT * FROM example");
    // console.log(rows);
  } catch (e) {
    console.log(e);
  }

  try {

    console.time("rental - title 수정시간은 얼마나 걸릴까?");

    for (let i=30000; i<=2001035; i++) {
      let [results] = await connection.query('UPDATE rental SET ? WHERE rental_idx = ?', [{ title: fakerKO.lorem.sentence({ min: 2, max: 3 }) }, i]);
    }

    // // inserted data's id(auto_increment)
    // insertId = results.insertId;
    // console.log(results);
    
    console.timeEnd("rental - title 수정시간은 얼마나 걸릴까?");





  } catch (e) {
    console.log(e);
  }
  

  // try {
  //   // update row
  //   let [results] = await connection.query(
  //     "UPDATE example SET name=? WHERE id=?",
  //     ["updated_sample", insertId]
  //   );

  //   // Select all rows from example table
  //   let [rows, fields] = await connection.query("SELECT * FROM example");
  //   console.log(rows);
  // } catch (e) {
  //   console.log(e);
  // }
  // try {
  //   // delete row
  //   let [results] = await connection.query("DELETE FROM example WHERE id=?", [
  //     insertId,
  //   ]);

  //   // Select all rows from example table
  //   let [rows, fields] = await connection.query("SELECT * FROM example");
  //   console.log(rows);
  // } catch (e) {
  //   console.log(e);
  // }
};

db();
