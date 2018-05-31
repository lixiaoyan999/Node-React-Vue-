// 封装路由
let http = require('http');
let app = require('./module/exporess router');
let ejs = require('ejs');

// 调用app.get
app.get('login',function (req,res) {
    ejs.renderFile('view/login.ejs',{name:'张三'},(err,data)=>{
        res.end(data);
    })
});


app.get('index',function (req,res) {
   ejs.renderFile('view/index.ejs',{name:'首页',lists:['html','css','js']},(err,data)=>{
       res.end(data);
   })
});
app.post('/check',function (req,res) {
    fs.appendFile('./a.txt',res,res,(err)=>{
        res.end(data);

    })
});

http.createServer(app).listen(3000,err=>{console.log('localhost:3000')});