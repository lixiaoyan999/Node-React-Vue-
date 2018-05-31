let fs = require('fs');
/*let flag = fs.existsSync('./a.txt');

fs.appendFile('./a.txt','aaa',(err) => {
    if(err) throw err;
    console.log('success');
});*/

// fs.appendFile('./b.txt','bbbbb');

/*
* 文件
*   创建
*   追加     appendFile
*   读       readFile
*   重命名   rename
*   删除     unlink
*
*目录
*   创建     mkdirSync
*   重命名   rename
*   删除     rmdirSync
* */

copy('./a.txt','./b.txt');
function copy(readF,writeF) {
    let flag = fs.existsSync(readF);
    if(!flag){
        fs.writeFileSync(readF,'hello world');
    }
    fs.readFile(readF,(err,data)=>{
        data = data.toString().toUpperCase();
        fs.writeFile(writeF,data,(err)=>{
            if(err) throw err;
            console.log('success');
        })
    })
}