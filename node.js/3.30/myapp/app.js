let express = require('express');
let app = express();

app.set('views','./views');//设置模板引擎目录
app.set('view engine', 'ejs');//设置模板引擎
app.use(express.static('static'));//设置静态文件


app.get('/', function (req, res) {
    res.render('index',{name:'首页'},function(err,data){
        res.send(data);
    });
});
app.get('/login', function (req, res) {
    res.render('login',{name:'zhangsan'},function(err,data){
        res.send(data);
    });
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
    res.send('点击');
});


let server = app.listen(3000, function () {
    console.log('localhost:3000');
});
