const mysql = require('mysql2/promise');
const axios = require('axios');

const db = async () => {

    try {
        // db connection
        connection = await mysql.createConnection({
            host: `${process.env.MARIADB_PROD_HOST}`, 
            // host: `localhost`, 
            user: "admin",
            password: `${process.env.MARIADB_PROD_PASS}`, 
            database: "village",
        });

        // Select all rows from example table
        // let [rows, fields] = await connection.query("SELECT * FROM example");
        // console.log(rows);

        // 간단한 쿼리
        let [rows, fields] = await connection.query(
            'SELECT * FROM `town`'
        );

        // console.log(rows);
        rows.forEach(async element => {

            const response = await axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
                headers: {
                    'Authorization': `KakaoAK ${process.env.KAKAO_MY_REST_API_KEY}`
                },
                data: new URLSearchParams({
                    'query': element.town_name
                })
            });
            console.log(element.town_name)
            // console.log(JSON.stringify(response.data,null,2));

            // let [results] = await connection.query("insert into town_kakao(town_name, j) VALUES (?, ?)", [element.town_name, JSON.stringify(response.data,null,2)]);
            // // insertId = results.insertId;
            // console.log(results);

            // response.data.documents.forEach(async d=>{
            //     let [results] = await connection.query("insert into town_kakao_address(address_name, b_code, h_code, main_address_no, mountain_yn, region_1depth_name, region_2depth_name, region_3depth_h_name, region_3depth_name, sub_address_no, x, y) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            //                                                                         , [d.address.address_name, d.address.b_code, d.address.h_code, d.address.main_address_no, d.address.mountain_yn, d.address.region_1depth_name, d.address.region_2depth_name, d.address.region_3depth_h_name, d.address.region_3depth_name, d.address.sub_address_no, d.address.x, d.address.y]);
            //     // insertId = results.insertId;
            //     console.log(results);
            // })


            // res.send(response.data);

        });
    } catch (e) {
        console.log(e);
    }



};

db();


