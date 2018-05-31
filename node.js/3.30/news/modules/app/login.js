let express = require('express');
let router = express.Router();
let connection = require('../../config/db');
router.get('/',(req,res)=>{
   res.render('app/denglu.ejs',(err,data)=>{
       res.send(data);
   })
});


router.post('/check',function(req,res){
    let {username,password} = req.body;
    connection.query('select * from user where username=? and password=?',[username,password],function(err,result){
        if(err) throw err;
        if(result.length == 1){
            req.session.info=result[0];
            req.session.isLogin='yes';
            req.app.locals.username=result[0].username;
            res.redirect('/admin')
        }else{
            res.send("<script>alert('fail');history.back();</script>")
        }
    });
});


module.exports = router;