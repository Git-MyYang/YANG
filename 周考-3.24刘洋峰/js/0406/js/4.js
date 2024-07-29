// 知识点: 获取元素 -> id获取
                // document.getElementById("id名");     返回值:  元素对象  本身

                // ->  标签名称获取
                // document.getElementsByTagName("标签名")  返回值: 类数组【伪数组】集合   
                        // 可以[n]访问  --> 下标/索引   从0开始

//  给元素获取 / 设置内容   元素.innerHTML = 值;
//  给元素获取 / 设置样式   元素.style.属性 = 值;
//  给元素获取 / 设置属性   元素.属性 = 值;   注意 class特殊 需写成className

// 2、声明一个title变量，并赋值为“<h1>I love jsvascript</h1>”,
// 再声明一个name变量，然后赋值为“<p>我是1712B班XXX</p>”;
var title = "<h1>I hate jsvascript</h1>" , 
    name = "<p>我是202402班张三</p>";

// 3、声明一个oDiv变量，存储获取页面中id为box的div标签。
var oDiv = document.getElementById("box");
console.log(oDiv)
// （1）把title和name变量的内容放到div标签中（体现标签样式）
oDiv.innerHTML = title + name;
// （2）设置h1标签字体大小为34px,字体颜色为“green”;
var h1 = document.getElementsByTagName("h1");
console.log(h1)
h1[0].style.fontSize = "34px";
h1[0].style.color = "purple"
// （3）设置p标签的字体大小为28px，背景颜色为”red”
var p = document.getElementsByTagName("p");
p[0].style.backgroundColor = "red"
// 4、给div标签添加一个“wrap”的class名，并将div的id名由“box”修改为“content”
oDiv.className = "wrap";
oDiv.id = "content"
// 5、声明一个变量msg；不赋值，把这个变量打印在控制台;
// (考点:声明一个变量不赋值时，默认值是？);