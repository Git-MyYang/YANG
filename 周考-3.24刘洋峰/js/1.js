// 创建
// 字面量的方式
// var arr1 = ["hello"];
// // new的方式
// var arr2 = new Array("hello")

// console.log(arr1 , arr2)



// var arr = [1 , function(){} , null , {} , true , new Date() * 1 , "hello" , undefined , [] ];
// // 获取
//     // console.log( arr[0] )
//     // console.log( arr[5] )
//     // console.log( arr[1] )
//     // console.log( arr[100] )   // 下标出界 undefined

// // 设置
//     // arr[99] = "china";
//     // console.log(arr)

// // length 属性
// console.log(arr.length)
// arr.length = 0
// console.log(arr)




// 数组.方法()

// var arr =  [45,15,"hello",undefined,true,null,"china"];
//          0  1     2       3       4    5     6
// console.log(arr , arr.length)
// 添加
    // unshift()  前
    // var res = arr.push(function(){} , {} , 78);
    // console.log(arr , res)


// 删除
// var res = arr.pop();
// console.log(arr , res)

// 查找:
// var res = arr.indexOf(true);
// var res1 = arr.lastIndexOf(true);
// console.log(arr , res , res1)


// var arr1 = [1,2,3] , arr2 = [4,5,6];
// var res = arr1.concat(arr2 , "hello" , [7,8,9] , "china")
// console.log(arr1 , arr2 , res)

// var arr = [1,2,3,4,56,7,8];
// var res1 = arr.slice()  //  全部
// var res2 = arr.slice(3) //  开始下标  到最后
// var res3 = arr.slice(3,5) // 开始 结束  含头不含尾
// var res4 = arr.slice(-2 , -1)
// console.log(res1 ,  res2 , res3 , res4 , arr)


// var arr = ["china","hello" ,"null" , "apple"]
// var str = arr.join("123");
// console.log(str , arr)


// var res = arr.splice(2 ,0 , 1,2,3,4)
// console.log(arr , res)

// var res = arr.splice(2 , 2)
// console.log(arr , res)

// var res = arr.splice(1 , 2 , 1,2,3,"a","b","c")
// console.log(arr , res)


// var res = arr.sort().reverse()
// console.log(arr , res)

// arr.reverse();
// console.log(arr)

// splice()


// var arr = [1 , 2 , 1,2,3,"a","b","c"];
// arr.forEach(function(item,index,arr){
//     console.log(item , index , arr)
// })



// var arr = [15,9,4,5,6,8,10];
// var res = arr.find(function(item){
//     return item % 10 === 1;
// })
// console.log(res)



// var res = arr.every(function(item){
//     return item * 2 >= 8;
// })
// console.log(res)


// var res = arr.some(function(item){
//     return item * 2 > 30;
// })
// console.log(res)

// var res = arr.filter(function(item){
//     return item * 2 > 10;
// })
// console.log(res)


// var res = arr.map(function(item){
//     // 对数组的每一项进行指定操作 
//     // 返回操作后的新数组
//     return item * 3
// })
// console.log(res)


// 模拟数据
var data = [
    {
        user : "张三" ,
        age : 15 , 
        sex : "男",
        address : "北京"
    },
    {
        user : "李四" ,
        age : 18 , 
        sex : "男",
        address : "上海"
    },
    {
        user : "小红" ,
        age : 12 , 
        sex : "女",
        address : "广州"
    },
    {
        user : "小米" ,
        age : 20 , 
        sex : "女",
        address : "深圳"
    },
    {
        user : "小明" ,
        age : 1 , 
        sex : "男",
        address : "厦门"
    },
    {
        user : "李华" ,
        age : 21 , 
        sex : "女",
        address : "宁夏"
    }
]
// 初始 人员信息数据  var data = [{} , {} ....] 
// 1 获取要操作的元素
// 2 将所有的人员信息 展示再 users 中 作为内容  .innerHTML
//      即  对所有的人员信息 进行指定操作  -> map   注意: 返回数组 进入页面是字符串  需要.join("")
                    //              -> 一组人员信息 存入一个li  信息分别是span

// 3 将所有的未成年  展示再  pass中  作为内容   .innerHTML
//      即 再所有数据中 筛选匹配 所有未成年   -> filter
//         将筛选返回的 数据  渲染

// 4 将第一个成年人的信息  存入  first 作为内容 
//      即 再所有数据中 查找第一个匹配条件【age>=18】的项    find 
//         返回的项是 包含该人员信息的对象   需要 对象.属性 获取分别存入对应的元素



var users = document.querySelector(".users"),  // 所有人员信息
    pass = document.querySelector(".pass"), // 未成年
    // 以下  都是   第一个 成年人的信息
    age = document.querySelector(".age") ,  // 年龄
    names = document.querySelector(".name") , // 名字
    address = document.querySelector(".address") ; // 地址

// 2 将所有的人员信息 展示再 users 中
    //  即  对所有的人员信息 进行指定操作  -> map
                    //              -> 一组人员信息 存入一个li  信息分别是span
users.innerHTML = data.map(function(userObj){
    // console.log(userObj)
    return "<li><span>" + userObj.user + "</span><span>" + userObj.age + "</span><span>" + userObj.sex + "</span><span>" + userObj.address + "</span></li>"
}).join("")

// 3 将所有的未成年  展示再  pass中
    // 即 再所有数据中 筛选匹配 所有未成年   -> filter
var passData = data.filter(function(userObj){
    // console.log(userObj)
    return userObj.age < 18
})
// console.log(passData)
pass.innerHTML = passData.map(function(userObj){
    return "<li><span>" + userObj.user + "</span><span>" + userObj.age + "</span><span>" + userObj.sex + "</span><span>" + userObj.address + "</span></li>"
}).join("")

// 4 将第一个成年人的信息  存入  first
    // 即 再所有数据中 查找第一个匹配条件【age>=18】的项    find
var firstData = data.find(function(obj){
    return obj.age >= 18;
})
// console.log(firstData)
names.innerHTML = firstData.user;
age.innerHTML = firstData.age ; 
address.innerHTML = firstData.address