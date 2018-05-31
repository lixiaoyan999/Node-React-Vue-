//引入
let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path');
let mime = require('mim');
// 2.创建服务
let sever = http.createServer(function (req,res) {
    /*res.writeHeader(200,{'Content-type':'text/html;charset=utf8'});
    res.write('你好');
    res.end();*/
    let pathname = url.parse(req.url).pathname;
    if(pathname == '/'){
        pathname = '/index.html';
    }
    if(pathname != '/favicon.ico'){
        let p = './static' + pathname;
        let extname = path.extname(req.url).substr(1);
        console.log(path.extname(req.url));
        fs.readFile(p,(err,data)=>{
            if(err){
                fs.readFile('./static/404.html',(err404,data404)=>{
                    if(err404){
                        console.log(err404);
                    }
                    let type = mime.getMIMEType(extname);
                    res.writeHeader(200,{'Content-type':type+';charset=utf8'});
                    res.write(data404);
                    res.end();
                });
            }else{
                let type = mime.getMIMEType(extname);
                res.writeHeader(200,{'Content-type':type+';charset=utf8'});
                res.write(data);
                res.end();
            }

        });
    }
});
/*sever.listen({
    host:'localhost',
    port:8000
},function () {
    console.log('your application running:localhost:8000');
});*/
sever.listen(2002,function () {
    console.log('your application running:localhost:2002')
});
