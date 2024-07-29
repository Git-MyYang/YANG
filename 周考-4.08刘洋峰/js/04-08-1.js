// 第一题：查找字符串中出现最多的字符和出现的次数（20分）

// var Arr = 'aassswsawdfgmmrunnb' 




// var arr = []
// function getMax (str) {
//     for(var i = 0 ; i < str[0].length ; i++){
        
//         if(arr.indexOf(str[0][i]) == arr.lastIndexOf(str[0][i])){

//         }
        
//     }
//     console.log(arr)
    
// }
// console.log(getMax (Arr))






// 第二题：按数字分割数组（20分）
// 描述：编写一个函数 chunkArray，该函数接收一个数组和一个整数 size 作为参数。函数应该将数组分割成多个子数组，每个子数组的最大长度为 size。
// var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(chunkArray(data, 4));
// 应输出：[[1, 2, 3, 4], [5, 6, 7, 8], [9]]

// // 声明数组
// var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var newArr = []
// var sty = 0
// // 封装函数
// function chunkArray(arr,size){
//     // 循环遍历拿到数组
//     for(var i = 0 ; i < arr.length / size; i++){
//         // 判断二维数组长度，通过截取拿到新的二维数组
//         if((i) % size === 1){
//             var newArr1 = arr.splice(arr[i-2],4)
//             newArr.push(newArr1)
//         }

//     }
//     for(var i = 0 ; i < arr.length / size; i++){
//         // 判断二维数组长度，通过截取拿到新的二维数组
//         if((i) % size === 1){
//             var newArr2 = arr.splice(arr[i-2],4)
//             newArr.push(newArr2)
//             arr = newArr.concat(arr)
//         }
//     }
//     console.log(arr)
//     return arr
// }
// console.log(chunkArray(data,4))






// 第三题：按条件分割数组（20分）
// 编写一个函数 splitArrayByCondition，该函数接收一个数组和一个回调函数作为参数。该回调函数将对数组中的每个元素执行测试，根据测试结果（true或false），将数组分割成两个新的数组。
// var nums = [1, 2, 3, 4, 5, 6];
// function isEven(num) {
// return num % 2 === 0
// };
// console.log(splitArrayByCondition(nums, isEven));
// 应输出：[[2, 4, 6], [1, 3, 5]]，第一个数组包含所有偶数，第二个包含所有奇数

// var nums = [1, 2, 3, 4, 5, 6];
// function isEven(num) {
//     return num % 2 === 0
// }

// function splitArrayByCondition(arr,Arr){
//     // 创建新数组
//     var newArr = []
//     var newArr1 = []  
//     var newArr2 = [] 
//     for (var i = 0; i < arr.length; i++) {
//         // 做判断,把数组分成两个新数组
//         Arr(arr[i]) ? newArr1.push(arr[i]) : newArr2.push(arr[i])
//     }
//     //将新数组后添到数组中
//     newArr.push(newArr1,newArr2)
//     return newArr
// }
// console.log(splitArrayByCondition(nums, isEven));



// 第四题：查找字符串中的首个唯一字符（20分）
// 编写一个函数 firstUniqueChar，该函数接收一个字符串并返回该字符串中第一个不重复的字符的索引，计算时忽略字母大小写。如果不存在这样的字符，则返回 -1。
// function firstUniqueChar(str) {
// }
// console.log(firstUniqueChar("leetcode"));
// // 应输出：0
// console.log(firstUniqueChar("loveleetcode"));
// // 应输出：2
// console.log(firstUniqueChar("aabb"));
// // 应输出：-1






// // 封装函数
// function firstUniqueChar(str){
//     // 声明数组
//     var Str = 0
//     // 循环遍历数组
//     for(var i = 0; i < str.length ; i++){
//             // 判断不重复字符的下标
//             if (str.split('').indexOf(str[i]) === str.split('').lastIndexOf(str[i])){
//             Str = i
//             break;
//             }else{
//                 Str = -1
//             }
//         }
//         return Str
//     }

// console.log(firstUniqueChar("leetcode"));
// // 应输出：0
// console.log(firstUniqueChar("loveleetcode"));
// // 应输出：2
// console.log(firstUniqueChar("aabb"));
// // 应输出：-1



// 第五题：格式化数据（20分）
// 编写一个函数 merge，该函数接收两个数组和一个格式选项对象作为参数。第一个数组 keys 包含一组字符串，代表数据字段的键；第二个数组 values 包含与 keys 数组相对应的一组数据，代表各个键的值。格式选项对象 options 包含以下属性：
// delimiter: 字符串，用作键值对之间的分隔符（默认为逗号 ,）。
// equalSign: 字符串，用作键和值之间的赋值符号（默认为冒号 :）。
// sort: 布尔值，指示是否按键名对键值对进行排序（默认为 false）。
// // 示例一：
// const keys = ["name", "age", "occupation"];
// const values = ["Alice", 30, "Engineer"];
// const options = { delimiter: "; ", equalSign: "=", sort: false };
// console.log(merge(keys, values, options));
// // 应输出："name=Alice; age=30; occupation=Engineer"

// // 示例二：
// const keys = ["name", "age", "occupation"];
// const values = ["Alice", 30, "Engineer"];
// const options = { delimiter: "; ", equalSign: "=", sort: true };
// console.log(merge(keys, values, options));
// // 应输出 "age=30; name=Alice; occupation=Engineer"

// // 示例三：
// const keys = ["name", "age", "occupation"];
// const values = ["Alice", 30, "Engineer"];
// const options = {};
// console.log(merge(keys, values, options));
// // 应输出: "name: Alice, age: 30, occupation: Engineer"

// // 示例四：
// const keys = ["name", "age", "occupation"];
// const values = ["Alice", 30, "Engineer"];
// const options = { delimiter: " | ", equalSign: "->", sort: false };
// console.log(merge(keys, values, options));
// // 应输出 "name->Alice | age->30 | occupation->Engineer"




// var keys = ["name", "age", "occupation"];
// var values = ["Alice", 30, "Engineer"];
// var options = {};

// // 创建函数
// function merge(keys,values,options){
//     // 声明一个新数组
//     var arr = []
//     // 循环遍历拿到下标
// for(var  i = 0 ; i < keys.length ; i++){
//     // 判断是否需要加符号
//     options.equalSign ? arr.push(keys[i] + options.equalSign + values[i]) :arr.push(keys[i] + ":" + values[i])
// }
//  // 判断是否需要排序
//  options.sort ? arr.sort():arr

//  // 判断是否需要分隔符
//  return options.delimiter ? arr.join(options.delimiter) : arr.join()
// }
// console.log(merge(keys, values, options));


// // 应输出: "name: Alice, age: 30, occupation: Engineer"


      






// var arr = '锄-禾-日-当-午,汗-滴-禾-下-土'
// while(arr.indexOf('-') !== -1){
//     arr = arr.replace("-","")
// }
// console.log(arr)