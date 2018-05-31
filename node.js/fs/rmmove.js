let fs = require('fs');

removed('./static');

/*function removed(path) {
    let files = [];  //创建空数组
    if(fs.existsSync(path)){   // 如果要删除的文件夹存在
        files = fs.readdirSync(path);//返回要删除的文件夹的名字（不包括../或./）
        files.forEach(function (file,index) {  //遍历要删除的文件夹
            let curRpath = path + '/' + file;
            if(fs.statSync(curRpath).isDirectory()){  //判断是不是一个目录 如果是
                removed(curRpath);    //就调用deleteall方法重复往下找
            }else {
                fs.unlinkSync(curRpath);  //如果不是就直接删除
            }
        });
        fs.rmdirSync(path)  //删除文件夹
    }

}*/
function removed(path) {
    let file = '';
    let lists = fs.readdirSync(path);
    if(lists.length){
        for(let i = 0;i < lists.length;i++){
            p = path + '\\' + lists[i];
            let type = fs.statSync(p);

            if(type.isFile){
                fs.unlinkSync(p);
            }else {
                delDir(p);
            }
        }
    }
    fs.rmdirSync(path);
}

