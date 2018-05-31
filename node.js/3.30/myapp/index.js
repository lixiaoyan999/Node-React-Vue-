let express = require('express');
let app = express();


let bodyParser = require('body-parser');

let mysql = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'news'
});

app.set('views',__dirname+'/views');//设置模板引擎目录
app.set('view engine', 'ejs');//设置模板引擎
//静态文件托管
app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// 登陆
app.get('/login',function (req,res) {
    res.render('login',function (err,data) {
        if(err) throw  err;
        res.send(data);
    })
});


app.post('/check',function (req,res) {
    let {username,password} = {username:req.body.username,password:req.body.password};
    connection.query("select * from manage where username=? and password=?",[username,password],function (err,result) {
        if(err) throw err;
        if(result.length == 1){
            res.redirect('/admin');
        }else {
            res.send("<script>alert('fail');history.back();</script>")
        }
    });

});

app.listen(3000);