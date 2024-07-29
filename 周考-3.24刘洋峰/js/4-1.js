
// var arr = [9,5,2,7,40,3,2];
// var max = arr[0];
// for(var i = 0 ; i < arr.length ; i++){
//     if(arr[i] > max){
//             max = arr[i]
//         }
//     // for(var m = 1 ; m < arr.length ; m++){
        
//     // }
// }
// arr.sort(function(a,b){return a-b})
// console.log(arr)
// console.log(max)


// 刚刚

// var fnDate = function(){
//     var date = new Date()
//      return date
// }
// fnDate()
// console.log(fnDate())

// // 一分钟前

// var fnDate1 = function(){
//     var date = +new Date() - 1000 * 60;
//     date = new Date(date)
//     return date
// }
// fnDate1()
// console.log(fnDate1())


// // 一个小时前
// var fnDateHour = function(){
//     var date = +new Date() - 1000 * 60 * 60 ; 
//     date = new Date(date)
//     return date
// }
// fnDateHour()
// console.log(fnDateHour())



// 1、定义一个数组，在数组里传入5种数组类型的值，在控制台上输出数组的长度

// var arr = [2,"hello",null,true,undefined]
// // for(i = 0 ; i < arr.length ; i++){

// // }
// console.log(arr.length)


// // 2、用new 的方式定义一个长度为10的数组，在控制台上输出这个数组观察一下，并且输出数组的第一项；

// var arr = [0,1,2,3,4,5,6,7,8,9];
// var newArr = [];
// for(i = 0 ; i < arr.length ; i++){
//     newArr[newArr.length] = arr[i]
// }
// console.log(newArr[0])


// // 3、用new Array()的方式，传入两个参数，‘上海’，‘网站’；，然后输出这个数组，并且输出这个数组的最后一项
// var arr = new Array('上海','网站');
// console.log(arr[1])



// // 4、定义一个数组[1,2,3],设置他的长度为10，输出数组，观察数组是否发生了改变，输出下标为8的数组项；

// var arr = [1,2,3];
// arr.length = 10;
// console.log(arr);
// console.log(arr[8])



// // 5、定义一个数组a，b,给a赋值为[1,5,9],然后将a赋给b,修改b数组下标为1的内容为‘hello’然后在控制台打印a的值

// var a = [1,5,9];
// var b = a ;
// b.splice(1,1,'hello')
// b = a ; 
// console.log(a)



// // 6、定义一个数组，然后弹出这个数组的数据类型；

// var arr = [1,3,5,7,9,'hello']

// alert(typeof(arr))



// // 7、定义一个数组arr =[“welcome”,”to”],将“shanghai”添加到数组的末尾，并且在控制台输出添加后的内容

// var arr = ['welcome','to'];
// arr.push('shanghai');
// console.log(arr)



// // 8、如果实现由数组[“I can”]变为[“yes”,”I can”]

// var arr = ['i can'];
// arr.unshift('yes');
// console.log(arr)


// // 9、利用shift方法将数组[9,5,3,6]种的数组项9获取到

// var arr = [9,5,3,6];
// var newArr = arr.shift()
// console.log(newArr)


// 10、 封装一个函数，传入一个数组，将数组的所有数乘以5，然后返回一个新数组
// 例如：var arrs = ["a","c",6,"e",5,3,"d"];
//       将arrs中所有的数字乘以5，返回[30,25,15]
// 思路：
// (1)创建一个新数组。
// (2)遍历原数组的每一项，判断是否是数字；
// (3)如果是数字，那么当前数组项*5；
// (4)添加到新数组中

// function fn(){
//     var arr = [6,2,3,'s','w','i'];
//     var arrs = []
//     for(var i = 0 ; i < arr.length ; i++){
//        // if(isNaN(arr[i]) === false){
            // if(typeof(arr[i]) === 'number'){
//             // arrs.push(arr[i] * 5)
//             arrs[arrs.length] = arr[i] * 5
//         }
//     }    
// console.log(arrs)
// }
// fn()



// 11、封装一个zero（arr）函数，传入一个数组，将这个数组中所有的一位数前面补0，输出一个新数组，
// 例如var nums = [18,6,9,23,88,5];
// zero（arr）得到的结果为 [18,"06","09",23,88,"05"]
// 思路： 
// （1）定义一个函数：并接收一个数组；
// （2）定义一个空数组，放最后结果；
// （3）遍历数组，
// （4）判断数组的每一项是否小于10；
// （5）如果小于10；前面拼接一个‘0‘；拼接后，添加到新数组中
// （6）否则：直接添加到新数组中
// （7）将新数组返回



// function zero(i){
//    return i < 10 ? '0' + i : i
// }
// zero()
// console.log(zero())


// var arr = [18,6,9,23,88,5,'hello'];
// var str = []
// for(var i = 0 ; i < arr.length ; i++){
     
//      if(typeof(arr[i]) === "number"){
//         str[str.length] = zero(arr[i])
//      }
// }
// console.log(zero(str))



// 12、写一个函数bouncer（），实现将数组中的真值，添加到一个新数组中；
// 例如：
// bouncer([7, "ate", "", false, 9]) 应该返回 [7, "ate", 9].
// bouncer(["a", "b", "c"])应该返回 ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) 应该返回 [].
// bouncer([1, null, NaN, 2, undefined]) 应该返回 [1, 2].
// 思路：
// （1）定义一个函数，接收一个数组作为参数；
// 	（2）创建一个空数组 ；结果
// 	（3）遍历数组，
// 	（4）判断每一项是否为真值
// 	（5）如果是真值，那么添加到新数组中
// 		（6）返回新数组


