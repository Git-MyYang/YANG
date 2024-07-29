// 1 获取span
var spans = document.querySelectorAll(".box span");
// 2 设置未来时间
var future = new Date(2024,4,1);
// console.log(future)
setInterval(function(){
    // 3 获取时间差值 【得到时间戳 即 毫秒数】  未来 - 当前
    var rangeTime = (future - new Date()) / 1000;   
    // console.log(rangeTime)
    // 4 把时间差值换算成 天 时分秒
    // day = 24 * 60 * 60 = 86400s
    // hour = 60 * 60 = 3600s
    // minute = 60s
    // second = 剩下的
    var day = zero( parseInt(rangeTime / 86400) );
    var hour = zero( parseInt(rangeTime % 86400 / 3600) );
    var minute = zero( parseInt(rangeTime % 3600 / 60) );
    var second = zero( parseInt(rangeTime % 60) );

    // console.log(day , hour , minute , second)
    // 5 将 换算好的日期时间 存入对应的span
    spans[0].innerHTML = day
    spans[1].innerHTML = hour
    spans[2].innerHTML = minute
    spans[3].innerHTML = second
} , 1000)

function zero(n){
    return n >= 10 ? n : '0' + n; 
}