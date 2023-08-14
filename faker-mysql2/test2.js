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
      database: "village",
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

    console.time("user 등록시간은 얼마나 걸릴까?");

    let dt = new Date()
    for (let i=0; i<1000; i++) {
      // values.push(["title"+i, "content"+i, dt.toISOString(), dt.toISOString()])
      // values.push([faker.lorem.sentence({ min: 1, max: 3 }), faker.lorem.sentences({ min: 1, max: 3 },'\n'), dt.toISOString(), dt.toISOString()])
      // const email = faker.internet.email(); // 중복이 잘됨
      const email = randomEmail();
      const lead_town = faker.helpers.rangeToNumber({ min: 1, max: 6 });
      const town_1 = faker.helpers.rangeToNumber({ min: 7, max: 11 });
      const town_2 = faker.helpers.rangeToNumber({ min: 12, max: 16 });
      values.push([faker.string.alphanumeric(70), email, email, lead_town, faker.string.alphanumeric(100), faker.person.lastName('male'), faker.string.alphanumeric(100), faker.string.alphanumeric(70), faker.helpers.arrayElement(['Google', 'Naver', 'Kakao']), faker.string.alphanumeric(30), town_1, town_2])
      // dt.setMilliseconds(dt.getMilliseconds() + 1);
    }

    // console.log(faker.string.alphanumeric(70))


    // // insert data into example table
    // // let [results] = await connection.query("INSERT INTO article(title, content, created_at, updated_at ) VALUES ?", [values]);
    // let [results] = await connection.query("insert into user(active_at, ci_value, create_at, delete_at, device_id, do_not_disturb_end_hour, do_not_disturb_end_minute, do_not_disturb_start_hour, do_not_disturb_start_minute, do_not_disturb_time_yn, dormancy_at, email, id_email, invitation_code, is_after_noon, last_login_date, lead_town, levelup_at, marketing_notice_yn, name, nick_name, notice_notice_yn, out_reason, phone_num, profile_image_url, push_token, refresh_token, sns_name, sns_type, star_point, status, town_1, town_2, town_3, town_4, update_at, updator, user_level, category_idx) VALUES ?", [values]);
    let [results] = await connection.query("insert into user(ci_value, email, id_email, lead_town, name, nick_name, phone_num, refresh_token, sns_name, sns_type, town_1, town_2) VALUES ?", [values]);
    // // inserted data's id(auto_increment)
    // insertId = results.insertId;
    console.log(results);

    
    console.timeEnd("user 등록시간은 얼마나 걸릴까?");



    console.time("rental 등록시간은 얼마나 걸릴까?");

    // insert data
    var values_rental = [
    ];
    for (let i=0; i<1000; i++) {
      // values.push(["title"+i, "content"+i, dt.toISOString(), dt.toISOString()])
      // values.push([faker.lorem.sentence({ min: 1, max: 3 }), faker.lorem.sentences({ min: 1, max: 3 },'\n'), dt.toISOString(), dt.toISOString()])
      // const email = faker.internet.email(); // 중복이 잘됨
      const email = randomEmail();
      const lead_town = faker.helpers.rangeToNumber({ min: 1, max: 6 });
      const town_1 = faker.helpers.rangeToNumber({ min: 7, max: 11 });
      const town_2 = faker.helpers.rangeToNumber({ min: 12, max: 16 });

      const content = faker.lorem.sentences(faker.helpers.rangeToNumber({ min: 1, max: 5 }), '\n')
      const rental_price = faker.helpers.rangeToNumber({ min: 1000, max: 100000 });
      const user_idx = faker.helpers.rangeToNumber({ min: 1032, max: 2031 })

      values_rental.push([true, content, rental_price, faker.helpers.rangeToNumber({ min: 1, max: 4 }), faker.lorem.sentence({ min: 2, max: 3 }), faker.helpers.rangeToNumber({ min: 0, max: 1000 }), user_idx])
      // dt.setMilliseconds(dt.getMilliseconds() + 1);
    }

    let [results_rental] = await connection.query("insert into rental(active_yn, content, rental_price, status, title, view_cnt, user_idx) VALUES ?", [values_rental]);
    // // inserted data's id(auto_increment)
    // insertId = results.insertId;
    console.log(results_rental);

    
    console.timeEnd("rental 등록시간은 얼마나 걸릴까?");


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
