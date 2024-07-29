// 页面中初始一个div元素 和 按钮
// 需求
// 要求用户点击按钮时  对 div 设置随机大小 w: 300-800   h : 200 - 500
//                             内容大小随机   20 - 50
//                              随机背景颜色
//                               随机内容
//                               内容个数随机   8 - 20
//                               
//                               内容颜色随机

// 获取元素的方法
// 1 通过id名获取  document.getElementById()   返回值: 元素对象本身
// var boxId = document.getElementById("box");
// console.log(boxId)

// 2 通过class获取   document.getElementsByClassName()  返回值: 类数组【伪数组】对象
// var boxClass = document.getElementsByClassName("box");
// console.log(boxClass)
// console.log(boxClass[0] , boxClass[1] , boxClass[5])

// 3. 通过标签名称获取   document.getElementsByTagName()  返回值: 类数组【伪数组】对象
// var lis = document.getElementsByTagName("li");
// console.log(lis)

// 4. 通过选择器获取
//   4.1 document.querySelector()   返回值: 元素对象本身
//   4.2 document.querySelectorAll()   返回值: 类数组【伪数组】对象

// var box = document.querySelectorAll("ul li");
// console.log(box)


// 思路
// 1. 获取元素
var btn = document.querySelector(".btn") ,
    box = document.querySelector(".box") ;
// 生成内容的长字符串
var conStr = "春日经济为代表的旅游消费热辣滚烫离不开文旅产品提质增效文旅融合是春日经济的重头戏相比传统单一的赏花踏春如今各地将传统文化与花季美景相结合精心设计旅游产品不断解锁新花样为消费者提供更为丰富多彩的旅游体验北京发布九大花事并串联特色古迹赏花点推出多条主题游线路；湖北武汉花博汇景区上新知音花月夜夜游活动展现文化+科技的现代魅力；中国铁路上海局以南湖·1921精品红色旅游列车为主线策划推出在南湖遇见你文艺党课等5条全新的红色旅游线路";
// 生成十六进制的颜色字符串
var color = "0123654789abcdefABCDEF";
// console.log(btn , box)


// 3. 给按钮绑定 点击事件    元素.onclick = function(){}
//                                点击         执行操作
btn.onclick = function(){
    
    // 给div 元素添加样式    元素.style.属性 = 值;
    box.style.width = randomFn(300 , 800) + "px";
    box.style.height = randomFn(200 , 500) + "px";
    box.style.fontSize = randomFn(20 , 50) + "px";

    // 获取当前 要生成内容的个数 8 - 20
    var conCount = randomFn(8 , 20);   //  10
    // console.log(boxCon)
    // 对元素的内容进行操作   元素.innerHTML 表示获取内容    元素.innerHTML = 值  表示设置或修改内容
    box.innerHTML = randomCon( conCount , conStr);
    box.style.background = "#" + randomCon(6,color);
    box.style.color = "#" + randomCon(6,color);
}

// 2 由于随机较多  可封装函数
function randomFn(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// f封装随机个数的内容  和 颜色 函数
function randomCon(n , str){
    var con = "";
    // 按照指定的个数  在长字符串中 随机 得到内容   注意; 得到的是随机下标  通过下标找对应的内容字符
    for(var i = 0; i < n ; i++){
        // 获取随机 下标
        var index = randomFn(0 , str.length - 1);
        // console.log(index , conStr[index])
        con += str[index]
    }
    return con;
}