// function bouncer(arr){
//     var arr = [1,3,5,7,undefined,false,'abc'];
//     var num = []
//     for(var i = 0 ; i < arr.length ; i++){
//         // if(arr[i]){
//         //     num[num.length] = arr[i]
//         // }
//         arr[i] ? num[num.length] = arr[i] : undefined
//     }
//    return num 
// }
// console.log(bouncer())





// 13、用多种方式实现删除数组的最后一项内容。（模拟pop方法）
// 思路：数组提供的删除方法： 长度

// 1/
// function fn(arr){
//     arr = [0,15,8,6,'2']
//     arr.length = arr.length - 1
//     return arr
// }
// console.log(fn())


// // 2/
// var arr = [0,15,8,6,'2']
// arr.pop()
// console.log(arr)


// // 3/
// function fn(arr){
//     arr = [0,15,8,6,'2']
//     arr.splice(4,1)
//     return arr
// }
// console.log(fn())


// arr.forEach(function(item){
//     arr.push(item)
// }) 




// var arr = ['get-element-by-id']
// var str = []
// console.log(arr[0])
// for(var i = 0 ; i < arr[0].length ; i++){
//     str[str.length] = (arr[0])[i]
//     //  str += str[str.length]
// }
// str.splice(3,1)
// str.splice(11,1)
// str.splice(13,1)
// str.splice(9,6,'NTBYID')
// str.join()
// console.log(str.join())




// 14、封装一个函数，实现数组的push方法  （利用下标）
// 思路：	
// （1）将第一个实参赋值给变量arr(方便使用);
// 	（2）从第二个实参开始遍历；每遍历一个实参，将其赋给arr下标为arr.length   的位置，实现在数组的末尾添加
// 		（3）循环结束将arr返回；


// function fn(arr){
//     // console.log(arr)
//     var Arr = []
//     for(var i = 1 ; i < arr.length ; i++){
//         Arr[Arr.length] = arr[i]
//     }
//     Arr = arr.concat(Arr)
//     return Arr
// }
// console.log(fn([1,3,5,7]))



// 15、封装一个twoToOne(arr)函数，传入一个二维数组，然后将二维数组转为一维数组
// 思路：遍历到二维数组的每一个元素，添加到新数组中

// function twoToOne(arr){
//     var oneArr = [];
//     for(var i = 0 ; i < arr.length ; i++){
//         // console.log(arr[i])
//         for(var j = 0 ; j < arr[i].length ; j++){
//         // console.log(arr[i][j])
//         oneArr = arr[i][j]
//         }
//     }
//     arr.splice(2,0,'hello','world')
//     arr.splice(4,1)
//     console.log(arr)

//     var newArr = []
//     function unique(arr){
//         for(var m = 0 ; m < arr.length ; m++){
//             if(newArr.indexOf(arr[m]) === -1){
//                 newArr.push(arr[m])
//             }
//         }
//         return newArr
//     }
//     return unique(arr)
// }
// console.log(twoToOne([1,3,['hello','world'],3,1,7,9]))



// var arr = [8,5,7,6,3,2]
// arr.sort(function(a,b){
//     return a - b
// })
// var newArr = arr.join("$")
// console.log(newArr)




// 1、作业要求:
// 封装一个chunk(arr,size)的函数，把该数组arr按照指定的size分割成若干		个数组块。
// 例如：chunk([1,2,3,4],2) 返回结果:[[1,2],[3,4]]
//     chunk([1,2,3,4,5],3) 返回结果:[[1,2,3],[4,5]]


// var arr = [1,2,3,4];
// var size = 2;
// function chunk(arr,size){
// //     arr.concat(size)
// //     return arr
//        arr.splice(2,2)
       
// }
// chunk([1,2,3,4],2)
// // console.log(chunk([1,2,3,4],2))
// console.log(chunk([1,2,3,4],2))




// 2、 作业要求：一维转二维
// 思路：
// (1)创建空数组；
// (2)利用数组的splice方法，每次截取固定长度的数组，push到新数组中
// (3)利用while循环，直到原数组被截取完毕停止循环
// (4)返回新数组
// 4、完成uniqueNums(),该函数接收1个参数n（一个不大于31的整数），其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]；例如：uniqueNums(3)  // return [19,7,10]



// 10、 封装一个numberSort(nList)函数，实现如下功能：nList是个数字串，例如1,4,5,23,2,17,24,897。请把这串数字转为数组后按照中间高两边低进行排序，最后的结果是["1", " 4", " 5", " 23", " 897", " 24", " 17", " 2"]，请注意左右翼数据数据的平衡性（左右两边的数个数一致）。
// console.log(numberSort('1, 4, 5, 23, 2, 17, 24, 897')); //打印结果是["1", " 4", " 5", " 23", " 897", " 24", " 17", " 2"]
// console.log(umberSort('12, 4, 0,65,30,8,19')); // 打印结果是[" 0", " 4", "12", "65", "30", "19", "8"]

// function numberSort(nList){

// }







// 11、封装一个函数，传入一个数组作为参数，将数组一分为二，前面的升序排列，后面的降序排列。






// 双色球：
// 	描述：
// 	一注完整的双色球彩票号码由6个红色号码,1个蓝色号码组成(共7个数字)
// 	6个红色号码在[1-33]范围内随机产生, 1个蓝色号码在[1-16]范围内随机产生
	
// 	正确编写生成双色球号码函数createLottery,可以接收参数n
// 	对于createLottery函数,传入参数1,可以正确生成1注彩票号码并打印输出
// 	对于createLottery函数,传入参数5,可以正确生成5注彩票号码并打印输出


// var arr = Math.floor(Math.random() * 34)
// var n = 5
// var newArr = []
// function createLottery(str,n){
//     for(var i = 1 ; i <= n ; i++){
       
//     }
//     return newArr1
// }
// // console.log(arr,n)
// console.log(createLottery(arr,5))





