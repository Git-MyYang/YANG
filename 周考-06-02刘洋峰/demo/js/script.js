// 初始化
let page = 1 ;
let pageSize = 6 ;
let total = 0;
// data = []

// 获取数据
function getData(){
    return new Promise((reslove , reject) => {
        const xhr = new XMLHttpRequest();
        // 请求接口  若接口没有写协议 域名 端口时,会自动把当前页的协议域名端口自动给补齐
        xhr.open("GET" , `/api/list`)
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200){
                var data = JSON.parse( xhr.responseText )
                reslove(data)
            }
        }
        xhr.send()
    })
}
async function init(){
    // 初始化 等待数据返回  才可以渲染
    const res = await getData();
    console.log(res)
    // 渲染table 内容
    render(res)

}
init()
    // 主页数据渲染
function render(data){
    console.log(data)
    $(".main").innerHTML = data.values.map((item,index,i)=>{
       console.log(item.url[index])
        return `
        <dl data_index=${index + 1}>
            <dt>
                <img src="${decodeURIComponent(item.url[index])}" alt="">
            </dt>
            <dd>
                <p>${item.name[index]}</p>
                <div class="dd1">
                    <div class="monneyed">$${item.Monneyed}</div>
                    <div class="monney"><span>$${item.Monney}</span><img src="./img/加号.png" alt="" class="goCar"></div>
                </div>
            </dd>
        </dl>`
    }).join("")


    // 购物车 渲染
    document.addEventListener("click",function(e){
        let target = e.target || window.event.srcElement;
        if(target.className === "goCar"){
            $(".box").innerHTML += data.values.map((item,index,i)=>{
                // console.log(item.url[index])
                console.log(target.parentNode.parentNode.parentNode.parentNode.getAttribute("data_index"),item.id+"")
                let targetIndex = target.parentNode.parentNode.parentNode.parentNode.getAttribute("data_index")
                if(targetIndex == item.id+""){
                    return `
                    <li>
                        <input type="checkbox">
                        <div>
                            <p>${item.name[index]}</p>
                            <span>$ ${item.Monney}</span>
                        </div>
                        <div class="fr"><img src="./img/减号-b.png" alt="" class="prve"><span>1</span><img src="./img/加号.png" alt="" class="next"></div>
                    </li>
                `
                }
                 
             }).join("")
        }
    
    })
}

// top顶部切换
$(".nav1").addEventListener("click",function(){
    $(".nav2").style.color ="#000"
    $(".nav2").style.borderBottom = "#000"
    $(".main").style.display ="flex"
    $(".nav1").style.color ="#FB763A"
    $(".nav1").style.borderBottom = "#FB763A .2rem solid"
})
$(".nav2").addEventListener("click",function(){
    $(".nav1").style.color ="#000"
    $(".nav1").style.borderBottom = "#000"
    $(".nav2").style.color ="#FB763A"
    $(".nav2").style.borderBottom = "#FB763A .2rem solid"
    $(".main").style.display ="none"

})

// top底部切换
document.addEventListener("click",function(e){
    let target = e.target || window.event.srcElement;
    if(target.className === "end1"){
        $(".activeEnd") && $(".activeEnd").classList.remove("activeEnd")
        $(".end1").classList.add('activeEnd')
        $(".main").style.display ="flex"
        $("header").style.display ="flex"
        $(".car").style.display ="none"

    }
    if(target.className === "end2"){
        $(".activeEnd") && $(".activeEnd").classList.remove("activeEnd")
        $(".end2").classList.add('activeEnd')
        $(".main").style.display ="none"
        $("header").style.display ="none"
        $(".car").style.display ="none"

    }
    if(target.className === "end3"){
        $(".activeEnd") && $(".activeEnd").classList.remove("activeEnd")
        $(".end3").classList.add('activeEnd')
        $(".main").style.display ="none"
        $("header").style.display ="none"
        $(".car").style.display ="none"

    }
    if(target.className === "end4"){
        $(".activeEnd") && $(".activeEnd").classList.remove("activeEnd")
        $(".end4").classList.add('activeEnd')
        $(".main").style.display ="none"
        $("header").style.display ="none"
        $(".car").style.display ="block"
        xuan()

    }
    if(target.className === "end5"){
        $(".activeEnd") && $(".activeEnd").classList.remove("activeEnd")
        $(".end5").classList.add('activeEnd')
        $(".main").style.display ="none"
        $("header").style.display ="none"
        $(".car").style.display ="none"


    }
})


// 全选
function xuan(){
    let inp = document.querySelector(".inp")
    let box = document.querySelectorAll(".box input")
    console.log(box,inp)
    inp.addEventListener("click",function(){
        for(var i=0;i<box.length;i++){
            console.log(box)
            box[i].checked = inp.checked
        }
    })
    for(var i=0;i<box.length;i++){
        box[i].onclick = fn
    }
    function fn(){
        let count = 0
        for(var i=0;i<box.length;i++){
            if(box[i].checked){
                count++
            }
        }
        if(count === box.length){
            inp.checked = true
        }else{
            inp.checked = false
        }
    }
}
xuan()

// 加减 购物车商品
document.addEventListener("click",function(e){
    let target = e.target || window.event.srcElement;
    if(target.className === "prve"){
        let count = --target.nextElementSibling.innerHTML
           
       
        console.log(count)
        if(count <= 0){
           target.parentNode.parentNode.remove()
        }
    }
    if(target.className === "next"){
        ++target.previousElementSibling.innerHTML
    }
})

// 合计
document.addEventListener("click",function(e){
    let target = e.target || window.event.srcElement;

    if(target.nodeName === "INPUT" && target.checked === true){
        $(".col span").innerHTML = ($(".col span").innerHTML*1 + (target.nextElementSibling.lastElementChild.innerHTML.slice(1,7))*1).toFixed(2)
        
    }else if(target.nodeName === "INPUT" && target.checked === false){
        $(".col span").innerHTML = ($(".col span").innerHTML*1 - (target.nextElementSibling.lastElementChild.innerHTML.slice(1,7))*1).toFixed(2)
    }
    // if(target.className === "inp" && target.checked === true){
    //     $(".col span").innerHTML = $(".col span").innerHTML*1 + gets(".box input").nextElementSibling.lastElementChild.innerHTML.slice(1,7)*1
    // }
})




function $(el , parent = document){
    return parent.querySelector(el)
}
// 多个元素
function gets(el , parent = document){
    return [...parent.querySelectorAll(el)]
}