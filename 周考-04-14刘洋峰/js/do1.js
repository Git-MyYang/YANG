// // 获取元素
// var codeBox = document.querySelector(".codeBox");
// var codeBtn = document.querySelector(".codeBtn");
// // 封装验证码函数
// var codeStr = function(){
//     var Str = ''
//     var codeArr = 'ALKFS2A1SFJKA3Rs15adC54asf5V5SD5F745392sd2As45d8WEF4W89F43ypghmcvx1W4SD6sd121a23sf5dfSKJGL21SFSFdsf1FDZGVG'
//     for(var i = 0; i < codeArr.length; i++){
//         index = Math.floor(Math.random() * codeArr.length);
//         if(Str.length < 6){
//             Str += codeArr[index];
//         }
//     }
//     // console.log(Str)
//     return Str
// }
// codeStr()
// console.log(codeStr())

// // 按钮绑定事件
// codeBtn.onclick = function(){
//     var count = 5
//     codeBtn.disabled = true;
//     var set = setInterval(function(){
//         count--
//         if(count === 0){
            
//         }
//         // codeBtn.innerHTML = '请等待' + a + '秒';
//     } , 1000)
//     setTimeout(function(){
        
//         codeBtn.innerHTML = "获取验证码";
//         codeBtn.disabled = false;
//         clearInterval(set);
//         codeBox.innerHTML = codeStr()
//     },3000)
// }


// // 作业2

// var drawName = document.querySelector(".drawName");
// var starDraw = document.querySelector(".starDraw");

// function Random(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }


// // console.log(index)
// starDraw.onclick = function(){
//  var index = Random(0,2)   

// var set = setInterval(function(){
//     starDraw.disabled = true;
//     starDraw.innerHTML = '抽奖中';           
// })

// setTimeout(function(){
//     starDraw.disabled = false;
//     starDraw.innerHTML = "开始抽奖";
//     clearInterval(set);
// },3000)

// var sets = setInterval(function(){
//     drawName.disabled = true;
// var arr = ["苹果","ipad","游戏皮肤"]

//     drawName.innerHTML = "恭喜您获得" + arr[index] + "一个";
//     // arr = splice(index,1)         
// })
// setTimeout(function(){
//     drawName.disabled = false;
//     drawName.innerHTML = "随机奖项";
//     clearInterval(sets);
// },3000)
// }


// // 渲染的数组
// var data = [
//     "赵嘉玲","陈隆","陈云天","戴汝潇","刘洋峰","刘艳霞","马璟","田钰惠","吴江","吴康伟","王震","向荣","姚科旭","杨徐","张迎飞"
// ]

// // 获取元素
// var NameBox = document.querySelector(".NameBox")
// var starBtn = document.querySelector(".starBtn")
// var stopBtn = document.querySelector(".stopBtn")

// // 渲染
// NameBox.innerHTML = data.map(function(item){
//     return `<li>${item}</li>`
// }).join("")

// // 获取渲染的每一个元素·div·
// var lis = [...document.querySelectorAll("li")]

// starBtn.onclick = function(){
//     starBtn.disabled = true;
    
//     timer = setInterval(function(){

//         lis.forEach(function(s){
//             // console.log("123")
//             s.style.background = "#" + Math.random().toString(16).slice(2,8);
//         })
//     },100)
// }

// stopBtn.onclick = function(){
//     starBtn.disabled = false;
//     clearInterval(timer)
//     lis.forEach(function(s){
//         s.style.background = "orangered";
// })
//     // 立马生成一个随机下标  找到对应的li 设置颜色即可
//     var curI = Math.floor(Math.random() * lis.length);
//     lis[curI].style.background = "#" + Math.random().toString(16).slice(2,8)
// }


// // 正则表达式
// var reg = new RegExp("ab","i")
// var str = "ab"
// var result = reg.test(str)
// console.log(result)


// 封装获取元素变量函数
function $(el){
    return document.querySelector(el)
}

// 获取元素
var boxOne = $("boxOne")
var boxTow = $("boxTow")
var boxThree = $("boxThree")
var boxFour = $("boxFour")

// 渲染对象
var data = [
    {
        boxOne: "Diseño web",
        minBOX: [ "Photoshop" ,"HTML","CSS","Maquetacion web"]
    },
    {
        boxTow: "Desarrollo front-end",
        minBOX: [ "Photoshop" ,"HTML","CSS","Maquetacion web"]
    },
    {
        boxThree: "Diseño responsive",
        minBOX: [ "Photoshop" ,"HTML","CSS","Maquetacion web"]
    },
    {
        boxFour: "Posicionamiento web",
        minBOX: [ "Photoshop" ,"HTML","CSS","Maquetacion web"]
    }
]

boxOne.innerHTML = data.map(function(obj){
    return `<p>${obj}.${minBOX}</p>`
}).join("")

// var boxOne.onclick = function(){

// }