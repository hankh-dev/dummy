const mysql = require('mysql2/promise');

(async function() {
  let pool = mysql.createPool({
    host: `${process.env.LEO_MYSQL_HOST}`, 
    user: 'admin', 
    password: `${process.env.LEO_MYSQL_PASS}`, 
    database: 'kh-blog',
    connectionLimit: 66
  });

  console.time("계산시간은 얼마나 걸릴까?");

  for (let i=0; i<1000; i++) {
    const [rows, fields] = await pool.query(`INSERT INTO article(title, content, created_at, updated_at ) VALUES ('title${i}', 'content${i}', NOW(6), NOW(3))`);
    console.log(rows, fields)
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