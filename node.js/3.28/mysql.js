let ejs = require('ejs');
let url = require('url');
let querystring = require('querystring');
let app = require('./module/exporess router');
let fs = require('fs');
let mysql = require('mysql');

let connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'news'
});
connect.connect();
app.get('/query',function (req,res) {

});
app.get('/insert',function () {
    let values = {ctitle:'这是一条新闻',cdesc:'这是一条关于新闻的描述',content:'这是新闻的内容'};
    connect.query('insert into content (ctitle,cdesc,content) values (?,?,?)',{ctitle,cdesc,content},function (err,result) {

    })
});
app.get('/update',function () {

});

let app = {
    'login' : function (req,res) {
        let str = 'zhangsan';
        ejs.renderFile('view/login.ejs',{name:str},function (err,data) {
            if (err) throw err;
            res.end(data);
        });
    },
    'index' : function (req,res) {
        let str = 'index';
        res.end('index');
    },
    'resiger' : function (req,res) {
        console.log('register');
        res.end('regisetr');
    },
    'check' : function (req,res) {
        console.log(url.parse(req.url,true));
        res.end('check');
    },
    'dochek' : function (req,res) {
        let str = '';
        req.on('data',function (chunk) {
            str += chunk;
        });
        req.on('end',function () {
            console.log(querystring.parse(str));
            res.end(str)
        })
    }
};
module.exports = app;