const fs = require("fs")
const path = require("path")

const scName = ["白菜","大蒜","花菜","茄子","辣椒","莲藕","萝卜","南瓜","芹菜","丝瓜","土豆","豌豆","香菇"]
const scUrl = ["./img/白菜.png","./img/大蒜.png","./img/花菜.png","./img/茄子.png","./img/辣椒.png","./img/莲藕.png","./img/萝卜.png","./img/南瓜.png","./img/芹菜.png","./img/丝瓜.png","./img/土豆.png","./img/豌豆.png","./img/香菇.png"]
const scJs = ["好吃,多买!"]
const scTime = ["现在下单,预计今日18:00-19:30送达"]
const scDz = ["百旺店"]

function createData(num){
    const data = []
    for(var i = 0; i < num; i++){
        data.push({
            id : i + 1,
            name: scName ,
            url: scUrl,
            Js: scJs,
            Time: scTime,
            Dz : scDz,
            Monney : Math.floor(Math.random()*50) + `.` + Math.floor(Math.random()*99),
            Monneyed : Math.floor(Math.random()*50) + `.` + Math.floor(Math.random()*99)

        })
    }
    return data;
}

const data = createData(13)

fs.writeFileSync(path.join(__dirname,'./data.json'),JSON.stringify(data))