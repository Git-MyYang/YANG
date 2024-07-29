// function  函数对象
// Math      数学对象
// 自定义    {}
// arguments 实参对象
// 获取  元素对象
//           伪数组对象

// 日期对象
// 1 创建日期对象
// var date = new Date();
// // console.log(date)
// // 获取
// var year = date.getFullYear();   // 2024
// var month = date.getMonth() + 1;     // 2 0表1   1表2
// var day = date.getDate();    //  29
// var hour = date.getHours();  // 0 - 23
// var minute = date.getMinutes(); // 0 - 59
// var second = date.getSeconds();  // 0 - 59
// var week = date.getDay();  // 0-6  0日
// console.log(year , month , day , hour , minute , second , week)

// // 设置
// date.setFullYear(2025);
// console.log(date)

// 在创建日期对象的()内可以直接对日期进行设置
// 注意: 最少精确倒月  否则默认回到 1970年
// 时间可以是 数字格式  逗号隔开   [数字月表下标 如:5表示6]   具有容错功能   
// var date = new Date(2030 , 10 , 7 , 12 , 00 , 00); //  2030 年11月
// 时间若是字符串格式  直接表示当前月   
//                     年月日可用- , /
//                     时分秒:
//                     年月日 和 时分秒中间可以是  , 空格 - / 
// var date = new Date("2025/10/1 15:00:00") // 
// console.log(date)

   
// var date = new Date("2024,20,38");
// console.log(date)  


// 添加定时器  即  间歇调用
// setInterval(function(){} , 时间)

// 将当前日期输入在页面  
// 1 获取所有的图片
var imgs = document.getElementsByTagName("img");

setInterval(function(){
    // 2 创建日期对象
    var date = new Date();
    var year = date.getFullYear();   // 2024
    var month = zero(date.getMonth() + 1);     // 2 0表1   1表2
    var day = zero(date.getDate());    //  29
    var hour = zero(date.getHours());  // 0 - 23
    var minute = zero(date.getMinutes()); // 0 - 59
    var second = zero(date.getSeconds());  // 0 - 59
    // console.log(year , month , day , hour , minute , second )
    // 核心 将年月日 时分秒 进行拼接成长字符串  将每个字符作为图片的路径加载
    var dateStr = "" + year + month + day + hour + minute + second;
    // console.log(dateStr)
    for(var i = 0; i < dateStr.length; i++){
        imgs[i].src = "./img/" + dateStr[i] + ".jpg"
    }
} , 1000)
// 3 补零函数
function zero(n){
    // return n < 10 ? "0" + n : n;
    return n.toString()[1] ? n : "0" + n
}