// 第一题：二维数组的对角线求和（20分）
// 问题描述： 编写一个函数 diagonalSum，该函数接收一个二维数组（矩阵）作为参数，并返回其主对角线元素的和。主对角线是从矩阵的左上角到右下角的对角线。
// 1.函数应返回一个数字，表示所有在主对角线上的元素的和。
// 2.确保二维数组至少为 1x1 大小，并且是方阵（即行和列数相等）。
// 3.处理任何大小的方阵。




// // 声明一个变量
// var matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]; 
// // 封装一个函数
// function diagonalSum(str) {
// console.log(str)
// var newArr = 0
// // 循环遍历 拿到数组
// for(var i = 0; i < str.length; i++){
//     for(var j = 0 ; j <= i; j++){
//         return newArr = str[i][j] + str[i+1][j+1] + str[i+2][j+2]
//     }
    
// }
// }
// console.log(diagonalSum(matrix));
// // // 应输出：15 (即 1 + 5 + 9)






// 第二题：旋转数组（20分）
// 问题描述： 编写一个函数 rotateArray，该函数接收一个数组和一个整数 k 作为参数。函数的任务是将数组中的元素向右移动 k 个位置，其中 k 是非负数。



// // 封装函数
// function rotateArray(array, num) {
// // // 实现逻辑
// // 循环遍历
// // 创建新数组
// var newArr = []
// // 截取下表和删除项
//     newArr = array.splice(array.length - num , num)
//     // 合并输出
//     return newArr.concat(array)
// }
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotateArray(arr, 3));
// // // 应输出：[5, 6, 7, 1, 2, 3, 4]







// 第三题：最长公共前缀（20分）
// 问题描述：
// 编写一个函数 longestCommonPrefix，该函数接收一个字符串数组，并返回数组中所有字符串的最长公共前缀。如果不存在公共前缀，则返回一个空字符串。
// 要求：
// 函数应返回字符串数组中所有元素的最长公共前缀。
// 如果数组为空，返回空字符串。
// 如果没有公共前缀，则返回空字符串。

// // 声明输入变量
// var words = ["flower", "flow", "flight"];
// var words2 = ["dog", "racecar", "car"];
// // 封装函数
// function longestCommonPrefix(arr){
//     var newArr = ""
//     // 循环遍历
//     for(var j = 0; j <= arr[0].length; j++){
//     for(var i = 1; i < arr.length; i++){
//     if(arr[0] !== arr[i][j]){
//         return newArr
//     }else{
//         if(i === arr.length - 1){
//             conStr += arr[0][j]
//         }
//         }  
//     }
// }
//     return newArr
// }
// console.log(longestCommonPrefix(words));
// // 应输出："fl"
// console.log(longestCommonPrefix(words2));
// // 应输出：""









// 第四题：子串出现次数（20分）
// 问题描述：
// 编写一个函数 countSubstrings，该函数接收两个字符串参数：str（原始字符串）和 sub（子字符串）。函数的任务是计算子字符串在原始字符串中出现的次数。


// // 封装函数
// function countSubstrings(str,sub){
//     // 声明变量0进行累加
//     var Str = 0
//     // 去除字符串空格
//     str = str.split(" ").join("")
//     sub = sub.split("")
//     // 循环遍历
//     for(var i = 0; i < str.length; i++){
//         // 判断截取长度和子字符串是否相等
//         if(sub.join("") === str.substr(i,sub.length)){
            
//         //   str = (sub.join("")).concat(str)
//           Str++
//         // console.log(str)
//         }
        
//     }
//     return Str
// }
// console.log(countSubstrings("hello hello world", "hello"));
// // // 应输出：2
// console.log(countSubstrings("abcabcabc", "abc"));
// // // 应输出：3





