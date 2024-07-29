// 循环   重复干某个事儿
// 循环  1 - 10 之间的数打印
// 循环  20 - 40 之间的数打印
    // for(var i = 1 ; i <= 10; i++){
    //     console.log(i)
    // }

    // for(var j = 20 ; j <= 40; j++){
    //     console.log(j)
    // }

// 函数 将特定功能代码块  进行封装

// 声明函数
// 1 函数 表达式   打印 hello
// 语法 :  var name = function(){}
// var fn1 = function(){
//     console.log("hello")
// }

// 2 函数 声明式   页面输入标题 h1
// 语法:  function name(){}
// function fn2(){
//     document.write("<h1>输出</h1>")
// }

// 调用函数   
// 语法:  函数名()   调用一次执行一次
// fn1()
// fn1()
// fn2()
// fn2()

// 区别
// 函数表达式: 在声明之前访问报错  -> 
// fn1()
// var fn1 = function(){
//     console.log("hello")
// }
// fn1()
// // 函数声明式: 声明前后都可以访问
// fn2()
// function fn2(){
//     document.write("<h1>输出</h1>")
// }
// fn2()

// 函数类型
// function fn(){
//     console.log(123)
// }
// console.log(typeof fn) // object?????

// 需求 拓展引入知识点
// 特定功能   求两数和   5 6     50 100  
// 特定功能   打印  1-10   50-100  ？ 
// 函数参数
// function add(a,b){
//     console.log(a + b)
// }

// function fn(s , e){
//     for(var i = s ; i <= e; i++){
//         console.log(i)
//     }
// }

// add(5 , 6)
// add(3 , 2)
// add(80, 100)
// add(150 , 50)

// fn(1,5)
// fn(15,18)


// function fn(a,b,c){
//     console.log(a,b,c)
// }

// fn(1)

// 需求
// 求 任意两数之间 能被 某数 整除的数
// 问: 几个参数  分别是什么？
//       3    开始值   结束值   某数
//              15       50     5
//              80       200    8
// function fn(s , e , n){
//     // 思路: 1 拿到两数之间的所有数
//     for(var i = s ; i <= e ; i++){
//         // 2 判断 当前数 i 是否能被  n 整除
//         if(i % n === 0){
//             console.log(i)
//         }
//     }
// }
// fn(15 , 50 , 5)
// fn(80 , 200 , 8)

// 需求: 查找 长字符串 中 某个字符 出现的次数
// 问: 几个参数  分别是什么？
//      2         长字符串     某个字符    
// function getStrCount(str , s){
//     var count = 0; // 计数
//     // 1 循环拿到每一个字符
//     for(var  i = 0 ; i < str.length ; i++){  
//         // i  是下标    str[i] 对应的字符
//         // console.log(i + "下标对应的字符是" + str[i] )
//         // 判断当前字符 是否与 查找的 目标s一致  计数一次
//         if(str[i] === s){
//             count++
//         }
//     }
//     console.log(count)
// }
// getStrCount("hello" , "l")
// getStrCount("gcudsjkdsckjd" , "d")
// getStrCount("guiedjsxk" , "d")



// 1、用函数声明式定义一个函数；实现在控制台打印‘上海网站’；并在定义函数的上面和下面分别调用该函数，观察是否执行函数


// 2、 用函数表达式的方式定义一个函数，实现在控制台打印’我是最棒的’；并在定义函数的上面和下面分别调用函数，观察是否执行函数，思考一下，为什么会出现这种情况；


// 3、定义一个函数，弹出函数的数据类型  function


// 4、定义一个add函数，实现输出‘我想成为前端工程师’，再定义一个add函数，实现弹出”我想成为一名全栈工程师”；然后调用add函数，观察执行结果是什么



// 5、声明一个变量running;给其赋一匿名函数function（）{console.log(‘helloword’)}，然后再次给running变量赋一个字符串‘eat’;调用running();会出现什么结果。
// var running = function(){
//     console.log("hello")
// }
// running = "eat";

