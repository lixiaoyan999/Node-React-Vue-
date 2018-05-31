let express = require('express');
let router = express.Router();
let connect = require('../config/db');


////////   3  //////
router.get('/admin',(req,res)=>{
    connect.query("select * from website where wid = 1",(err,result)=>{
        if(err){
            throw err;
        }
        res.render('admin',{lists:result[0]},(err,data)=>{
            if(err)throw err;
            res.send(data);
        })
    })

});
////////   4  ///////
router.post('/updateadmin',(req,res)=>{
    let {title,keywords,phonename,description} = req.body;
    connect.query('update website set title=?,keywords=?,description=?,phonename=? where wid=1',[title,keywords,description,phonename],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows == 1){
            res.send("<script> alert('修改成功');history.back(); </script>");
        }
    })
});

module.exports = router;