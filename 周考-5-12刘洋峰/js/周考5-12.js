var data = [
    {
        userName: "刘晓晓",
        userCode: "7652101",
        userPhone: "18086667777",
        userWorks: "------",
        userGrade: "一级",
        userTyPE: "高级",
        BJ: "编辑",
        SC: "删除"
    },
   {
        userName: "李磊",
        userCode: "7652102",
        userPhone: "18086668888",
        userWorks: "------",
        userGrade: "三级",
        userTyPE: "专家",
        BJ: "编辑",
        SC: "删除" 
    },
    {
        userName: "刘晓晓",
        userCode: "7652101",
        userPhone: "18086667777",
        userWorks: "------",
        userGrade: "一级",
        userTyPE: "高级",
        BJ: "编辑",
        SC: "删除"
    }
]

var obj = {
    
}




// 渲染函数
function DataPlay(){
    $(".infoList").innerHTML = data.map(function(item , i){
        return `
        <ul class="infoList">
            <li>${item.userName}</li>
            <li>${item.userCode}</li>
            <li>${item.userPhone}</li>
            <li>${item.userWorks}</li>
            <li>${item.userGrade}</li>
            <li>${item.userTyPE}</li>
            <li class="playLi"><a class="bjBtn">${item.BJ}</a><a class="sc">${item.SC}</a></li>
        </ul>`
    }).join("")
}
DataPlay()

// $(".inqBtn").addEventListener("click",function(e){
//     var e = e || window.event;
//     var target = e.target || e.srcElement;
//     $(".inpName").value === "" ? alert("搜索内容不能为空") : $(".inpName").value === $(".infoList").userName.innerHTML ? true : $(".inqBtn").innerHTML = ""
// })

// 重置按钮 赋值为空
$(".resBtn").addEventListener("click",function(){
    $(".inpName").value = ""
})
// 点击添加  跳出弹框
$(".addBtn").addEventListener("click",function(){
    $(".BOX2").style = "display: block"
    $(".mengceng").style = "display: block"

})
// 关闭弹窗
$(".navAdd span").addEventListener("click",function(){
    $(".BOX2").style = "display: none"
    $(".mengceng").style = "display: none"
})

$(".offBtn").addEventListener("click",function(){
    $(".BOX2").style = "display: none"
    $(".mengceng").style = "display: none"
})
// $(".BOX2").addEventListener("click",function(e){
//     $(".mengceng").style = "display: none"
//     $(".BOX2").style = "display: none"
//     $(".BOX2").style = "pointer-events:none"

// })
// 点击编辑 编辑信息
document.addEventListener("click",function(e){
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.className === "bjBtn"){
        $(".BOX2").style = "display: block"
        $(".mengceng").style = "display: block"
        

    }
})
// 点击删除 删除信息
document.addEventListener("click",function(e){
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.className === "sc"){
        target.parentNode.parentNode.innerHTML = ""
    }
})
$(".toPlay").addEventListener("click",function(e){
    var e = e || window.event;
    var target = e.target || e.srcElement;
        if($(".xing1").value === ""){
            return alert("姓名不能为空")
        }else{
            if($(".xing2").value === ""){
                return alert("工号不能为空")
            }else{
                if($(".xing3").value === ""){
                    return alert("手机号不能为空")
                }
            }
            // 正则 判断 手机号是否正确
            var reg = /^1[3-9]\d{9}$/
            if(reg.test($(".xing3").value)){
                $(".xing3").value
            }else{
                $(".xing3").value = ""
            }
        }

    // 点击确认添加
    this.reset()
    // 调用渲染添加函数
    render()
    //  页面关闭
    $(".BOX2").style = "display: none"
  
})
function render(){
    const arr = []
    for(let i = 0; i < arr.length; i++){
        const ul = document.createElement('ul')
        ul.innerHTML = `
                <li>${arr[i].userName}</li>
                <li>${arr[i].userCode}</li>
                <li>${arr[i].userPhone}</li>
                <li>${arr[i].userWorks}</li>
                <li>${arr[i].userGrade}</li>
                <li>${arr[i].userTyPE}</li>
                <li class="playLi"><a class="bjBtn">${arr[i].BJ}</a><a class="sc">${arr[i].SC}</a></li>
            `
            addBOX.appendChild(ul)
        
    }
}

// 获取元素的函数
function $(el){
    return document.querySelector(el)
}
function gets(el){
    return [...document.querySelectorAll(el)]
}