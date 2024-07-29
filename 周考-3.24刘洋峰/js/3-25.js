// var num1 = prompt("请输入数值1");
// var num2 = prompt("请输入数值2");

// if(typeof num1 == Object )

// var ll = prompt("请输入理论成绩");
// var jn = prompt("请输入技能成绩");


// ll >= 85 && jn >=  85 ? alert("升班") : alert("末班");

// var num = prompt("请输入1-12的有效数字");

// var num1 = +prompt(`请输入第一个数字`)
// var num2 = +prompt(`请输入第二个数字`)
// var bj = prompt(`请输入 + - * / 其中一个`)

// switch (bj) {
//     case `+`:
//         alert(`两个数的加法操作${num1 + num2}`)
//         break

//     case `-`:
//         alert(`两个数的减法操作${num1 - num2}`)
//         break

//     case `*`:
//         alert(`两个数的乘法操作${num1 * num2}`)
//         break

//     case `/`:
//         alert(`两个数的除法操作${num1 / num2}`)
//         break
    
//     default:
//         alert(`请输入有效算数运算符`)
// }


// 赋值两个变量用来求总和跟个数

// var num1 = 0 ; 
// var num2 = 0 ; 

// // i的声明用来控制i的区间

// for(var i = 50 ; i <= 100 ; i++){

//     // console.log(i)
//     // 判断区间内被 5 整除的i

//     if(i % 5 === 0){

//         // num1用来拿到被5整除的个数
//         num1++

//         // num2用来拿到被5整除的数的总和
//         num2 += i
//     }
// }
// // 用来在控制台显示所求信息
// console.log("50-100之间被5整除的个数有"+ num1 + "个，他们的总和是" + num2 +".")



// var str = `<ul>`
// for(var i = 0 ; i < 10 ; i++){

//     str += "<li>"

//     for(var m = 10 ; (m - i) >= 1 ; m--){
        
//     str += `+`
// }

// str += "</li>"
// }
// str += "</ul>"
// document.write(str)

// 声明变量

// var h1=`一号标题`
// var h2=`二号标题`
// var h3=`三号标题`
// var h4=`四号标题`
// var h5=`五号标题`
// var h6=`六号标题`
// var ha = h1 , h1 = h2 , h2 = h3 , h3 = h4 , h4 = h5 , h5 = h6 , h6 = ha;
// var h =`<h></h>`

// // 循环嵌套

// for(i = 1; i <= 6; i++){

//     h += "<h" + i + ">" + i + "号标题" + "</h" + i + ">" 
// }
// console.log(h)
// document.write(h)





// for(i = 1 ; i <= 5 ; i++){
//     h = 1 + 3 * (i - 1)
//     console.log(h);
//     document.write("<br>")
//     document.write(h);
// }




// var num = 100000
// while(num >= 50000; num *= 0.05 ||)




// var num = 0;
// for(i = 2000 ; i <= 3000 ; i++){
//     if(i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)){
//         console.log(i)
//         document.write(i)
        
//         num ++
//         if(num % 10 === 0 ){
//         document.write(i + "<br>")
//     }
//     }
// }console.log(num)



// while(true){console.log("hello")}的结果是（）为什么（）

// hello 死循环 ; while循环未跳出,重复执行。





// for (var i = 0; i < 5; i++) {
//     if (i === 3){
//         break;
//     }
//     console.log(i);
// }的结果是（）

//  0 , 1 , 2 ;





// for (var i = 0; i < 5; i++) {
//     if (i === 3){
//         continue
//     }
//     console.log(i);
// }的结果是（）

// 0 , 1  , 2 , 4 ;




// 循环 25 - 70 之间所有除了3的倍数以外的数  进行打印在控制台

// for(i = 25 ; i <= 70 ; i++){
//     if(i % 3 === 0 ){
//         continue;
//     }
//     console.log(i)
// }




// 拍7令    找出20 - 80之间除了7的倍数和含有7的数字

// var num = 0
// for(i = 20 ; i <= 80 ; i++){
//     if(i % 7 === 0 || i % 10 === 7 || parseInt(i / 10) === 7){
//         continue;
       
//     }
//     console.log(i)
// }




// 100-999之间所有的水仙花数
// 【水仙花: 对每位上的数字开立方求和与当前数字一致 即为水仙花 如:153】

// for(i = 100 ; i <= 999 ; i++){
//     if(i === parseInt(i / 100) * parseInt(i / 100) * parseInt(i / 100) + parseInt(i % 100 / 10) * parseInt(i % 100 / 10) * parseInt(i % 100 / 10) + (i % 100 % 10) * (i % 100 % 10) * (i % 100 % 10))
//     console.log(i)
// }





