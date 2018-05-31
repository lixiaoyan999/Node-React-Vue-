let express = require('express');
let router = express();

let login = require('./login');
let info = require('./info');
let cate = require('./cate');
let news = require('./news');


router.use('/login',login);
router.use('/info',info);
router.use('/cate',cate);
router.use('/news',news);

module.exports = router;