const mysql = require("mysql2/promise");
const { faker } = require('@faker-js/faker');
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
    ];

    console.time("전체 계산시간은 얼마나 걸릴까?");

    let dt = new Date()
    for (let i=0; i<10000; i++) {
      // values.push(["title"+i, "content"+i, dt.toISOString(), dt.toISOString()])
      values.push([faker.lorem.sentence({ min: 1, max: 3 }), faker.lorem.sentences({ min: 1, max: 3 },'\n'), dt.toISOString(), dt.toISOString()])
      dt.setMilliseconds(dt.getMilliseconds() + 1);
    }

    console.time("쿼리 계산시간은 얼마나 걸릴까?");

    // insert data into example table
    let [results] = await connection.query("INSERT INTO article(title, content, created_at, updated_at ) VALUES ?", [values]);
    // inserted data's id(auto_increment)
    insertId = results.insertId;
    console.log(results);

    console.timeEnd("전체 계산시간은 얼마나 걸릴까?");
    console.timeEnd("쿼리 계산시간은 얼마나 걸릴까?");


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
