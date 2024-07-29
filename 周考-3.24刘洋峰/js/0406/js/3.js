// 转  字符串    转数字   转布尔

// 其他类型  转字符串    
        // String(值)      将任何类型都加 引号  返回
        // 值.toString()   undefined 和 null 报错， 其他类型加 引号 返回
        // +"" 拼接        将任何类型都加 引号  返回
// 数值  -> 整型   -> 浮点型  -> NaN
// console.log( String(456) )
// console.log( String(9.9) )
// console.log( String(NaN) )

// console.log( (456).toString() )
// console.log( (9.9).toString() )
// console.log( (NaN).toString() )
// 布尔类型 true  false
// console.log( String(true) )
// console.log( String(false) )

// console.log( true.toString() )
// console.log( false.toString() )
// 未定义  undefined
// console.log( undefined.toString() )
// 空  null
// console.log( null.toString() )


// 其他类型转 布尔值   Boolean(值)   false -> false '' NaN  0  undefined  null
// 字符串   空字符串  和 非空字符串   ''   '  xsx'
// console.log( Boolean('') )
// console.log( Boolean('hello') )
// // 数字  -> 整型   -> 浮点型  -> NaN
// console.log( Boolean(456) )
// console.log( Boolean(9.9) )
// console.log( Boolean(NaN) )
// console.log( Boolean(-0) )
// // undefined
// console.log( Boolean(undefined) )
// // null
// console.log( Boolean(null) )


// 其他类型 转 数字  ->  整型   -> 浮点型  -> NaN
// Number(值)   要么数字  要么NaN  空字符串 false null -> 0  true -> 1   undefined -> NaN
// parseInt(值)  取整   遇第一个非数字止,将前面能返回的返回  否则直接NaN
// parseFloat()  浮点型  在取整的基础上  多识别一个小数点

// 字符串  ->  ''  'hello'  '45'  '45abc'    'abc78'   'q4w9'    ',,,,...'
// console.log( Number('') )    //  0
// console.log( Number('hello') )
// console.log( Number('你好') )
// console.log( Number('45') )  // 45
// console.log( Number('45abc') )
// console.log( Number('7d7w') )
// console.log( Number(',,..') )

// console.log( parseInt('') )    // NaN
// console.log( parseInt('hello') )  // NaN
// console.log( parseInt('你好') )  // NaN
// console.log( parseInt('45') )  // 45
// console.log( parseInt('45abc') )  // 45
// console.log( parseInt('.7.7w') )   // 7
// console.log( parseInt(',,..') )   // NaN


// console.log( parseFloat('') )    // NaN
// console.log( parseFloat('hello') )  // NaN
// console.log( parseFloat('你好') )  // NaN
// console.log( parseFloat('45') )  // 45
// console.log( parseFloat('45abc') )  // 45
// console.log( parseFloat('.7.7w') )   // 0.7
// console.log( parseFloat(',,..') )   // NaN

// 布尔
// console.log( Number(true) )    //  1
// console.log( Number(false) )   // 0

// console.log( parseInt(true) )
// console.log( parseInt(false) )

// console.log( parseFloat(true) )
// console.log( parseFloat(false) )

// 未定义  和  null
// console.log( Number(undefined) )  // NaN
// console.log( Number(null) )    // 0

// console.log( parseInt(undefined) )  // NaN
// console.log( parseInt(null) )    // 0

// console.log( parseFloat(undefined) )  // NaN
// console.log( parseFloat(null) )    // 0


// isNaN()  检测非数字   true 是非数字   false 是数字
// isNaN() 将检测值 隐式转换Number()  再判断
// console.log( isNaN(true) )   // false     //  Number(true) -> 1   
// console.log( isNaN(undefined) )  // true  Number(undefined) -> NaN
// console.log( isNaN(null) )  // false
// console.log( isNaN(false) )  // false
// console.log( isNaN('') )  // false
// console.log( isNaN("45abc") )  // true
// console.log( isNaN("8.99") )  // false


// "get-element-by-id"   -> getElementById
// getelemeNTBYID
// var str = "get-element-by-id";
// // 1 通过  -  拆分 每个单词  变成数组
// str = str.split("-");
// // console.log(str)
// // 2 将数组的第一项直接存储  用于拼接
// var newStr = str[0];     //get
// // 3 从下标1开始循环  拿到每个单词
// for(var i = 1 ; i < str.length ; i++){
//         // console.log(str[i])  element
//         // 4 核心 把每个单词的下标0 转成大写 拼接 1及之后的 小写
//         // 结果 : getElementById
//         // newStr += str[i][0].toUpperCase() + str[i].slice(1)
//         // element -> e -> E + lement ---> Element
//         // by -> b -> B + y

//         // 5 核心  把每个单词的 后两个字母大写  从0开始到 倒数第二个小写
//         // 结果: getelemeNTBYID
//         newStr += str[i].slice(0,-2) + str[i].slice(-2).toUpperCase()
//         // element -> 0,-2 -> eleme + -2 -> nt -> NT   
//         // by -> b -> B + y
// }
// console.log(newStr)