// var a,b,c,d,e;
// a=3;
// b=10;

// c = (--a) + (b++)
// d = (--b) -a
// e = b/a+3-2%4
// 问 c d e 三个变量的值是多少？





// console，10g（1+"2"+"2"）
// console.1og（1+ +"2"+"2"）
// console.1og（1+-"1"+"2"）
// console. log（+"1"+"1"+"2")
// console. log（"A"-"B"+"2"）
// console. log（"A"- "B"+2）；


// var obj={};   
// console.log(obj && null); 
// console.log(NaN && obj);  





// 1、用函数声明式定义一个函数；实现在控制台打印‘上海网站’；并在定义函数的上面和下面分别调用该函数，观察是否执行函数



// fn()
// function fn(a,b){
//     console.log("上海网站");
// }
// fn()



// 2、 用函数表达式的方式定义一个函数，实现在控制台打印’我是最棒的’；并在定义函数的上面和下面分别调用函数，观察是否执行函数，思考一下，为什么会出现这种情况；



// fn()
// var fn = function(){
//     console.log("我是最棒的");
// }
// fn()  ; 上面不执行，下面执行。函数表达式只能在声明函数之后使用，即局部变量。




// 3、定义一个函数，弹出函数的数据类型  function


// var fn = function(){
//     console.log(typeof(fn))
// }
// fn()


// 4、定义一个add函数，实现输出‘我想成为前端工程师’，再定义一个add函数，实现弹出”我想成为一名全栈工程师”；然后调用add函数，观察执行结果是什么


// var add = function(){
//     document.write("我想成为前端工程师")
// }
// var add = function(){
//     alert("我想成为一名全栈工程师")
// }
// add()  ;  后设覆盖现设



// 5、声明一个变量running;给其赋一匿名函数function（）{console.log(‘helloword’)}，然后再次给running变量赋一个字符串‘eat’;调用running();会出现什么结果。


// var running = function(){
//     console.log(`helloword`)
// }
// running = `eat`
// running()   ;  报错， 后设覆盖现设，声明同名变量 ，显示running不再是变量。



// 6、function sum(){___console.log(arguments)____________};补全代码，实现输出一个实参的集合；


// function sum(){
//     for(a = 0 ; a < arguments.length ; a++){
//         if()
//     }
    
//     console.log(arguments)
// }



// 7、定义一个函数，计算出100以内可以被三整除的数
// 思路：定义函数，函数调用，使用for循环
// 8、定义一个函数，打印出下列图形
// *****
// ***
// *
// 思路：正确的函数定义与调用，函数中使用循环



// function sum(){
//     console.log(arguments)
//     for(i = 0 ; i < arguments.length ; i++){
//         var num = 0
//         var num1 = 0

//         switch(typeof(arguments[i])){
//             case("string"):
//             num += arguments[i]
//             break;
            
//             case(Number):
//             num1 += arguments[i]
//             break;
//             // console.log(arguments[i])
//             console.log(num)
//             console.log(num1)
//         }
//     }   
// }

// sum("sdda",55,64,"33","sadd",66,null,undefined)




// function fn(num1,num2){
//     for(var i =  0; i < arguments.length ; i++){
//         num2 += arguments[i]
        
//         if(num1 ==""){
//             alert("用户不能为空")
//         }
//         arguments[i] (!(i > 6) || !(i < 3) || typeof(i ==="number")) ? document.write(num2) :alert("输入错误");

//     }
// }
// var num1 = +prompt("请输入用户名:");
// var num2 = +prompt("请输入3-6之间的数字:");
// console.log(num2) 
// document.write(num2)
// fn(num1,num2)




// function fn(num){
    
//     var i = 0 
//     for(var n = 0 ; n < arguments[i]arguments.length ; n++){
//          num += arguments[i]{arguments[n]}

//     // for(var a = 0 ; a < arguments.length ; a++){
//     //     arguments[i] !== arguments[a]


//        console.log(arguments[i])
//     }
// }


// fn("sadasd")


// function fn(num){
//     for(var i = 0 ; i < num.length ; i++){
//         for(var n = 0 ; n < num.length ; n++){
//             var m , k = 0 , str = 0 ; m === (num[i] === num[n])
//             str += 1

//             (num[i] === num[n]) || str === 1 ? k += m : numll;
//         }
//     }
// }



//     var obj ={
//         sex : "girl",
//         age : 18 ,
//         year : 2000 ,
//         from : "china" ,
//         chind : {
//             address : "北京" ,
//             code : 110 ,
//             type : false
//         }
//     }
    

