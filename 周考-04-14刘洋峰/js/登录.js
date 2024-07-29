// 封装获取元素变量函数
function $(el){
    return document.querySelector(el)
}
// 获取元素
// var user = $("user");
// var userName = $("userName");
// var pwdText = $("pwdText");
var pwdName = $("pwdName");
var code = $("code");
var codeName = $("codeName");
var codes = $("codes");
var change = $("change");
var goBtn = $(".goBtn");
var upBtn = $("upBtn");
var empBtn = $("empBtn");

// 页面返回按钮添加功能
goBtn.onclick = function(){
    history.back()
}


change.onclick = function(){
    
}


// 封装验证码随机数函数
var ceCode = function randomArr(){
    // 验证码随机数
    var strArr = "KJHkjJhJHKJjkvgNvASFJPojOPJoiSSDD3FDzv896xz72DSF9D8DF4xv67xzvcsSc2nfi82yr9hakzkcnJBZ"
    for(var i = 0; i < randomArr.length; i++){
       var arr = ""
       var index = Math.floor(Math.random() * strArr.length) 
       if(arr.split("").length < 4){
        arr += index
       }
       return arr
    }   
}