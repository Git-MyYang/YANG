// const { match } = require("assert")
const { count } = require("console")
const fs = require("fs")
const path = require("path")


// const toPage = randoms[randoms.slice(Math.floor(Math.random*51) , (randoms.length - Math.floor(Math.random*51)))]

const toName = ["三丰","无常","敬亭","云长","萧贤","化腾","若楠","若昀","沈腾","麻花","三娘"]
const toSex = ["男","女"]
const toHome = ["人才班","卓越班","初级班","中级班","高级班","人才班","卓越班","初级班","中级班","高级班","人才班"]
const toTime = [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()]
// toTime = JSON.stringify(toTime)
function createData(num){
    const data = []
    for(var i = 0; i < num; i++){
        // const count = 5
        // const toPage = 1
        // if(i % 5 === 0){
        //     toPage++
        // }
        data.push({
            id : i + 1,
            name : toName[i] ,
            sex : toSex[Math.floor(Math.random()*2)],
            old : Math.floor(Math.random()*55),
            home : toHome[i],
            time : toTime[i],
            // page : 1 + "-" + toPage*5
        })
       
    }
    return data;
} 


const data = createData(toName.length)

fs.writeFileSync(path.join(__dirname,'./data.json'),JSON.stringify(data))
