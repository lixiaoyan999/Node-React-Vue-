let url = require('url');

let {URL} = url;  //对象的结构赋值

let urlobj = new URL('foo','http://hao123.com:8080');   //创建一个对象

// console.log(urlobj);

let href = "http://jobs.zhaopin.com/CZ721110300J00027618014.htm?ssidkey=y&ss=201&ff=03&sg=1faaa3e8a0e84d67bf1be9f8a64ab1fd&so=3&uid=692779663";
let obj = url.parse(href,true);
// console.log(obj);
console.log(url.format(obj));



