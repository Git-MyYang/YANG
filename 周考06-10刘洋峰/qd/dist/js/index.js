
async function init(a,b){
    const res = await axios.get('/info' )
    console.log(res)
    if(res.data.code === 0){
        $(".mainInfo").innerHTML += res.data.data.slice(a,b).map((item,index) => {
            return `
            <ul dataIndex="${index}">
                <li><input type="text"value="${item.id}"></li>
                <li><input type="text"value="${item.name}"></li>
                <li><input type="text"value="${item.sex}"></li>
                <li><input type="text"value="${zero(item.old)}"></li>
                <li>${item.home}</li>
                <li>${zero(item.time)}</li>
                <li class="redact">编辑</li>
                <li class="redacted" style="display: none;"><span>保存</span><span>删除</span><span class = "off">取消</span></li>
            </ul>
                `
        }).join("")
           
        $(".infoLook").innerHTML = res.data.page
        $(".infos").innerHTML = res.data.title

    }
}
init(0,5)


document.addEventListener("click",(e)=>{
    var target = e.target || window.event.srcElement;
    // var i = 0
    
    if(target.className === "zk"){
        $("main").style = "display:block"
        $("footer").style = "display:flex"
        $(".zk").style = "display:none"
        $(".sq").style = "display:flex"
    }
    if(target.className === "sq"){
        $("main").style = "display:none"
        $("footer").style = "display:none"
        $(".zk").style = "display:flex"
        $(".sq").style = "display:none"
    }
    if(target.className === "prve"){
        $(".mainInfo").innerHTML = ""
        $(".active") && $(".active").classList.remove("active")
        $(".end li").classList.add("active")
        init(0,5)
    }
    if(target.className === "next"){
        $(".mainInfo").innerHTML = ""
        $(".active") && $(".active").classList.remove("active")
        $(".end li").nextElementSibling.classList.add("active")
        init(5,10)
    }
    if(target.className === "end1"){
        $(".mainInfo").innerHTML = ""
        $(".active") && $(".active").classList.remove("active")
        target.classList.add("active")
        init(0,5)
    }
    if(target.className === "end2"){
        $(".mainInfo").innerHTML = ""
        $(".active") && $(".active").classList.remove("active")
        target.classList.add("active")
        init(5,10)
    }
    if(target.className === "redact"){
        target.style = "display:none"
        target.nextElementSibling.style = "display:flex"
        target.previousElementSibling.previousElementSibling.previousElementSibling.style = "border:1px solid #000"
        target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style = "border:1px solid #000"
        target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style = "border:1px solid #000"
        target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style = "border:1px solid #000"
    }
    if(target.className === "off"){
        target.parentNode.style = "display:none"
        target.parentNode.previousElementSibling.style = "display:flex"
        target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style = "border:0"
        target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style = "border:0"
        target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style = "border:0"
        target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style = "border:0"
        // rander()
    }
    if(target.className === "czBtn"){
        $(".mainInfo").innerHTML = ""
        $(".navfl input").value = ""
        init(0,5)
    }
    // if(target.className === "cxBtn"){

    // } 

    if(target.className === "infoAdd"){
        $(".flo").style = "display:flex"
    }
    if(target.className === "left" || target.className === "ch" || target.className === "fr1Btn"){
        $(".flo").style = "display:none"

    }
    if(target.className === "fr2Btn"){
       $all(".fr2 input").map((item,index) =>{
            // const input = $(".fr2 input").value.trim()
            if(!item.value.trim()){
                alert(`第${index+1}的输入框不能为空`) 
            }
       })
       $all(".fr2 input").map((item,index) =>{
            if(item.value.trim()){
                $(".flo").style = "display:none"
                $(".fr2 input").value = ""
            }else{
                $(".flo").style = "display:flex"
                // $(".fr2 input").value = ""
            }
        })
    }

})

async function rander(){
    const res = await axios.get('/del')
    
    console.log(res)
    document.querySelector("click",(e)=>{
    var target = e.target || window.event.srcElement;
        
        if(target.className === "off"){
            target.parentNode.parentNode.remove()
        }
    })
}


// async function addRander(){
//     const res = await axios.get('/add')
//     console.log(res)

// }






function zero(n){
    return n < 10 ? '0' + n : n
}
function $(el){return document.querySelector(el)}

function $all(el){return [...document.querySelectorAll(el)]}