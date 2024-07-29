// 单个元素
function $(el , parent = document){
    return parent.querySelector(el)
}
// 多个元素
function gets(el , parent = document){
    return [...parent.querySelectorAll(el)]
}

let activeIndex = 0,
    arr = [];
// 获取元素   初始化渲染
function getData(){
    activeIndex++
    const xhr = new XMLHttpRequest()
    xhr.open('get' , 'https://zyxcl.xyz/exam_api/food')
    // console.log(111)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            data = JSON.parse(xhr.responseText)
            console.log(data.value)

            // 渲染左边栏
            $(".lefts ul").innerHTML = data.value.map((item,index) => {
                return `
                <li class="lis${index + 1} ">${item.name}</li>
                `
            }).join("")

            gets(".lefts ul li")[0].classList.add("active")
            
            // console.log(lefts)

            // 渲染右边栏
            // console.log(data.value[1].list)
            if(activeIndex <= data.value.length){
                $(".left1").innerHTML = data.value[0].list.map((obj) => {
                    return`
                    <dl>
                        <dt class="l1"><img class="l2" src="${obj.imgUrl}" alt=""></dt>
                        <dd  class="l3">${obj.name}</dd>
                    </dl>
                    `
                }).join("")

            }

            if(activeIndex <= data.value.length){
                console.log(data.value[activeIndex].list)
                $(".left2").innerHTML = data.value[1].list.map((obj) => {
                    return`
                    <dl>
                        <dt><img src="${obj.imgUrl}" alt=""></dt>
                        <dd>${obj.name}</dd>
                    </dl>
                    `
                }).join("")
            }

            if(activeIndex <= data.value.length){

                $(".left3").innerHTML = data.value[2].list.map((obj) => {
                    return`
                    <dl>
                        <dt><img src="${obj.imgUrl}" alt=""></dt>
                        <dd>${obj.name}</dd>
                    </dl>
                    `
                }).join("")
            }
       
                // 渲染点击添加
            document.addEventListener("click" , (e) => {
                var target = e.target || window.event.srcElement;
            

                    
                if(target.nodeName === "SPAN"){

                    console.log(target.parentNode)
                    target.parentNode.remove()

                    
                //     if(target.innerHTML === $(".Right dl").lastElementChild.innerHTML){
                //         console.log(target.innerHTML)
                //     }
                    // $(".list").innerHTML.classList.remove("border")
                    
                }


                if(target.nodeName === "LI" && target.parentNode.className === "gl"){
                    $(".active").classList.remove("active")
                    target.classList.add("active")
                }
                if(target.nodeName === "DL" && target.parentNode.className === "left1"){
                    // console.log(target)
                    
                    

                    target.className === "border" ?  arr.splice(arr.indexOf(target.lastElementChild.innerHTML),1) :arr.push(target.lastElementChild.innerHTML)  ;
                    target.classList.toggle("border")
                    // liText.push(target.className === "border" ? `<li>${target.lastElementChild.innerHTML}<span>&#10007</span></li>` : "")

                    $(".list").innerHTML = arr.map((food) => {
                        return `
                            <li>${food}<span>&#10007</span></li>
                        `
                    }).join("")

                    if($(".list").innerHTML === ""){
                        $("footer").style = "display: none"

                    }else{
                        $("footer").style = "display: block"

                    }
                }

                if(target.nodeName === "DL" && target.parentNode.className === "left2"){
                    console.log(target)
                    // $(".lis1").classList.remove("active")
                    // $(".lis2").classList.add("active")

                    target.className === "border" ?  arr.splice(arr.indexOf(target.lastElementChild.innerHTML),1) :arr.push(target.lastElementChild.innerHTML)  ;
                    target.classList.toggle("border")
                    // liText.push(target.className === "border" ? `<li>${target.lastElementChild.innerHTML}<span>&#10007</span></li>` : "")

                    $(".list").innerHTML = arr.map((food) => {
                        return `
                            <li>${food}<span>&#10007</span></li>
                        `
                    }).join("")

                    
                    if($(".list").innerHTML === ""){
                        $("footer").style = "display: none"

                    }else{
                        $("footer").style = "display: block"

                    }
                }


                if(target.nodeName === "DL" && target.parentNode.className === "left3"){
                    console.log(target)
                    // $(".lis1").classList.remove("active")
                    // $(".lis3").classList.add("active")

                    target.className === "border" ?  arr.splice(arr.indexOf(target.lastElementChild.innerHTML),1) :arr.push(target.lastElementChild.innerHTML)  ;
                    target.classList.toggle("border")
                    // liText.push(target.className === "border" ? `<li>${target.lastElementChild.innerHTML}<span>&#10007</span></li>` : "")

                    $(".list").innerHTML = arr.map((food) => {
                        return `
                            <li>${food}<span>&#10007</span></li>
                        `
                    }).join("")

                    if($(".list").innerHTML === ""){
                        $("footer").style = "display: none"

                    }else{
                        $("footer").style = "display: block"

                    }


                }
                
                $("i" , $(".endName")).innerHTML = `(${arr.length})`
            })


        }
    }
    xhr.send()
}
getData()




// 绑定TOP栏切换
document.addEventListener("mouseover" , (e) => {
    var target = e.target || window.event.srcElement;
    if(target.className === "lis1"){
        $(".left1").style = "display: flex"
        $(".left2").style = "display: none"
        $(".left3").style = "display: none"
        // $(".left1").style.background = '#fff'
    }else if(target.className === "lis2"){
        $(".left1").style = "display: none"
        $(".left2").style = "display: flex"
        $(".left3").style = "display: none"

    }else if(target.className === "lis3"){
        $(".left1").style = "display: none"
        $(".left2").style = "display: none"
        $(".left3").style = "display: flex"
    }
    
        
})

// 点击 去测试 跳转页面
$(".endName button").addEventListener("click" , (e) => {
    $(".BOX").style = "display: none"
    $(".BOX2").style = "display: flex"
    $(".BOX5").style = "display: block"
    
})
// top切换
document.addEventListener("click" , (e) => {
    var target = e.target || window.event.srcElement;
    if(target.className === "nav1"){
        $(".BOX3").style = "display: none"
        $(".BOX4").style = "display: none"
        $(".BOX5").style = "display: block"

    }
    if(target.className === "nav2"){
        $(".BOX3").style = "display: block"
        $(".BOX4").style = "display: none"
        $(".BOX5").style = "display: none"

    }
    if(target.className === "nav3"){
        $(".BOX3").style = "display: none"
        $(".BOX4").style = "display: block"
        $(".BOX5").style = "display: none"

    }
    if(target.className === "headName"){
        $(".BOX").style = "display: flex"
        $(".BOX2").style = "display: none"
        $(".BOX3").style = "display: none"
        $(".BOX4").style = "display: none"
        $(".BOX5").style = "display: none"
    }
    
    
})


