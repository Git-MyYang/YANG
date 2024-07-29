

var num1 = 45;
var num2 = 19.9;
var num3 = num1 / "abc";   
// 检测类型
console.log( typeof num1 , typeof num2 , typeof(num3) )



var str1 = "45";
var str2 = "收纳箱塑料特大号衣服加厚家用户外整理箱大号衣柜收纳盒储物箱子";
// console.log(str1)
// alert(str2)
console.log( typeof str1 , typeof(str2) )

var strRes = typeof str1;
console.log(strRes)   //"string"

// 布尔  只有两个值   true    false   
var bol1 = true;
var bol2 = false;
// console.log(bol1 , bol2 )
console.log( typeof bol1 , typeof(bol2) )

var bolRes = typeof bol1;   // "boolean"
console.log( bolRes )

// undefined  未定义
// 1 声明未赋值
var und1 = undefined;
// console.log(und1)
// 2 声明未赋值的 数据类型
// console.log( typeof und1 )
// 3 未声明变量的 数据类型
// console.log( typeof und2 )
console.log( typeof und1 )


// null 空  是特殊的  空  对象  -> 存储的是空的指针【地址】对象
// 注意:  需要显示 赋值  null
var n1 = null ;  
// console.log(n1)
console.log( typeof n1 )

/*
var sex = false;    // true女孩   false 男孩
// 判断if 如果是 女孩  弹出 黄花大闺女    否则else 男孩  页面输出  顶天立地
if(sex){
    alert("黄花大闺女 眉清目秀")
}else{
    document.write("顶天立地")
}
*/