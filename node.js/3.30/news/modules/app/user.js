let express = require('express');
let router = express.Router();

let shouye = require('./shouye');
let login = require('./login');


router.use('/',shouye);
router.use('/login',login);


module.exports = router;