// function createLottery(n){
    // random = Math.floor(Math.random() * 34);
    // for(i = 1 ; i <= n ; i++){
    //     if(i === 5){
    //         random = Math.floor(Math.random() * 34);
    //         random = Math.floor(Math.random() * 34);
    //         random = Math.floor(Math.random() * 34);
    //         random = Math.floor(Math.random() * 34);
    //         random = Math.floor(Math.random() * 34);
    //     }else{
            
    //         random = Math.floor(Math.random() * 34);
    //     }
    
    // }


   
// }
// createLottery()
// console.log(createLottery(4))






// 随机获取n个不重复的数组项
// 描述，写randomArray函数，传递一个数组，传递一个数值，返回一个指定个数的随机的新数组，不允许有重复数据
// 用例：
// randomArray([
//    '小明', '小红', '小绿', '小白', '小黄', '小蓝', '小黑', '小青'
// ], 3)
// 结果：
// ['小红', '小白', '小明']

//随机数组或字符串的下标  Math.floor(Math.random()*arr.length)   数组   下标
//随机数组  arr[Math.floor(Math.random()*arr.length)]


// function randomArray(arr, n){
    
// }
//  console.log(randomArray(['小明', '小红', '小绿', '小白', '小黄', '小蓝', '小黑', '小青' ], 3))       
        






// 去重求和
// 完成getSum(),该函数接收1个数组作为参数，返回该数组中所有非重复数字的和；
// 例如：getSum([undefined,"23year",19,"097",1,"hello",null,1])  // return 20
// 思路：1）定义一个新数组；2）遍历数组的每一项，然后判断是否在新数组中存在（indexOf），并且是数字，3）如果是添加到新数组中(push)，并且，用sum加上当前遍历的项


// function getSum(arr){
//     var sum = ""
//     var newArr = []
//     for(var i = 0 ; i < arr.length ; i++){
//         if(typeof(arr[i]) === "number" && newArr.indexOf(arr[i]) === -1){
//             newArr.push(arr[i])
//             sum += arr[i]
//         }
//     }
//     console.log(sum) 
//     return newArr
// }
// console.log(getSum([undefined,"23year",19,3,"097",1,"hello",null,1]))




// 字符串去重
// 编写函数uniq(str)，返回去掉str重复项的字符串。
// 例如，uniq(‘12223333’)将返回’123’

// var arr = [1,2,2,2,3,3,3,3]
// var newArr = []
// function uniq(str){
//     for(var i = 0 ; i < str.length ; i++){
//         if(newArr.indexOf(arr[i]) === -1 ){
//             newArr.push(arr[i])
//         }
//     }return newArr
// }
// uniq(arr)
// console.log(newArr)







// arguemtns 多参数求和
// 封装一个函数：传入多个一维数组作为参数，实现求参数的和sum2([1, 2, 3],[4, 5, 6],[7, 8, 9])



// var newArr = []
// var sum = 0
// function fn(){
//     for(var i = 0 ; i < arguments.length ; i++){
//         newArr.push(arguments[i])
//     }
//     for(var j = 0 ; j < newArr.length ; j++){
//         sum += newArr[j].reduce(function(prev,cur){return prev + cur})
//     }
//     return sum
// }
// console.log(fn([1, 2, 3],[4, 5, 6],[7, 8, 9]))






// 每个数组参数中的最大值
// 封装一个largestOfFour函数，将一个二维数组作为该函数的参数，这个二维数组中包含了4个小数组，
// 分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
// 调用：largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) //返回值[5,27,39,1001]

// function largestOfFour(){

// }
// largestOfFour()
// console.log(largestOfFour())





// arguments 多参数去重
// 封装一个函数unite()，传入两个或两个以上的数组，返回一个以给定的原数组排序的不包含重复值的新数组。
	    // 说明：所有数组中的左右值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。	
	    // 例如：unite([1,3,2],[5,2,1,4],[2,1]) //返回结果：[1,3,2,5,4]
		    //  unite([1,2,3],[5,2,1,4],[2,1],[6,7,8])  //返回结果:[1,2,3,5,4,6,7,8]



// 一维转二维（size）
// (一维转二维)封装一个chunk(arr,size)的函数，把该数组arr按照指定的size分割成若干个数组块。
// 例如：chunk([1,2,3,4],2) 返回结果:[[1,2],[3,4]]
//     chunk([1,2,3,4,5,6],3) 返回结果:[[1,2,3],[4,5,6]]






// 一维数组转二维（重复项一起）
// 编写一个方法将一维数组转化成二维数组，（将数组中的重复项合并到一个新数组，最后拼接成一个二维数组）
// Var arr = [1,2,3,2,2,2,3,3,4]
// 经过转换后结果:[[1],[2,2,2,2],[3,3,3],[4]]








// 碱基：
// 封装一个函数pair(str)，实现如下功能：
// Base Pairs是一对AT和CG，为给定的字母匹配正确的碱基。
// 例：pair("ATCG")  //返回值[["A","T"],["T","A"],["C","G"],["G","C"]]
// pair("CTCTA") //返回值[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]






// （去重）
// 封装一个函数noRepeat(arr)，实现将数组中重复的值只保留一个，且做升序排列，
// var num = [1,2,7,8,9,2,3,3,5,6,7,5,3] 
// 例如：noRepeat(nums)  返回[1,2,3,5,6,7,8,9]
// 原理：定义一个新数组，利用indexOf()方法
// 	遍历数组，判断数组的每一项是否在新数组中存在，如果不存在，就添加到新数组中；
// 即判断arr[i]在arrs中位置是否为-1；如果未-1；证明不存在；那么就添加

// var arr = []
// var num = [1,2,7,8,9,2,3,3,5,6,7,5,3]
// function noRepeat(){
    
