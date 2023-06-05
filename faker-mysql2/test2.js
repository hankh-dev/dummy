const mysql = require("mysql2/promise");
let connection;
let insertId;

const db = async () => {
  try {
    // db connection
    connection = await mysql.createConnection({
      host: `${process.env.LEO_MYSQL_HOST}`, 
      user: "admin",
      password: `${process.env.LEO_MYSQL_PASS}`, 
      database: "kh-blog",
    });

    // Select all rows from example table
    // let [rows, fields] = await connection.query("SELECT * FROM example");
    // console.log(rows);
  } catch (e) {
    console.log(e);
  }

  try {
    // insert data
    var values = [
      ["demian", "demian@gmail.com", "now(6)", "now(3)"],
      ["john", "john@gmail.com",  "now(6)", "now(3)"],
    ];

    // insert data into example table
    let [results] = await connection.query("INSERT INTO article(title, content, created_at, updated_at ) VALUES ?", [values]);
    // inserted data's id(auto_increment)
    insertId = results.insertId;
    console.log(results);

    // var sql = "INSERT INTO article(title, content, created_at, updated_at ) VALUES ?";
    // // var sql = "INSERT INTO Test (name, email, n) VALUES ?";
    
    // conn.query(sql, [values], function (err) {
    //   if (err) throw err;
    //   conn.end();
    // });

    // Select all rows from example table
    // let [rows, fields] = await connection.query("SELECT * FROM example");
    // console.log(rows);
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