// 第五题：格式化货币金额（20分）
// 问题描述：
// 编写一个函数 formatMoney，该函数接收一个数字作为参数，并将其格式化为带有千位分隔符的金额格式。该函数应确保所有输出的金额格式均包含两位小数，并使用逗号作为千位分隔符。
// 要求：
// 1.函数必须处理任意大小的正数、负数或零，并正确格式化为带有两位小数的字符串。
// 2.输出的字符串应包含适当的千位分隔符。
// 3.函数应兼容整数和浮点数，确保浮点数始终显示两位小数，即使这两位是零。
// 4.如果数值为负数，负号应出现在最前面。




// function formatMoney(arr){
//     // 判断正负数
//     arr < 0 ? "-" + arr : arr
    
//      (arr - parseInt(arr))     

    
// }
// console.log(formatMoney(1234567.891));
// // 应输出："1,234,567.89"
// console.log(formatMoney(1000));
// // 应输出："1,000.00"
// console.log(formatMoney(199.99));
// // 应输出："199.99"
// console.log(formatMoney(-5310.25));
// // 应输出："-5,310.25"


// // 双色球 js 代码

// // 获取元素
// var Time = document.querySelector(".Time") ,   // 日期时间
//     BlueArr = document.querySelector(".BlueArr") , // 蓝
//     RedArr = document.querySelector(".RedArr") ,  // 红
//     Btn = document.querySelector(".Btn") ,  // 开始
//     stopBtn = document.querySelector(".stopBtn") ;  // 停止

// // 将号码写入对应的 li  点击开始  随机刷球   停止结束   下午继续
// // 获取到的li 是伪数组对象  借助es6的扩展运算符... 转成真数组
// var bluelis = [...BlueArr.querySelectorAll("li")],
//     redlis = [...RedArr.querySelectorAll("li")],
//     ballTimer = null;  // 预留球的定时器  

//     // 定时器
//     timeTimer = setInterval(function(){showTime()} , 1000)
//     showTime()
// // 封装日期函数
// function showTime(){
//     var date = new Date(); // 最新日期时间

//     var year = date.getFullYear(), //年
//         month = zero( date.getMonth() ), //月
//         day = zero( date.getDate() ), //日
//         hour = zero( date.getHours() ),  // 时
//         minute = zero( date.getMinutes() ),  //分
//         second = zero( date.getSeconds() ),  //秒
//         week = date.getDay(),  //周
//         WeekArr = ["日","一","二","三","四","五","六"];
//         var timeTimer = null
//     Time.innerHTML = year + "年" + month + "月" + day + "日" + hour + ":" + minute + ":" + second + "星期" + WeekArr[week];
// }
// // 封装补零函数
// function zero(n){
//     return n < 10 ? "0" + n : n 
// }
// // 封装随机数
// function randomNum(min , max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // 封装双色球函数
// function getNum(n,min,max){
//     var arr = []
//     while(arr.length < n){
//         var num = randomNum(min , max)
//         if(arr.indexOf(num) === -1 ){
//             arr.push(num)
//         }
//     }
//     return arr.sort(function(a,b){return a - b})
// }
// // 绑定点击事件
// Btn.onclick = function(){
//     // 打开 单击
//     Btn.disabled = true;
//     // 双色球区间函数封装
//     ballTimer = setInterval(function(){
//         BlueNew = getNum(5 , 1 , 35)
//         RedNew = getNum(2 , 1 , 12)
//         // 循环遍历拿到每一个元素li  将对应的号码 塞进去
//         bluelis.forEach(function(item , i){ // item 是每一个元素li , i 是下标
//             item.innerHTML = zero(BlueNew[i])
//         })
//         redlis.forEach(function(item , i){ // item 是每一个元素li , i 是下标
//             item.innerHTML = zero(RedNew[i])
//         })
//     }, 50)
// }
// // 给停止机选 绑定事件  清除定时器
// stopBtn.onclick = function(){
//     // 关闭 单击
//     Btn.disabled = false
//     // 清除定时器返回值
//     clearInterval(ballTimer)
// }



