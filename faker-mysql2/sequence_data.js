const mysql = require("mysql2/promise");
const { faker } = require('@faker-js/faker');
var randomEmail = require('random-email');
let connection;
let insertId;

const db = async () => {
  try {
    // db connection
    connection = await mysql.createConnection({
      host: `${process.env.MARIADB_0412_HOST}`, 
      user: "root",
      password: `${process.env.MARIADB_0412_PASS}`, 
      database: "village3",
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

    // console.time("user 등록시간은 얼마나 걸릴까?");

    // let dt = new Date()
    // for (let i=0; i<100000; i++) {
    //   // values.push(["title"+i, "content"+i, dt.toISOString(), dt.toISOString()])
    //   // values.push([faker.lorem.sentence({ min: 1, max: 3 }), faker.lorem.sentences({ min: 1, max: 3 },'\n'), dt.toISOString(), dt.toISOString()])
    //   // const email = faker.internet.email(); // 중복이 잘됨
    //   const email = randomEmail();
    //   const lead_town = faker.helpers.rangeToNumber({ min: 1, max: 6 });

    //   const town_1_arr = [faker.helpers.rangeToNumber({ min: 7, max: 11 }), null];
    //   const town_1_index = Math.floor(Math.random() * town_1_arr.length);
    //   const town_1 = town_1_arr[town_1_index];
    //   // const town_1 = faker.helpers.rangeToNumber({ min: 7, max: 11 });

    //   let town_2 = null;
    //   if (town_1!=null) {
    //     const town_2_arr = [faker.helpers.rangeToNumber({ min: 12, max: 16 }), null];
    //     const town_2_index = Math.floor(Math.random() * town_2_arr.length);
    //     town_2 = town_2_arr[town_2_index];
    //   }

    //   let town_3 = null;
    //   if (town_2!=null) {
    //     const town_3_arr = [faker.helpers.rangeToNumber({ min: 12, max: 16 }), null];
    //     const town_3_index = Math.floor(Math.random() * town_3_arr.length);
    //     town_3 = town_3_arr[town_3_index];
    //   }

    //   let town_4 = null;
    //   if (town_3!=null) {
    //     const town_4_arr = [faker.helpers.rangeToNumber({ min: 12, max: 16 }), null];
    //     const town_4_index = Math.floor(Math.random() * town_4_arr.length);
    //     town_4 = town_4_arr[town_4_index];
    //   }

    //   values.push([faker.string.alphanumeric(70), email, email, lead_town, faker.string.alphanumeric(100), faker.person.lastName('male'), faker.string.alphanumeric(100), faker.string.alphanumeric(70), faker.helpers.arrayElement(['Google', 'Naver', 'Kakao']), faker.string.alphanumeric(30), town_1, town_2, town_3, town_4])
    //   // dt.setMilliseconds(dt.getMilliseconds() + 1);
    //   // console.log('town_1:',town_1, 'town_2:',town_2, 'town_3:',town_3, 'town_4:',town_4);
    // }

    // // console.log(faker.string.alphanumeric(70))


    // // // insert data into example table
    // let [results] = await connection.query("insert into user(ci_value, email, id_email, lead_town, name, nick_name, phone_num, refresh_token, sns_name, sns_type, town_1, town_2, town_3, town_4) VALUES ?", [values]);
    // // // inserted data's id(auto_increment)
    // // insertId = results.insertId;
    // console.log(results);
    
    // console.timeEnd("user 등록시간은 얼마나 걸릴까?");




    console.time("sequence 등록시간은 얼마나 걸릴까?");

    // insert data
    var values_rental = [
    ];
    for (let i=0; i<3231; i++) {
      await connection.query("insert into sequence(create_at) VALUES (now())", );
    }

    // let [results_rental] = await connection.query("insert into sequence(create_at) VALUES (now())", );
    // // inserted data's id(auto_increment)
    // insertId = results.insertId;
    // console.log(results_rental);

    
    console.timeEnd("sequence 등록시간은 얼마나 걸릴까?");




    // console.time("rental_category_info 등록시간은 얼마나 걸릴까?");

    // // insert data
    // var values_rental_category_info = [
    // ];
    // for (let i=1035; i<=11035; i++) {
    //   // values.push(["title"+i, "content"+i, dt.toISOString(), dt.toISOString()])
    //   // values.push([faker.lorem.sentence({ min: 1, max: 3 }), faker.lorem.sentences({ min: 1, max: 3 },'\n'), dt.toISOString(), dt.toISOString()])
 
    //   var mySet = new Set();      
    //   for (let j=0; j<9; j++) {
    //     mySet.add(faker.helpers.rangeToNumber({ min: 2, max: 10 }));
    //   }

    //   mySet.forEach(function(value) {
    //     // console.log(value);
    //     values_rental_category_info.push([value, i])
    //   });
      
    //   // dt.setMilliseconds(dt.getMilliseconds() + 1);
    // }

    // let [results_rental_category_info] = await connection.query("insert into rental_category_info(category_idx, rental_idx) VALUES ?", [values_rental_category_info]);
    // // // inserted data's id(auto_increment)
    // // insertId = results.insertId;
    // console.log(results_rental_category_info);
    
    // console.timeEnd("rental_category_info 등록시간은 얼마나 걸릴까?");




    // console.time("rental_image 등록시간은 얼마나 걸릴까?");

    // // insert data
    // var values_rental_image = [
    // ];
    // for (let i=1035; i<=11035; i++) {
    //   // values.push(["title"+i, "content"+i, dt.toISOString(), dt.toISOString()])
    //   // values.push([faker.lorem.sentence({ min: 1, max: 3 }), faker.lorem.sentences({ min: 1, max: 3 },'\n'), dt.toISOString(), dt.toISOString()])
 
    //   var mySet = new Set();      
    //   for (let j=0; j<faker.helpers.rangeToNumber({ min: 1, max: 10 }); j++) {
    //     mySet.add(faker.image.url());
    //   }

    //   mySet.forEach(function(value) {
    //     // console.log(value);
    //     values_rental_image.push([value, i])
    //   });
      
    //   // dt.setMilliseconds(dt.getMilliseconds() + 1);
    // }

    // let [results_rental_image] = await connection.query("insert into rental_image(image_url, rental_idx) VALUES ?", [values_rental_image]);
    // // // inserted data's id(auto_increment)
    // // insertId = results.insertId;
    // console.log(results_rental_image);

    
    // console.timeEnd("rental_image 등록시간은 얼마나 걸릴까?");



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