// running()    // 报错  running is not a function

// 6、function sum(){___console.log(arguments)____________};补全代码，实现输出一个实参的集合；


// 7、定义一个函数，计算出100以内可以被三整除的数
// 思路：定义函数，函数调用，使用for循环


// 8、定义一个函数，打印出下列图形
// *****
// ***
// *
// 思路：正确的函数定义与调用，函数中使用循环

// 2、封装函数，传入两个参数，第一个参数表示打印n行的一个三角，第二参数如果是true，表示打印n行的正三角，如果是false,表示打印n行的到三角；
// 封装函数  实现 n 行由任意图形 组成的 正三角 或 倒三角 
// function printTriangle( n , bol , type ){
//     // 1 判断bol 是真还是假   真 正  假 倒
//     if(bol){
//         for(var i = 1 ; i <= n ; i++){   // 行数   规律; 列在跟随行变化
//             print(i , type)
//         }
//     }else{
//         for(var i = n ; i >= 1 ; i--){   // 行数   规律; 列在跟随行变化
//             print(i , type)
//         }
//     }
// }
// printTriangle( 5 , true , "♥")  // 实现五行 由 ♥ 组成的正三角
// printTriangle( 3 , false , "🌂" ) // 实现三行 由 🌂 组成的倒三角

// function print(i , type){
//     for(var j = 1 ; j <= i ; j++){
//         document.write(type)
//     }
//     document.write("<br>")
// }

// 完成时间：第八节课（企业用时20分钟）
// 1、封装一个函数，传入两个参数，第一个参数表示循环的起始值，第二个参数表示循环的终止值，用来计算从起始值到终止值之间的和，如两个参数分别为start和end，start为1，end为10，就计算1到10之间所有数的和，最终将计算出来的和返回。
// 思路：遍历start-end之间的每一个数，每遍历一个，加一个


// 2、封装一个函数，实现对参数的判断
// 如果没有参数，默认返回false   
// 如果参数是字符串，原样返回
// 如果参数是数字，将数字转换为字符串返回
// 如果是布尔型，ture返回真，false返回假
// 如果不是以上判断的几种情况，返回null
// 思路：判断参数的类型，（注意没有传参时，参数的值为undefined）
// function checkType(val){
//     switch(typeof val){
//         case "undefined":
//             console.log(false)
//         break;
//         case "string":
//             console.log(val)
//         break;
//         case "number":
//             console.log(String(val))
//         break;
//         case "boolean":
//             val ? console.log("真") : console.log("假") 
//         break;
//         default :
//             console.log(null)
//         break;
//     }
// }
// checkType()    //  false
// checkType("hello")  // "hello"
// checkType(23)   // "23"
// checkType(true)  // "真"
// checkType(false)  // "假"
// checkType(function(){})  // null
// checkType({})   // null



// 完成时间：第十节课（企业用时20分钟）
// 1、封装函数实现打印y-m年的所有的闰年 
// 思路：闰年的条件时能被4整除但不能被100整除，或能被400整除
// function getYear(sY , eY){
//     // 循环开始年 与 结束年之间的所有年
//     for(var i = sY ; i <= eY ; i++){
//         // 判断当前年i 是不是 闰年
//         if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
//             document.write(i + " , ")
//         }
//     }
// }
// getYear( 2000 , 2500 )

// 完成时间：第十一节课（企业用时30分钟）
// 1、用函数封装求任意个数字相加的和。备注;arguments
// 思路：遍历arguments,获取每一个实参



