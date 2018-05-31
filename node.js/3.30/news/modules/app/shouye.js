let express = require('express');
let router = express.Router();
let connect = require('../../config/db');

router.get('/',(req,res)=>{
    connect.query("select * from category",(err,data)=>{
        if(err) throw err;
        connect.query("select news.*,category.cname from news,category where news.cid = category.cid",(err,result)=>{

           if (err) throw err;
            res.render('app/index',{lists:data,news:result},function(err,data){
                if(err)throw err;
                res.send(data);
            })
        });
    })
});

router.get('/clicks',function(req,res){
    connect.query(`select news.*,category.cname from news,category where news.cid = ${req.query.cid} and news.cid = category.cid`,(err,result)=>{
        if(err) throw err;
        res.render('app/lists',{lists:result},(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    });
});

router.get('/content',function (req,res) {
    connect.query(`select * from news where nid=${req.query.nid}`,(err,result)=>{
        if(err) throw err;
        connect.query("select news.*,category.cname from news,category where news.cid = category.cid",(err,data)=>{
            if(err) throw err;
            res.render('app/content',{lists:result,news:data},(err,result)=>{
                if (err) throw err;
                res.send(result);
            })
        })
    })
});

router.get('/admin',function (req,res) {
        let username = req.app.locals.username;
        connect.query("select news.*,category.cname from news,category where news.cid = category.cid",(err,result)=>{
            res.render('app/admin',{username:username,news:result},(err,result)=>{
                if (err) throw err;
                res.send(result);
            })
        })
});


module.exports = router;