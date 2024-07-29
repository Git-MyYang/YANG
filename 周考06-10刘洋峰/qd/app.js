// const title = 10

const express = require("express") 
const path = require("path")
const fs = require("fs")
const { title } = require("process")
const { count } = require("console")
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
app.get('/index' , (req , res) =>{
    const filePath = path.join(__dirname , './dist/index.html')
    res.send(filePath)

})

// 后台数据接口
app.get('/info',(req,res) => {

    const data = JSON.parse(fs.readFileSync(path.join(__dirname,'./data.json')), 'utf-8')
    
    const pageSize = 5
    let count = 0
    const title = 10

        res.send({
            code : 0,
            msg : '成功',
            data : data,
            page : (count++)*[pageSize]+1 +"-" + (count)*pageSize,
            title

        })
        console.log(data)
   
})

// 后台数据删除接口
app.post('/del',(req,res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname,'./data.json')), 'utf-8')
    
    fs.writeFileSync(path.join(__dirname,'./data.json'),JSON.stringify(data))
    
})

// 实现新增接口
app.post('/add',(req,res) => {
    const {name , sex , old , idc , email , home} = req.body
    const data = JSON.parse(fs.readFileSync(path.join(__dirname,'./data.json')), 'utf-8')
    data.push({
        id : data.length+1,
        name,
        sex,
        old,
        home,
        time : new Date(),
        idc,
        email
    })
    fs.writeFileSync(path.join(__dirname,'./data.json'),JSON.stringify(data), 'utf-8')
    res.send({
        code : 0,
        msg : '成功',
    })
})

// 查询接口
app.post('/look',(req,res)=>{
    const userlist = JSON.parse(fs.readFileSync(path.join(__dirname,'./data.json'),'utf-8'));
    // 查找用户名是否存在
    const {username} = req.body;
    const user = userlist.find(item => item.username === username)
    // if(user){

    // }
})
app.listen(3000 , () => {
    console.log(`服务器启动, 端口 3000  监听中...`)
})