//     for(var i = 0 ; i < num.length ; i++){
//         if(arr.indexOf(num[i]) === -1){
//             arr.push(num[i])
//         }
//     }
//     arr.sort(function(a,b){return a-b})
//     console.log(arr)
// }
// noRepeat()
// console.log()








// 实现reverse封装
// 分析：从下标为0的位置开始遍历（正序遍历）；然后利用unshift()实现
// 分析2：从最后一个下标开始遍历（倒序遍历）；然后利用push（）实现


// 正序遍历

// var arr = [6,1,55,6,25,65,2,8]
// var newArr = []
// function reverse(Arr){
//     // console.log(arr)

//     for(var i = 0; i < Arr.length ; i++){
//         newArr.unshift(Arr[i])
//     }
//     newArr.sort(function(a,b){return a-b})
//     console.log(newArr)
//     return newArr
// }
// // // reverse()
// console.log(reverse(arr))



// 倒序遍历

// var arr = [6,1,55,6,25,65,2,8]
// var newArr = []
// function reverse(Arr){
//     for(var i = Arr.length - 1 ; i >= 0 ; i--){
//         newArr.push(Arr[i])
//     }
//     console.log(newArr)
//     return newArr
// }
// console.log(reverse(arr))





// 题目 （去重不用indexOf）
// 编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组（不能使用indexof方法）例如：
// unique([0, 1, 2, 2, 3, 3, 4]) // => [0, 1, 2, 3, 4]
// unique([0, 1, '1', '1', 2]) // => [0, 1, '1', 2]

// function unique(arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         for(var j = 0 ; j < arr.length ; j++){

//         }
//     }
// }










// （冒泡）
// 封装一个排序方法, 可实现数组的内容从小到大排序（sort的封装）
// 冒泡原理：相邻两项进行比较，如果前一个大于后一个，那么交换一下位置；


// var arr = [6,215,5,411,5,65,1]
// arr.sort(function(a,b){return a-b})
// console.log(arr)







// 二维数组的应用
// 封装一个format 函数,传入一个长度相等的一维数组组成的二维数组作为参数，在函数内部按照下面实例对该二维数组进行格式化，最后将格式化的结果返出来。 
// 1）例：定义一个二维数组source1=[[1,2,3],[4,5,6],[7,8,9]],执行format(source1)的返回结果是：[[1,4,7],[2,5,8],[3,6,9]]
// 2）例：定义一个二维数组source2=[[1,2],[3,4],[5,6]],执行format（source2）的返回结果是：[[1,3,5],[2,4,6]]
// 3）例：定义一个二维数组source3=[[1,2,3,4],[5,6,7,8]]执行format（source3）的返回结果是：[[1,5],[2,6],[3,7],[4,8]];

// 1
// var source1 = [[1,2,3],[4,5,6],[7,8,9]]
// var newArr1 = []
// var newArr2 = []
// var newArr3 = []
// var newArr  = []
// function format(arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         for(var j = 0 ; j < arr[i].length ; j++){
//             if(j === 0){
//                 newArr1.push(arr[i][j])
//             }else if(j === 1){
//                 newArr2.push(arr[i][j])
//             }else{
//                 newArr3.push(arr[i][j])
//             }
//         }
//     }
//     newArr.push(newArr1)
//     newArr.push(newArr2)
//     newArr.push(newArr3)
//     return newArr
// }
// console.log(format(source1))


// 2
// var source2 = [[1,2],[3,4],[5,6]]
// var newArr1 = []
// var newArr2 = []
// var newArr  = []
// function format(arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         for(var j = 0 ; j < arr[i].length ; j++){
//             if(j === 0){
//                 newArr1.push(arr[i][j])
//             }else{
//                 newArr2.push(arr[i][j])
//             }
//         }
//     }
//     newArr.push(newArr1)
//     newArr.push(newArr2)
//     return newArr
// }
// console.log(format(source2))


// 3
// var source3 = [[1,2,3,4],[5,6,7,8]]
// var newArr1 = []
// var newArr2 = []
// var newArr3 = []
// var newArr4 = []
// var newArr  = []
// function format(arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         for(var j = 0 ; j < arr[i].length ; j++){
//             if(j === 0){
//                 newArr1.push(arr[i][j])
//             }
//             else if(j === 1){
//                 newArr2.push(arr[i][j])
//             }
//             else if(j === 2){
//                 newArr3.push(arr[i][j])
//             }else{
//                 newArr4.push(arr[i][j])
//             }
//         }
//     }
//     newArr.push(newArr1)
//     newArr.push(newArr2)
//     newArr.push(newArr3)
//     newArr.push(newArr4)
//     return newArr
// }
// console.log(format(source3))




// 变形
// var  arr = [[1,2,3,4],["A","B","C",D],["东","南","西","北"]];
// (1)Console.log(fun(arr)); 函数封装，打印出来如下效果     
//[[1,"A","东"],[2,"B","南"],[3,"C","西"],[4,"D","北"]]; 


//  var arr = [[1,2,3,4],["A","B","C","D"],["东","南","西","北"]]
//  var newArr1 = []
//  var newArr2 = []
//  var newArr3 = []
//  var newArr4 = []
//  var newArr  = []
//  function fun(Arr){
//      for(var i = 0 ; i < Arr.length ; i++){
//          for(var j = 0 ; j < Arr[i].length ; j++){
//              if(j === 0){
//                  newArr1.push(Arr[i][j])
//              }
//              else if(j === 1){
//                 newArr2.push(Arr[i][j])
//              }
//              else if(j === 2){
//                  newArr3.push(Arr[i][j])
//              }else{
//                  newArr4.push(Arr[i][j])
//              }
//          }
//      }
//      newArr.push(newArr1)
//      newArr.push(newArr2)
//      newArr.push(newArr3)
//      newArr.push(newArr4)
//      return newArr
//  }
//  console.log(fun(arr))







