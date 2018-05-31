let fs = require('fs');

let path = './static/images/footer';
mkpath(path);

function mkpath(path) {
    let arr = path.split('/');
    let p = '';
    arr.forEach(ele=>{
        if(ele == '.'){
            p += ele;
        }else{
            p += '\\' + ele;
            fs.mkdirSync(p);
        }
    })
}