// var str = 0;
// function fn(obj){
//     for(var key in obj){
//         if(typeof(obj[key]) === "string"){
//             str += obj[key]
//         }else if(typeof(obj[key]) === "number"){

//         }
//     }
    
// }
// console.log(fn())


// var newStr
// function fn(str){
//     for(var i = 0 ; i < 10 ; i++){
        

//         console.log(obj , str[obj])
//         newStr += str[obj]
//     }
    
// }
// fn(1,3,6,5,8,4,2,0,4,2)




// function obj(m , n){
//     return Math.floor( Math.random() * (n - m + 1) ) + m
// }
//  var random = obj(1,30)
//  console.log(random)

// var flag = true
//  for(var i = 1 ; i <= 5 ; i++){
//     var num = +prompt("猜猜我是谁")
//     if( num > random){
//         alert("服了，又猜大了")
//     }else if( num < random ){
//         alert("啧啧啧没猜到,猜这么小干嘛")
//     }else{
//         flag = false
//         alert("终于猜对了，太不容易了")
//         break
//     }
// }
// if(flag){
//         alert( "次数已经用完了,好可惜啊" )
//  }


// function fnColor(flag){

//     if(flag){

//     var str = '#'
//     var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
//     for(var i = 0 ; i <= 6 ; i++){
//         var random = Math.floor(Math.random() * arr.length)
        
//         str += arr[random]
//         }
//         return str
//     }else{
//         var r = Math.floor(Math.random() * 256)
//         var g = Math.floor(Math.random() * 256)
//         var b = Math.floor(Math.random() * 256)

//         return `rgb(${r},${g},${b})`
//     }
// }
// console.log(fnColor(false))
// console.log(fnColor(true))



//     var stu = [
//     {name : '小明', age : 18, sex : '男', home : '北京'},
//     {name : '小芳', age : 19, sex : '女', home : '上海'},
//     {name : '小红', age : 20, sex : '男', home : '深圳'},
//     {name : '小黄', age : 21, sex : '女', home : '重庆'},
//     {name : '小丽', age : 22, sex : '男', home : '成都'}]


// for(var i = 0 ; i < stu.length ; i++){
//     document.write(`<tr><td>${stu[i].name}</td></tr>`)
// }




// var random = Math.floor(Math.random() * arr.length)
// function fn(max){
//     var arr = [9,5,2,7,40,3,2]
//     for(var i = 0 ; i < arr.length ; i++){
//         var max = Math.max(arr.length)
//         // console.log(max)
//     }
    
    
//     return max
// }
// // fn()
// console.log(fn())






// 页面中初始一个div元素 和 按钮
// 需求
// 要求用户点击按钮时  对 div 设置随机大小 w: 300-800   h : 200 - 500
//                             内容大小随机   20 - 50
//                              随机背景颜色
//                               随机内容
//                               内容个数随机   8 - 20
//                               
//                               内容颜色随机


// 获取元素生成所需内容
// var btn = document.querySelector(".btn") ,
//     box = document.querySelector(".box") ;
// var conText = "由杨洋搭档金晨等主演的漫改古装仙侠剧《凡人修仙传》一直都有着极高的热度也是受到了诸多网友的关注和期待尤其是此前官微发布了首版预告后其中所展现出来的超高制作水准以及全员高颜值的阵容更是引发了网友的诸多热议";
// var conClr = "0123456789abcdef";

// // 设置随机值范围函数
// function randomFn(min , max){
//     return Math.floor(Math.random()* ( max - min +1)+ min)
// }
// // 页面字符串长度函数
// function randomCon( n , str){
//     var con = "";
//     for(var i = 0 ; i < n ; i++){
//         var index = randomFn( 0 , str.length - 1);
//         con += str[index] ;
//     }
//     return con
// }
// // 给按钮绑定事件
// btn.onclick =function(){
    
//     var btnCon = randomFn(10 , 20);

//     box.style.width = randomFn(200 , 600) + "px";
//     box.style.height = randomFn(300 , 600) + "px";
//     box.style.fontSize = randomFn(20 , 50) + "px";

//     box.innerHTML = randomCon( btnCon , conText);
//     box.style.background = "#" + randomCon(6,conClr);
//     box.style.color = "#" + randomCon(6,conClr);
// }
// for(var key in btn.onclick){
//     console.log(`btn.onclick[key]`)
// }
// console.log(btn.onclick[box.innerHTML])
// console.log(btn.onclick)
// console.log(btn.onclick)
// console.log(btn.onclick)


// var imgs = document.getElementsByTagName("img");