// 按长度排序 
// 封装一个lengthSort函数，接收一个数组作为参数，，数组的每一项都是一个单词，按照单词的长度，从大到小对数组排序

// var Arr = ['pink','age','yellow','be']
// var newArr = []
// function lengthSort(arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         for(var j = 0 ; j < arr.length - i - 1; j++){
//             if(arr[j].length < arr[j + 1].length){
//                 // var newArr1 = newArr.push(arr[i])
//             // }else{
//             //     newArr1 = newArr.push(arr[i + 1])
//             var newArr1 = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = newArr1
//             }
//         }
//     }
//     console.log(Arr)
//     // return newArr1
// }
// console.log(lengthSort(Arr))




// 找最长单词
// 封装一个findLongestWord(str)函数，str是个英文句子，实现如下功能：找出str句子中最长的单词，并计算它的长度。
// 例如。"The quick brown fox jumped over the lazy dog." 
// findLongestWord("The quick brown fox jumped over the lazy dog."); //6            
// findLongestWord("I believe I can do it.");//7









// 给定一个字符串数组请你将字母异位词组合在一起
// 字母异位词： 是由重新排列源单词的所有字母得到的一个新单词
// 输入: strs = ['eat','tea','tan','ate','nat','bat']
// 输出:        [['bat'],['nat','tan'],['ate','eat','tea']]
// 输入:    strs['']    输出:[['']]
// 输入:    strs['a']   输出:[['a']]







// var age = prompt("请输入年龄");

// age >= 18 ? "<h1>成年</h1>" : "<h6>未成年</h6>"

// console.log(age)




// 10、 封装一个numberSort(nList)函数，实现如下功能：nList是个数字串，例如1,4,5,23,2,17,24,897。请把这串数字转为数组后按照中间高两边低进行排序，最后的结果是["1", " 4", " 5", " 23", " 897", " 24", " 17", " 2"]，请注意左右翼数据数据的平衡性（左右两边的数个数一致）。
// console.log(numberSort('1, 4, 5, 23, 2, 17, 24, 897')); //打印结果是["1", " 4", " 5", " 23", " 897", " 24", " 17", " 2"]
// console.log(umberSort('12, 4, 0,65,30,8,19')); // 打印结果是[" 0", " 4", "12", "65", "30", "19", "8"]


// var arr = [1,4,5,23,2,17,24,897]
// var newArr1 = []
// var newArr2 = []
// function numberSort(nList){
//     nList.sort(function(a,b){return a-b})
//     for(var i = 0 ; i < nList.length ; i++){
//         if(i % 2 === 0 ){
//             newArr1[newArr1.length] = nList[i]
            
//         }else{
//             newArr2.unshift(nList[i])
//         }
//     }
//     var newArr = newArr1.concat(newArr2)
    
//     return newArr
// }
// console.log(numberSort(arr))


// var arr = [1,4,5,23,2,17,24,897]
// var newArr1 = []
// var newArr2 = []
// function numberSort(nList){
//     var Arr = nList.splice(Math.ceil(nList.length / 2),nList.length - Math.ceil(nList.length / 2))
//     var newArr = Arr.sort(function(a,b){return b-a})
//     // console.log(newArr)
//     return nList.concat(newArr)
// }
// console.log(numberSort(arr))





// 5、输入两个弹出框，要求用户输入会员级别和金额，且根据级别做出判断：
//       	·如果是普通会员，提示用户您享受的折扣是9.5折，并弹出最终金额
//       	·如果是铁牌会员，提示用户您享受的折扣是9折并弹出最终金额
//       	·如果是铜牌会员，提示用户您享受的折扣是8.5折并弹出最终金额
//       	·如果是银牌会员，提示用户您享受的折扣是8折并弹出最终金额
//       	·如果是金牌会员，提示用户您享受的折扣是7.5折并弹出最终金额
//       	·如果是钻石会员，提示用户您享受的折扣是7折并弹出最终金额
//       	·如果以上都不是，提示用户您还没有注册，请先注册哦！
// （1）要求：
// ①　正确使用switch语句。
// ②　prompt()方法实现输入会员级别和金额，变量命名规范。


// var num1 = prompt("请输入会员级别")
// var num2 = prompt("请输入金额")

// switch(num1){
//     case "普通会员":
//         alert("您享受的折扣是9.5折")
//         alert(num2)
//         break;
//     case "铁牌会员":
//         alert("您享受的折扣是9折")
//         nem2.alert(num2)
//         break;
//     case "铜牌会员":
//         alert("您享受的折扣是8.5折")
//         nem2.alert(num2)
//         break;
//     case "银牌会员":
//         alert("您享受的折扣是8折")
//         nem2.alert(num2)
//         break;
//     case "金牌会员":
//         alert("您享受的折扣是7.5折")
//         nem2.alert(num2)
//         break;
//     case "钻石会员":
//         alert("您享受的折扣是7折")
//         nem2.alert(num2)
//         break;
//     default:
//         alert("您还没有注册，请先注册哦")
//         break;
// }

// document.write(num1 + "花费的金额是" + num2)







// 6.对四位数的会员卡(开头不为0)求和，会员卡四位数之和大于20小于30时将返利50元，大于30小于36时返利100元，否则不返利。根据用户输入的会员卡卡号(四位数)，判断是否返利。//4512
// （3）要求：
// ①　判断输入的值是否是一个纯数字
// ②　分别获取输入的值的四个位数上的值
// ③　对四个位数上的值求和，判断返利情况





// for(var i = 1 ; i <= 1000 ; i++){
//     if(i % 7 === 0 || i % 10 === 7 || parseInt(i / 10) === 7 || parseInt(i / 100 % 10) === 7 || parseInt(i % 100 / 10) === 7){
//         continue
//     }
//     console.log(i)
// }




