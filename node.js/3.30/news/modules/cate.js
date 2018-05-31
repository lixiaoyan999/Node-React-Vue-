let express = require('express');
let router = express.Router();
let connect = require('../config/db');

///////////// 读取栏目 ////////////////
router.get('/category',(req,res)=>{
    connect.query("select * from category",(err,result)=>{
        if(err){
            throw err;
        }

        res.render('category',{lists:result},function(err,data){
            if(err)throw err;
            res.send(data);
        })
    })

});
/////// 添加栏目 ////////
router.get('/webadd',(req,res)=>{
    res.render('cateadd',function(err,data){
        if(err)throw err;
        res.send(data);
    })
});
router.post('/cateadd',function (req,res) {
    let {cname,cicon,clas}=req.body;
    connect.query("insert into category (cname,cicon,clas) value (?,?,?)",[cname,cicon,clas],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows == 1){
            res.redirect('/admin/cate/category');
        }else {
            res.send();
        }
    })
});
router.get('/edicate', (req,res)=> {
    connect.query(`select * from category where cid = ${req.query.cid}`,(err,result)=>{
        if(err) throw err;
        res.render('upcate',result[0],(err,data)=>{
            if(err) throw err;
            res.send(data);
        })
    });
});
router.post('/updatecate',function (req,res) {
    let {cname,cicon,clas,cid} = req.body;
    connect.query("update category set cname = ?,cicon=?,clas=? where cid = ?",[cname,cicon,clas,cid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows == 1){
            res.redirect('/admin/cate/category');
        }else{
            res.send("<script>alert('修改失败')</script>");
            res.redirect('/admin/cate/category');
        }
    })
});
router.get('/delecate',function (req,res) {
    connect.query("delete from category where cid = ?",[req.query.cid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows == 1){
            res.redirect('/admin/cate/category');
        }else {
            res.send("<script>alert('删除失败')</script>");
            res.redirect('/admin/cate/category');
        }
    })
});

module.exports = router;