let express = require('express');
let app = express();
let router = express.Router();

router.get('/',function (req,res) {
    res.end('admin - index');
});
router.get('/update',function (req,res) {
    res.end('admin - update');
});
router.get('/delete',function (req,res) {
    res.end('admin - delete');
});
router.get('/insert',function (req,res) {
    res.end('admin - insert');
});

module.exports = router;
