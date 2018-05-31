//连接数据库
let mysql = require('mysql');
let connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'news',
    port:3306
});
//更新数据库
connect.connect();
module.exports = connect;