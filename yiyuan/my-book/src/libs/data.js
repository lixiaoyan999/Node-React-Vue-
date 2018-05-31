let appid = '61642';
let screct = '8f56ceee829d4bb8a75d3dc413c6cffe';
function formatterDateTime() {
    let date=new Date()
    let month=date.getMonth() + 1
    let datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}
function geturl(type = 'list') {
    let url = "";
    if (type == 'list'){
        url = "http://route.showapi.com/955-1"
    }else {
        url = "http://route.showapi.com/955-2"
    }

    url += "?showapi_timestamp=" + formatterDateTime() + "&showapi_appid=" + appid +"&showapi_sign=" + screct;

    return url;
}

function getlist(type,pages){
    let  url = geturl();
    url += "&type="+type +"&page="+pages;
    return  fetch(url).then(res=>res.json())
}

function getContent(id) {
    let url = geturl('content');
    url += "&id=" + id + "&page=1";
    return fetch(url).then(res=>res.json())
}

function cate() {
    return [
        {type:"dp",value:'短篇'},
        {type:"cp",value:'长篇'},
        {type:"xy",value:'校园'},
        {type:"mj",value:'民间'},
        {type:"ly",value:'灵异'},
        {type:"yc",value:'原创'},
    ]
}


exports.cate = cate();
exports.getlist = getlist;
exports.getContent = getContent;