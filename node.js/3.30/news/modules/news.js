let express = require('express');
let router = express.Router();
let connect = require('../config/db');


///////////// 读取新闻 ////////////////
router.get('/news',(req,res)=>{
    connect.query("select news.*,category.cname from news,category where news.cid = category.cid",(err,result)=>{
        if(err){
            throw err;
        }
        res.render('news',{lists:result},function(err,data){
            if(err)throw err;
            res.send(data);
        })
    })
});
/////// 添加栏目 ////////
router.get('/newsadd',(req,res)=>{
    connect.query("select * from category",(err,result)=>{
        if(err){
            throw err;
        }
        res.render('newsadd',{cate:result},function(err,data){
            if(err)throw err;
            res.send(data);
        })
    })
});
router.post('/insertnews',function (req,res) {
    let {ntitle,nimage,ncontent,ndesc,cid} = req.body;
    let ndate = new Date();
    let nauthor = req.app.locals.username;
    connect.query("insert into news (ntitle,nimage,ncontent,ndesc,ndate,nauthor,cid) value (?,?,?,?,?,?,?)",[ntitle,nimage,ncontent,ndesc,ndate,nauthor,cid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows == 1){
            res.redirect('/admin/news/news');
        }else {
            res.send();
        }
    })
});
router.get('/updated', (req,res) =>{
    connect.query("select * from category",(err,result)=>{
        if(err){
            throw err;
        }
        connect.query(`select * from news where nid = ${req.query.nid}`,(err,data)=>{
            if(err) throw err;
            res.render('upnews',{cate:result,lists:data[0]},(err,data)=>{
                if(err) throw err;
                res.send(data);
            })
        });

    })

});
router.post('/updatenews',function (req,res) {
    let {ntitle,nimage,ncontent,ndesc,ndate,cid,nid} = req.body;
    connect.query("update news set ntitle = ?,nimage = ?,ncontent = ?,ndesc = ?,ndate = ?,cid =? where nid = ?",[ntitle,nimage,ncontent,ndesc,ndate,cid,nid],(err,data)=>{
        if(err) throw err;
        if(data.affectedRows == 1){
            res.redirect('/admin/news/news');
        }else{
            res.send("<script>alert('修改失败')</script>");
            res.redirect('/admin/news/news');
        }
    })
});
router.get('/delnews',function (req,res) {
    connect.query("delete from news where nid = ?",[req.query.nid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows == 1){
            res.redirect('/admin/news/news');
        }else {
            res.send("<script>alert('删除失败')</script>");
            res.redirect('/admin/news/news');
        }
    })
});

module.exports = router;