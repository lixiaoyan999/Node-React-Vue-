// 非阻塞io 回调函数
let fs = require('fs');
// console.log(1);
function getMime(callback) {
    fd.readFile('./mime.json',function (err,data) {
        // console.log(2);
        // console.log(data.toString());
        callback(data.toString());
    });
    // console.log(3);
}

let data =getMime(function (data) {
    console.log(data);
});