// setInterval(function(){
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = zero(date.getMonth() + 1);
//     var day = zero(date.getDate());
//     var hour = zero(date.getHours());
//     var minute = zero(date.getMinutes());
//     var second = zero(date.getSeconds());

//     var dateStr = "" + year + month + day + hour + minute + second;
//     for(i = 0 ; i < dateStr.length ; i++){
//         imgs[i].src = "./img/" + dateStr[i] + ".png"
//     }    
// }, 1000)

// function zero(n){
//     // return n < 10 ? "0" + n : n;
//     return n.toString()[1] ? n : "0" + n
// }

// var spans = document.querySelectorAll(".box p span")

// var future = new Date(2024 , 4 , 1 ,);
// console.log(future)

// setInterval(function(){
// var rangeTime = (future - new Date()) / 1000;
// var day = zero(parseInt(rangeTime / 86400));
// var hour = zero(parseInt(rangeTime %86400 / 3600));
// var minute = zero(parseInt(rangeTime %3600 / 60));
// var second = zero(parseInt(rangeTime % 60));

// spans[0].innerHTML = day;
// spans[1].innerHTML = hour;
// spans[2].innerHTML = minute;
// spans[3].innerHTML = second;

// }, 1000)


// function zero(n){
//     return n < 10 ? "0" + n : n;
// }






// 5、封装一个函数，随机获取4位验证码
// 如有验证码字符串集合:
// var code = “ QWERTAGXCVB1234567890 ”;
// 在这个集合中随机获取4个字符,拼接成4位验证码 ,并将4位验证码写入文档(页面) ==> document.write()


// var code = "QWERTAGXCVB1234567890"
// function randomFn(min , max){
//     return Math.floor(Math.random() * (max - min + 1)+min)
// }
// function randomCon(code){
//     var con = ""
//     for(var i = 0 ; i < 4 ; i++){
//         var index = randomFn(0,3)
//         con += code[index]
//         return con
//     }console.log(randomCon())
// }





// 6、JS转换时间戳为“刚刚”、“1分钟前”、“2小时前”“1天前”等格式
// 描述：类似于微信朋友圈，根据时间戳转换出（刚刚，1分钟前，1小时前，昨天，几天前，几周前，几个月前）；var toDateFriendly = function (timestr) {}
// 实例：toDateFriendly(1564738511482)   // 刚刚
// toDateFriendly((+new Date()) – 1000 * 60 )   // 1分钟前
// 思路：
// (1)调用时传入的是发送的时间；
// (2)获取当前时间；
// (3)求时间差
// (4)然后判断时间差，如果小于1分钟，那么弹出刚刚
// (5)如果时间差小于1小时，那么具体计算到底是多少分钟
// (6)如果实现差小于1天，那么具体计算到底是多少小时
// (7)否则，具体计算是多少天；


// var toDateFriendly = function (timestr) {}

// var date = new Date()

// // toDateFriendly(date)
// console.log(date)











// 完成时间：第十节课
// 7、封装一个函数getWeek(n)，获取几天后是星期几，并在页面中输出：n天后是星期x
// 思路：
// （1）利用new Date()时间日期对象获取和修改时间
// （2）获取修改后时间的星期数
// （3）switch判断获取的0-6的星期数，最终把对应的结果输出到页面上
// 8、封装函数getTime()，实现前时间的格式化 xxxx年xx月xx日 xx:xx:xx 星期x
// 思路：
// （1）利用new Date()时间日期对象获取当前时间，以及获取年月日时分秒星期
// （2）封装函数addZero(n)，当数字小于10时候，自动补零，大于10原样返回
// （3）将获取的年月日时分秒按照xxxx年xx月xx日 xx:xx:xx 星期x的格式拼接并输出（注意月份的处理）
// 完成时间：第十一节课
// 9、封装一个函数getColor()，返回一个十六进制颜色值 如”#184AFC”，十六进制颜色值是由#和 “0，1，2，3，4，5，6，7，8，9，A,B,C,D,E,F”中任何一个字符随机拼接6次得到，请封装函数实现十六进制颜色的获取。
// 思路：
// （1）创建一个str = “0123456789ABCDEF”;的字符串；
// （2）利用for循环循环6次，每次获取0-15的一个随机整数，作为下		 标，获取一个随机的str[i]
// （3）利用+=赋值拼接最终的结果




// var date = new Date()
// console.log(date.getTime())

// var max = arr[0];
// for(var i = 0 ; i < arr.length ; i++){
//     if(arr[i] > max){
//             max = arr[i]
//         }
//     for(var m = 1 ; m < arr.length ; m++){
//         if(arr[m] > arr[i]){
//             max = arr[m]
//         }
//     }
// }
// console.log(max)