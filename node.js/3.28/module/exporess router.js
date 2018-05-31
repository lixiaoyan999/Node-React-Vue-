let url = require('url');
let sever = function () {
    let G = this;
    this._get = {};
    this._post = {};
    /*G={
        _get:{
            'login':function () {},
            'index':function () {}
        },
        _post:{
            'login':function () {},
            'index':function () {}
        }
    };*/

    let app = function (req,res) {
        let pathname = url.parse(req.url).pathname;
        let method = req.method.toLowerCase();

        if(pathname != 'favicon.ico'){

            if (G['_' + method][pathname]){
                // app[pathname](req,res);
                if(method == 'post'){
                    let str = '';
                    req.on('data',function (chunk) {
                        str += chunk;
                    });
                    req.on('end',function () {
                        req.body = str;
                        G['_' + method][pathname](req,res);
                    })
                }
            }else{
                // res.end('no exit');
                G['_'+method][pathname](req,res);
            }
        }
    };

    app.get = function (string,callback) {
        G['_get'][string] = callback;
    };
    app.post = function (string,callback) {
        G['_post'][string] = callback;
    };
    return app;
};
module.exports = sever();