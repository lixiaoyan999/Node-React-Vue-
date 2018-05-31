let http = require('http');
let url = require('url');
let router = require('./module/router');
console.log(router);

http.createServer(function(req,res){
    let pathname = url.parse(req.url).pathname.replace('/','');
    console.log(pathname);
    if(!pathname){
        pathname = 'login';
    }
    if(pathname != '/favicon.ico'){
        if(router[pathname]){
            router[pathname](req,res);
        }
    }
}).listen(3000);
