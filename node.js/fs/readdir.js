let fs = require('fs');

let list = fs.readdirSync('./static');
// console.log(list instanceof Array);

for(let i = 0;i < list.length;i++){
    let type = fs.statSync('./static/' + list[i]);
    console.log(list[i] + '--------' + type.isFile());
    console.log(list[i] + '--------' + type.isDirectory());
}