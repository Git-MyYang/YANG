

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