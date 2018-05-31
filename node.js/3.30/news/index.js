//引入文件
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
//引入admin
let admin = require('./modules/admin');
let user = require('./modules/app/user');
//引入上传图片文件
let multer = require('multer');
let fs = require('fs');
let upload = multer({dest:'upload/'});
app.use('/upload',express.static('upload'));
//引入session
let session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//设置模板引擎
app.set('views','./views');
app.set('view engine','ejs');
app.use(express.static('static'));

//设置头信息
app.use(bodyParser.urlencoded({ extended: false }));
//设置返回数据
app.use(bodyParser.json());
//连接数据库

app.use('/',user);

app.use((req,res,next)=>{
    if(req.path == '/admin/login' || req.path == '/admin/login/check' ){
        next();
    }else if(req.session.isLogin || req.session.isLogin == 'yes'){
        next();
    }else{
        res.redirect('/admin/login');
    }
});

app.use('/admin',admin);


//////// 添加图片 /////////////
app.get('/upload',(req,res)=>{
    res.render('upload',function(err,data){
        if(err)throw err;
        res.send(data);
    })
});
app.post('/uploadimg', upload.single('file'), function(req, res, next){
    let file = req.file;
    let date = new Date;
    let dirname = [date.getFullYear(),date.getMonth()+1,date.getDate()].join('-');
    let pathname =   __dirname +'/upload/' + dirname;
    if (!fs.existsSync(pathname)){
        fs.mkdirSync(pathname);
    }
    let filename = '' + date.getTime() + Math.floor(Math.random() * 20) + '.' + file.originalname.split('.').pop();
    fs.readFile(file.path,(err,data)=>{
        if (err) throw err;
        fs.unlinkSync(file.path);
        fs.writeFile(pathname + '\\' + filename,data,(err,data)=>{
            if(err) throw err;
            res.send(`/upload/${dirname}/${filename}`);
        })
    });
});

app.use(function(req,res,next){
    res.render('app/index',(err,data)=>{
        if(err)throw err;
        res.send(data);
    })
});

///访问端口号

app.listen(5000,function () {
    console.log("localhost:5000");
});
