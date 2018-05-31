let express = require('express');
let app = express();
let admin = require('./module/admin');
let user = require('./module/user');

app.use('/',user);

app.get('/', function (req, res) {
    res.send('首页');
});

app.use('/admin',admin);  //路游级中间件

app.listen(3000);
