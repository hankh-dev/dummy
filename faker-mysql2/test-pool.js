const mysql = require('mysql2/promise');
const { faker } = require('@faker-js/faker');

(async function() {
  let pool = mysql.createPool({
    host: `${process.env.LEO_MYSQL_HOST}`, 
    user: 'admin', 
    password: `${process.env.LEO_MYSQL_PASS}`, 
    database: 'kh-blog',
    connectionLimit: 66
  });

  console.log(pool);

  console.log("testset");
  
  console.time("계산시간은 얼마나 걸릴까?");

  for (let i=0; i<1000; i++) {
    
    const [rows, fields] = await pool.query(`INSERT INTO article(title, content, created_at, updated_at ) VALUES ('${faker.lorem.sentence({ min: 1, max: 3 })}', '${faker.lorem.sentence({ min: 1, max: 3 })}', NOW(6), NOW(3))`);
    // console.log(rows, fields)
  }

  console.timeEnd("계산시간은 얼마나 걸릴까?");

  // let users1 = await pool.query('SELECT * FROM Users')
  // let users2 = await pool.query('SELECT * FROM Users')
  // let users3 = await pool.query('SELECT * FROM Users')
  // let users4 = await pool.query('SELECT * FROM Users')
  // console.log(users1)
  // console.log(users2)
  // console.log(users3)
  // console.log(users4)


})()