// 14、封装一个函数，实现数组的push方法  （利用下标）
// 思路：	
// （1）将第一个实参赋值给变量arr(方便使用);
// 	（2）从第二个实参开始遍历；每遍历一个实参，将其赋给arr下标为arr.length       			的位置，实现在数组的末尾添加
// 		（3）循环结束将arr返回；

// var arr = [1,2,3,4,5,6]
// function fn(Arr){
//     for(var i = 1; i < arr.length; i++){
//         Arr.push(arr)
//         return Arr
        
//     }
//     console.log(Arr)
// }
// console.log(arr)







// 15、封装一个twoToOne(arr)函数，传入一个二维数组，然后将二维数组转为一维数组
// 思路：遍历到二维数组的每一个元素，添加到新数组中


// function twoToOne(arr){
//     return arr.reduce(function(prev,cur){return prev.concat(cur)})
// }
// console.log(twoToOne([[1,2,3,4,],[5,6,7,8]]))





// 16、封装一个函数，传入一个二维数组作为参数，对二维数组进行求和  
// 思路：获取到二维数组的每一个值，然后相加

// function fn(arr){
//     var str = 0
//     var newArr = arr.reduce(function(prev,cur){return prev.concat(cur)})
//     for(var i = 0; i < newArr.length; i++){
//         str += newArr[i]
//     }
//     return str
// }
// console.log(fn([[1,2,3,4],[5,6,7,8]]))





// 17、封装一个getMin(arr)函数，传入一个数组，找到这个数组中的最小值，和最小值的下标 ，例如：var	arr=[3,4,2,8,15,1,98]  最小值为:1，最小值的下标为5.

// function getMin(arr){
//     var str = arr[0]
//     for(var i = 0; i < arr.length; i++){
//         if(str > arr[i]){
//             str = arr[i]
//             var str1 = i
//         }
//     }
//     console.log(str1)
//     return str
// }
// console.log(getMin([3,4,2,8,15,1,98]))




// 1、使用arr.indexOf()方法去重;                                                                                                
// （1）var arr = [“a”,”b”,”c”,”a”,”b”,”c”,”d”];
// （2）封装函数 fun(arr);//[“a”,”b”,”c”,”d”];//调用后返回去重后的结果
// （3）用到的知识：函数封装，循环，判断(indexOf查找不要返回-1)把去重后的结果返回;   


// var arr = ['a','b','c','a','b','c','d'];
// function fn(Arr){
//     var newArr = []
//     for(var i = 0; i < Arr.length; i++){
//         if(newArr.indexOf(Arr[i]) === -1){
//             newArr.push(Arr[i])
//         }
//     }
//     return newArr
// }
// console.log(fn(arr))



// 2、生成num个不重复的数字:          
// （1）console.log(fun(0,10,3));//[5,7,9];
// （2）生成3个0---10 之间不同的随机数字 放在数组中  
// （3）思路要求：在明确知道循环次数的情况下，使用for循环，在不去明确知道循环次数的情况下，使用while循环
// （4）使用wihle循环 生成随机数，判断数组中是否有这个数字，如果没有，那么就添加进去：


// function Random(min,max){
//     return Math.floor(Math.random()*((max-min+1)+min))
// }
// function getArray(min,max,n){
//     var arr = []
//     while(arr.length < n){
//         var random = Random(min,max)
//         if(arr.indexOf(random) === -1){
//             arr.push(random)
//         }
//     }
//     return arr
// }
// console.log(getArray(1,20,3))






// 3、模拟indexOf方法：
// (1)思虑引导：循环比较：如果全等，那么返回下标i 否则返回-1;
// (2)要求：函数封装，传惨，循环判断，返回值;


// var Arr = [1,2,3,4,5,6,1,2,3]
// function fn(arr){
// var str = 0
// for(var i = 0 ; i < arr.length; i++){
//     if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
//         str = i
//         break;
//     }else{
//         str = -1
//     }
// }
// // console.log(str)
// return str
// }
// console.log(fn(Arr))



// 4、使用模拟的indexOf方法去重：
// (1)Var arr = [“a”,”a”,”b”,”b”,”c”,”d”,”e”,”d”,”e”,”a”]
// (2)Console.log(fun(arr));//打印出来函数的返回值
// (3)去重后的返回结果是：[“a”,”b”,”c”,”d”,”e”];
// (4)注意：在函数内调用另一个函数;









// 5、模拟lastIndexOf方法：
// (1)思路引导：倒叙循环，默认参数，全等比较，返回下标，查找不到则返回-1
// (2)要求：函数封装，传惨，循环，判断，返回值;
// 完成时间：第十一节课
// 6、模拟arr.join()方法
// 思路：循环数组中的每一项，字符串拼接成需要的字符串
// 提示：设置字符串的初始值
// 要求：函数封装，设置默认参数，循环，拼接，返回值;
// 7、模拟split()方法
// 思路：先把字符串拼接成自己想要的新字符串，在使用eval()转换
// 要求：函数封装，传惨。循环，拼接字符串。使用eval解析，返回值;




// 给你一个非空 整数数组 nums，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
// 示例1:
// 输入: nums = [2,2,1]
// 输出:1
// 示例2
// 输入: nums = [4,1,2,1,2]
// 输出:4
// 示例3
// 输入: nums = [1]
// 输出:1


// var Arr = [1,1,6,6,4,5,4]
// function fn(arr){
//     var newArr = 0
//     for(var i = 0; i < arr.length; i++){
//         if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
//             newArr = i
//             break;
//         }else{
//             newArr = -1
//         }
//     }
//     return newArr
// }
// console.log(fn(Arr))




