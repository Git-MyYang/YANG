const express = require("express") 
const path = require("path")
const fs = require("fs")
// const md5 = require("md5")  //加密 
// const { json } = require("express")

// 创建服务器应用
const app = express()
// 处理静态资源
app.use( express.static(__dirname+'/dist') )
// 解析处理post请求参数  让post接口可以接收json格式的参数
app.use( express.json() )
// get请求参数
app.use( express.urlencoded() )

// 登录接口
app.get('./index' , (req , res) =>{
    const filePath = path.join(__dirname , '../qd/dist/index.html')
    res.send(filePath)

})

// 后台数据接口
app.get('./info',(req,res) => {

    const data = JSON.parse(fs.readFileSync(path.join(__dirname,'./data.json')), 'utf-8')

    res.send({
        code : 0,
        msg : '成功',
        data : data
    })
    console.log(data)
})





function zero(n){
    return n < 10 ? '0' + n : n
}
app.listen(3000 , () => {
    console.log(`服务器启动, 端口 3000  监听中...`)
})
