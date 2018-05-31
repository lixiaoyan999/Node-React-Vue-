let express = require('express');
let app = express();
let bodyParse = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    res.send(req.body);
});


app.listen(3000);