// 给你一个字符串 s，请你反转字符串中 单词 的顺序单词 是由非空格字符组成的字符串。 s 中使用至少一个空格将字符串中的单词分隔开。 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串
// 注意:输入字符串 s 中可能会存在前导空格、尾随空格或者单词间的 多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格

// var Arr = ["  hello world  "]
// function fn(arr){
//     var newArr = []
//     // arr = arr.trim(arr)
//     newArr = arr.split(" ")

    

//     return newArr
// }
// console.log(fn(Arr))




// 示例 1:
// 输入:s ="the sky is blue'
// 输出:“blue is sky the"
// 示例2:
// 输入:s =“ hello world
// 输出:“world hello"
// 解释:反转后的字符串中不能存在前导空格和尾随空格
// 示例 3:
// 输入:s="agood
// example'
// 输出:“example good a"
// 解释:如果两个单词间有多余的空格，反转后的字符串需要将单词间
// 的空格减少到仅有一个。







// 给定一个整数数组 nums
// 将数组中的元素向右轮转 k 个位置，其
// 中 k 是非负数。



// function fn(nums,k){
//     var newArr = []
//     for(var i = 0; i < k; i++){
//         newArr.unshift(nums.pop())
//     }
//     return newArr.concat(nums)
// }
// console.log(fn([1,2,3,4,5,6,7],3))





// 示例 1:
// 输入: nums = [1,2,3,4,5,6,7]，k =3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1步:[7,1,2,3,4,5,6]
// 向右轮转 2 步:[6,7,1,2,3,4,5]
// 向右轮转 3步:[5,6,7,1,2,3,4]
// 示例 2:
// 输入: nums =[-1,-100,3,99]，k =2
// 输出:[3,99,-1,-100]
// 解释:
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步:[3,99,-1,-100]



// 给定两个字符串 s和 t，编写一个函数来判断 t 是否是 s的字母
// 异位词。
// 注意:若s和t中每个字符出现的次数都相同，则称 s和互为
// 字母异位词。


// function fn(s,t){
//     s = s.split('').sort().join()
//     t = t.split('').sort() .join()
//     return s == t ? true : false
   
// }
// console.log(fn('ceil','ecil'))


// 示例 1:
// 输入:s=“anagram"，t ="nagaram'
// 输出: true
// 示例2:
// 输入:S =“rat"，t =“car"
// 输出: false



// 给定一个包含 [0，n] 中 n 个数的数组 nums
// 找出 [0，n] 这个范围内没有出现在数组中的那个数。

// function fn(arr){
//     // arr.sort(function(a,b){return a-b})
//     // var newArr = []
//     for(var i = 0; i <= arr.length; i++){
//         console.log(arr.length)
//         if(arr.indexOf(i)===-1){
//             return i
//         }
//     }
// }
// console.log(fn([1,2,5,4,0]))




// 示例 1:
// 输入:nums =[3,0,1]
// 输出:2
// 解释:n =3，因为有 3个数字，所以所有的数字都在范围 [03
// ]内。2 是丢失的数字，因为它没有出现在 nums 中。
// 示例2:
// 输入:nums = [0,1]
// 输出:2
// 解释: n =2，因为有 2个数字，所以所有的数字都在范围 [02
// ]内。2 是丢失的数字，因为它没有出现在 nums 中。
// 示例 3:
// 输入: nums = [9,6,4,2,3,5,7,0,1]
// 输出:8
// 解释: n =9，因为有9个数字，所以所有的数字都在范围 [09
// ]内。8 是丢失的数字，因为它没有出现在 nums 中。
// 示例4:
// 输入:nums =[0]
// 输出:1
// 解释: n 1，因为有1个数字，所以所有的数字都在范围 [01
// ]内。1 是丢失的数字，因为它没有出现在 nums 中。




// 3.单词拆分【中等】
        // 给你一个字符串str和一个字符串列表wordDict作为字典。如果可以利用字典中出现的一个或多个单词拼接除str则返回true。
        // 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
        // 输入：str = “leetcode” , wordDict  = [“leet”,”code”]  
        // 输出：true

        // 输入：str=”applepenapple”,woldDict = [“apple”,”pen”]
        // 输出：true

        // 输入：str = “catsandog”,wordDict = [“cats”,”dog”,”sand”,”and”,”cat”]


// 思路： 


// function fn(str,wordDict){
//     str = str.split("")
//     for(var i = 0 ; i < wordDict.length ; i++){
//         var bol = ""
//         str.push(wordDict[i])
//         }
//         str = str.join("").split("")
//         for(var k = 0; k < str.length; k++){
//             bol = wordDict.join("").indexOf(str[k]) === -1 ? false : true
//         }
//         // console.log(bol)
//     return bol
// }
// console.log(fn("abc",['abc','def','g']))
// console.log(fn("leetcode", ['leet', 'code']))
// console.log(fn("catsandog", ['cats', 'dog','sand','and','cat']))




// 2、给定两个字符串s和p，找到s中所有p的异位词的子串，返回这些子串的起始索引。
        // 异位词:指由相同字母重新排列形成的字符串（包括相同的字符串）

        // 输入:s = “cbaebabacd” , p = “abc”;
        // 输出: [0 , 6]
        // 解释: 起始索引等于0的子串是"cba", 它是"abc" 的异位词。
        // 起始索引等于6的子串是"bac",它是"abc"的异位词。

        //         输入：s = “abab”   ， p = “ab”
        //         输出：[0 ， 1  ， 2]
        //         解释：  起始索引等于0的子串是"ab", 它是"ab"的异位词。
        // 起始索引等于1的子串是"ba，它是"ab"的异位词。
        // 起始索引等于2的子串是"ab", 它是"ab"的异位词。


