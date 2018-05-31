let ejs = require('ejs');
let url = require('url');
let querystring = require('querystring');
let fs = require('fs');

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