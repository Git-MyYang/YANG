const http = require("http")
const path = require("path")
const url = require("url")
const fs = require("fs")
const qs = require("querystring")


const app = http.createServer((req,res) => {

    const {pathname , query} = url.parse(req.url)
    // decodeURIComponent(pathname)
    let data = JSON.parse( fs.readFileSync(path.join(__dirname,"./data.json") , 'utf-8') );
    console.log(data)
    

    const filePath = decodeURIComponent(path.join(__dirname , './demo/html',`../../../${pathname}`))
    
    console.log(filePath)
    if(pathname === "/"){
        res.end( fs.readFileSync(filePath))
        return
    }
    // console.log(url.parse(req.url))

    console.log(filePath)

    if(fs.existsSync(filePath)){
        res.end( fs.readFileSync(filePath) )
        return
    }

    if(pathname === "/api/list" && req.method === "GET"){
        console.log(pathname)
            // 设置相应头
            res.setHeader("Content-Type","application/json;charset=utf-8;");
            // console.log(`前端传过来的参数`,query);
            // const {page , pageSize} = qs.parse(query);
            // if(!page || !pageSize){
            //     res.end(JSON.stringify({
            //         code : -1 ,
            //         msg : "参数错误"
            //     }))
            //     return;
            // }
            // 读取数据json文件
            // 将数据和请求信息全部返回给前端
            res.end(JSON.stringify({
                code : 0, 
                msg : "成功",
                total : data.length , // 总条数给前端  前端渲染页码值
                // 根据用户传入的信息 返回数据
                values : data
            }))
            return ;
        }

    // 设置状态码
    res.statusCode = 404;
    // 设置响应头  
    res.setHeader('Content-Type','text/html;charset=utf-8;')
    res.end(`
        <div>
            <h1>404</h1>
            <h2>访问资源不存在 疑似丢失 或 删除</h2>
            <a href="http://127.0.0.1:10001/周考-06-02刘洋峰/demo/gouwu.html">去首页看看吧</a>
        </div>
    `)
})
app.listen(10001 , () => {
    console.log(`服务器启动成功`)
    console.log(`localhost: 10001`)
})