// function fn(s,p){
//     var arr = []
//     var str = []
//     s = s.split("")
//     console.log(s)
//     p = p.split("")
//     // console.log(p.length)
//     for(var i = 0; i < s.length; i++){
//         arr.push(s.slice(i,p.length + i))
//         arr[i] = arr[i].sort().join("")
//         console.log(arr[i])
//         if(arr[i] === p.join("")){
//             str.push(i)
//         }
//     }
//     return str
// }
// console.log(fn("cbaebabacd","abc"))




// 1、编写一个函数，他接收一个多维数组arr和被扁平化的深度n，返回该数组被扁平化的结果
        // 扁平化是对数组的一种操作，扁平化是将多维数组按照指定的深度进行展开


// var Arr = [[1,2,3],[4,5[6,7['hello'],8],9],10]
// function fn(arr,n){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
        
//     }
//     console.log(arr)
// }
// console.log(fn(Arr,2))

// // 递归
// function flatArr(arr,deep){
//         // 判断deep是否还要继续展开
//         if(deep<=0) return arr;
//         // 按照用户指定的深度 deep 进行展开
//         // 借助reduce方法
//         return arr.reduce(function(prev,next){
//                 // 判断每一项 next 是不是数组 使用 isArray
//                 if(Array.isArray(next)){
//                         prev.push(...flatArr(next,deep - 1))
//                 }else{
//                         // 已经是确切数值
//                         prev.push(next)
//                 }
//                 return prev
//         },[])
// }
// console.log(flatArr([[1,2,3],[4,5,6],[7,8,[9,['hello'],10],11],[12]] , 2))

        // 输入; arr = [[1,2,3],[4,5,6],[7,8,[9,['hello'],10],11],[12]]
        // //     n = 0;
        // 输出; [[1,2,3],[4,5,6],[7,8,[9,['hello'],10],11],[12]]

        // 输入：arr = [[1,2,3],[4,5,6],[7,8,[9,['hello'],10],11],[12]]
        //     n = 1;
        // 输出:[1,2,3,4,5,6,7,8,[9,['hello'],10],11,12]

        // 输入：arr = [[1,2,3],[4,5,6],[7,8,[9,['hello'],10],11],[12]]
        //     n = 2;
        // 输出:[1,2,3,4,5,6,7,8,9,['hello'],10,11,12]





        // var arry_1=['a','c','m'];console.log(arry_1.join())




// var arr = 'get-element-by-id'
// arr = arr.split('-').join("")
// arr = arr.split("")
// arr.splice(8,6,'N','T','B','Y','I','D')
// arr = arr.join("")
// console.log(arr)


// // 创建渲染对象
// var data = [
//     {
//         user : "张三",
//         age : "18",
//         sex : "男",
//         address : "北京"
//     },
//     {
//         user : "小明",
//         age : "16",
//         sex : "男",
//         address : "上海"
//     },
//     {
//         user : "小李",
//         age : "20",
//         sex : "女",
//         address : "广州"
//     },
//     {
//         user : "小宋",
//         age : "19",
//         sex : "女",
//         address : "深圳"
//     },
//     {
//         user : "小王",

//         age : "23",
//         sex : "男",
//         address : "厦门"
//     }
// ]


// // 获取元素
// var users = document.querySelector(".users"),
//     pass = document.querySelector(".pass"),
//     names = document.querySelector(".names"),
//     address = document.querySelector(".address"),
//     age = document.querySelector(".age"),
//     sex = document.querySelector(".sex")


//     // 对所有成员进行map渲染
// users.innerHTML = data.map(function(userObj){
//     return "<li><span>" + userObj.user + "</span><span>" + userObj.age + "</span><span>" + userObj.sex + "</span><span>" + userObj.address + "</span></li>"
// }).join("")

// // 对所有未成年进行筛选并存入
// var passData = data.filter(function(userObj){
//     return userObj.age < 18
// })
// // 对未成年成员进行map渲染
// pass.innerHTML = passData.map(function(userObj){
//     return "<li><span>" + userObj.user + "</span><span>" + userObj.age + "</span><span>" + userObj.sex + "</span><span>" + userObj.address + "</span></li>"
// }).join("")
// // 对第一个成年人信息进行筛选并存入
// var firstData = data.find(function(obj){
//     return obj.age >= 18
// })
// // 调取第一个人员信息的详细数据进行渲染
// names.innerHTML = firstData.user;
// age.innerHTML = firstData.age ; 
// address.innerHTML = firstData.address













// 11、封装一个函数，传入一个数组作为参数，将数组一分为二，前面的升序排列，后面的降序排列。
// 例如：
// console.log(arrSort([1,6,5,8,20,13])) // [1,5,6,20,13,8]
// console.log(arrSort([1,6,5,20,13])) // [1,6,20,13,6]
// 思路：
// (1)判断数组长度是否为偶数；
// (2)若长度为偶数将数组一分为二，平均分成两个小数组  slice()
// (3)排序 ,前半部分升序，后半部分降序；
// (4)前后部分合并，返回；
// (5)若长度为奇数，先将最大数从数组中截取并删除掉，删除最大值 splice() ；
// (6)剩下的偶数长度的数组，重复1- 4步骤 ；
// (7)合并数组并返回；


// var Arr = [1,5,6,20,13,8]
// function fn(arr){
//     var newArr = []
//     arr.sort(function(a,b){return a-b})
//     newArr = arr.splice(Math.ceil(arr.length / 2),arr.length - Math.ceil(arr.length / 2))
//     newArr.sort(function(a,b){return b - a})
//     return arr.concat(newArr)
// }
// console.log(fn(Arr))



// function fn(arr,Arr){
//         for(var i = 0; i < Arr.length; i++){
                
//                 arr.splice((i+1)*3-1,0,Arr[i])
//                 // console.log(arr)
                
//         }
//         return arr
// }
// console.log(fn(['A1','A2','B1','B2','C1','C2'],['A','B','C']))