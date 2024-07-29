
// // 作业1

// // 获取元素
// var typText = document.getElementById("typText")
// var iptText = document.getElementById("iptText")
// var starBtn = document.querySelector(".starBtn")
// var stopBtn = document.querySelector(".stopBtn")
// var ctnBtn = document.querySelector(".ctnBtn")
// var textBOX = document.querySelector(".textBOX")



// // 绑定按钮事件
// starBtn.onclick = function(){
//     var interval = 1000
//     starBtn.disabled = true;
//     iptText.value.split("").length === 0 ? alert("请输入文字") : textBOX.innerHTML = iptText.value;
//     isNaN(typText.value) ? alert("请输入数字") : interval = typText.value || interval === 1000;
//         // 设置定时器
//     timer = setInterval(function(){
//         textBOX.forEach(function(index){
//             iptText.value.split("")
//             console.log(iptText.value.split(""))
//         })   
//     },interval)
// }

// // 绑定暂停按钮事件
// stopBtn.onclick = function(){
//     starBtn.disabled = false;
//         clearInterval(timer)
// }

// // 绑定继续按钮事件
// ctnBtn.onclick = function(){
//     timer1 = setInterval(function(){
//         textBOX.forEach(function(index){
//             iptText.value.split("")
//             console.log(iptText.value.split(""))
//         })   
//     })
//     stopBtn.onclick = function(){
        
//             clearInterval(timer1)
//     }

// }


// // 作业2

// // 获取元素
// var hourIpt = document.getElementById("hourIpt")
// var minIpt = document.getElementById("minIpt")
// var sIpt = document.getElementById("sIpt")
// var starBtn = document.querySelector(".starBtn")
// var stopBtn = document.querySelector(".stopBtn")
// var ctnBtn = document.querySelector(".ctnBtn")
// var resBtn = document.querySelector(".resBtn")
// var textBOX = document.querySelector(".textBOX")
// var set
// var clear

// // 封装补零函数
// function zero(n){
//     return n < 10 ? "0" + n : n
// }


// // 绑定开始按钮事件
// starBtn.onclick = function(){
//     starBtn.disabled = true;
// // 判断时间进制
//     if(sIpt.value > 60){
//         minIpt.value = (minIpt.value*1) + parseInt(sIpt.value / 60 )
//         sIpt.value = sIpt.value % 60
//     } 
//     if(minIpt.value > 60){
//         hourIpt.value = (hourIpt.value*1) + parseInt(minIpt.value / 60)
//     }
//     if(hourIpt.value > 60 ){
//         hourIpt.value = hourIpt.value % 60
//         minIpt.value = minIpt.value % 60
//     }
//     else{
//         hourIpt.value = hourIpt.value % 60
//     }

//     // 封装绑定开始按钮事件
//     set = setInterval(function(){

//         if(sIpt.value >= 0){
//             sIpt.value--
//             if(sIpt.value === 0){
//                 ++sIpt.value
//                 sIpt.value-- 
//             }
//             if(sIpt.value-0 === -0 && minIpt.value > 0){
//                 sIpt.value = 59
//                 minIpt.value--
//                 if(minIpt.value-0 === 0 && hourIpt.value > 0){
//                     minIpt.value = 59
//                     hourIpt.value--
//                 }
//             }
//             textBOX.innerHTML = `倒计时:${zero(hourIpt.value)}:${zero(minIpt.value)}:${zero(sIpt.value)}`
            
//         }
//     },1000)
// }

// // 绑定暂停按钮事件
// clear = stopBtn.onclick = function(){
//     starBtn.disabled = false;
//     clearInterval(set)
// }

// // 绑定继续按钮事件
// ctnBtn.onclick = function(){
//     starBtn.disabled = false;
//     clear = false;
// }

// // 绑定重置按钮
// resBtn.onclick = function(){
//     hourIpt.value = 0;
//     minIpt.value = 0;
//     sIpt.value = 0;
//     textBOX.innerHTML = `倒计时:${zero(hourIpt.value)}:${zero(minIpt.value)}:${zero(sIpt.value)}`
// }