// 2、封装一个函数，实现判断是否传参，如果没传，返回0，如果传参，求所有数字参数和
// 思路：获取每一个实参，然后判断是否是数字，如果是求和
// function getAddNumber(){
//     var add = 0;
//     // 1 判断有没有传入参数 即  长度 === 0
//     if(arguments.length === 0){
//         console.log(0)
//     }else{
//         // 循环遍历拿到实参每一项
//         for(var i = 0 ; i < arguments.length; i++){
//             // 判断每一项  是不是  数字  即 类型 number
//             // if(typeof arguments[i] === "number"){
//             // 若 把 字符串的数字 也当作数字
//             if(!isNaN(arguments[i])){
//             }
//         }
//         console.log(add)
//     }
// }
// getAddNumber()    // 0
// getAddNumber("hello" , 45 , 5 , "abc" , true) // 50
// getAddNumber("45" , 5 , true) // 5


// 封装一个函数 找到所有的数字求和 所有的字符串拼接  其他类型不参与 
// 将最终结果  字符串在前 - 数字之和  返回

// 参数不确定   arguments
// function fn(){
//     // console.log(arguments)
//     var count = 0 ;  // 求和
//     var str = "";  // 拼接
//     // 循环遍历拿到 每一项
//     for(var i = 0; i < arguments.length; i++){
//         // 判断是数字  且 不是NaN
//         if(typeof arguments[i] === "number" && String(arguments[i]) !== "NaN"){
//             count += arguments[i]
//         }else if(typeof arguments[i] === "string"){
//             str += arguments[i]
//         }
//     }
//     return str + " - " + count
// }
// // 任何与NaN相关都将返回NaN  即 排除NaN 
// console.log( fn(true , "hello" , "china" , NaN , 2024 , 3) )   // "hello china" - 2027
// document.write( "<div>" + fn("hello" , "china" , 108 , 2) + "</div>" ) // "hello china" - 110








// 3、封装一个函数color(),根据传入的参数来实现获取或设置背景或字体颜色。
// color(“box”,‘background-color’)  用于获取box的背景色
// 元素.style[arguments[1]]
// color(“box“”,‘background-color’,‘red’)用于设置box的背景色为红色
// 4、封装一个函数，检测任意个参数的类型
// 如果是数字则相加，如果是字符串则拼接，其它类型不执行任何操作
// 最后将数字相加的结果拼接在字符串后面，用‘|’隔开 ,并返回


// 需求 
// 求任意两数之和       确定两个参数  谁 和 谁
// 求任何两数之间的和   确定两个参数   开始  和  结束   循环区间
// 求任意个数字之和     不认定参数   5？   50 ？   15？

// function getAdd(){
//     var add = 0;
//     // 函数内部 arguments 
//     // 实参对象集合【伪数组对象】   不确定参数时使用    
//     console.log(arguments)
//     // 循环遍历 拿到 实参对象的每一项
//     for(var i = 0 ; i < arguments.length ; i++){
//         add += arguments[i]
//     }
//     console.log(add)
// }
// getAdd(15,45,2,3,6,5,8,5,6,3)   // 10
// getAdd(45,26,15,6)  // 4


// 函数的返回值return 
// 餐厅点餐   ->   堂食

// 求 任意两数之和
// function add(a,b){
//     return 
//     a + b
// }
// var num = add( 5 , 4 )  //  9
// console.log(num)
// document.write(add( 1 , 2 ))  //  3
// alert(add(9,1))    // 10
// console.log(add(45,1))  // 46



// 弹出两个输入框  
// 一个是用户输入的拼接内容
// 一个是用书输入的次数

// 如果用户输入的拼接内容为空   提示用户不能为空   继续弹出重新输入   直到有效为止  如:"hello"
// 接着弹出第二个输入框   如果没有输入  如上  如果不是数字或不是3-6之间的数字  提示输入错误
// 直到 输入的数字 在3-6的范围内  如:3
// 返回 用户指定次数的拼接内容   "hellohellohello"


// 给定一个长字符串  将里面重复的字符去掉  每个字符只保留一个
// 如:   "aaahsbjhj"  ---->   "ahsbj"


// 
