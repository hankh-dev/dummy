async function main() {
  // get the client
  const mysql = require('mysql2/promise');
  // create the connection
  const connection = await mysql.createConnection({
    host:`${process.env.LEO_MYSQL_HOST}`, 
    user: 'admin', 
    password: `${process.env.LEO_MYSQL_PASS}`, 
    database: 'kh-blog'
  });
  

//   const [rows, fields] = await connection.execute('SELECT * FROM `article` WHERE `title` = ?', ['제목1']);
//   const [rows, fields] = await connection.execute(`SELECT * FROM article WHERE title = '제목1'`);

  // const [rows, fields] = await connection.execute(`delete from article`);
  // console.log(rows, fields)

  console.time("계산시간은 얼마나 걸릴까?");

  for (let i=0; i<1000; i++) {
    const [rows, fields] = await connection.execute(`INSERT INTO article(title, content, created_at, updated_at ) VALUES ('title${i}', 'content${i}', NOW(6), NOW(3))`);
    console.log(rows, fields)
  }

  console.timeEnd("계산시간은 얼마나 걸릴까?");
  

//   await connection.execute(`INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)`, [...userDetails]);
  

}

main();