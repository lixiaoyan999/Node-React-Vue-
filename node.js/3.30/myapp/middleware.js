let express = require('express');
let app = express();

app.use(function (req,res,next) {
    console.log('middleware');
    next();
});

app.get('/', function (req, res) {
    res.send('首页');
});
app.get('/login', function (req, res) {
    res.send('login');
});
// 动态路由  req.params
app.get('/news/:nid', function (req, res) {    //news/:nid为一个动态路由
    console.log(req.params.nid);
    res.send('新闻');
});
// 查询字符串  req.query
app.get('/show', function (req, res) {
    console.log(req.query);
    res.send('show');
});
app.post('/check', function (req, res) {

});

//错误处理中间件
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);
