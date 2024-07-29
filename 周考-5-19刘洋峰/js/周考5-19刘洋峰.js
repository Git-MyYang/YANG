
window.onload = function(){
    class Movie{
        constructor(e){
            this.e = e
            // 渲染数据
            this.renderMain()
            // 绑定事件
            this.bindEvent()
        }
        renderMain(a,b){


            this.$("main").innerHTML = data.data.films.slice(a,b).map((obj) => {
                return `
                <dl class="infoM">
                    <dt><img src="${obj.poster}" alt=""></dt>
                    <dd>
                        <div class="dyName">${obj.name}<span class="film">${obj.filmType.name}</span></div>
                        <p>观众评分<b>${obj.grade ? obj.grade :  ""}</b></p>
                        <p class="zyName">主演: &nbsp;<span>${obj.actors.map((actors) => {
                            return actors.name + "&nbsp;"
                        }).join("")}</span>&nbsp;</p>
                        <p class="dzName">${obj.nation}&nbsp;|&nbsp;${obj.runtime}分钟</p>
                        <button class="toBtn">购票</button>
                    </dd>
                </dl>
                `
            }).join("")

            this.$(".BOX2").innerHTML = data.data.films.map((obj,i) => {
                return `
                <div class="box1 ${i}">
                    <p class="PI"><img src="./img/圆.png" alt=""></p>

                    <div class="bgtu"><img src="${obj.poster}" alt=""></div>
                    <div class="pad">
                        <p class="box1ming">${obj.name}<span>${obj.filmType.name}</span></p>
                        <div class="box1lx">${obj.category}</div>
                        <div class="box1sj">${obj.premiereAt}上映</div>
                        <div>${obj.nation}&nbsp;|&nbsp;${obj.runtime}分钟</div>
                        <div class="box1jj">${obj.synopsis}</div>
                </div>
                <div class="box2 ${i}">
                    <p>演职人员</p>
                    <dl>
                        <dt class="00"><img src="${obj.actors.map((actors) => {return actors.avatarAddress}).join("")}" alt=""></dt>
                        <dd class="11">${obj.actors.map((actors) => {return actors.name}).join("")}</dd>
                        <dd class="22">${obj.actors.map((actors) => {return actors.role}).join("")}</dd>
                    </dl>
                </div>


                <div class="box3 ${i}">
                    <button class="goBtn">选座购票</button>
                </div>
                `
            }).join("")

            this.$(".azCity").innerHTML = cities.data.cities.map((obj,i) => {
                return `
                    
                    <dd class="pxCity">
                        <li class ="cityName">${obj.name}</li>
                        
                    </dd>
                `
            }).join("")

        }
        
        bindEvent(){
           document.addEventListener("click",(e) => {
                this.e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className === 'I1') {
                this.$(".BOX").style = 'display:block'
                this.$("main").style = 'display:block'
                this.$(".BOX2").style = 'display:none'
                // $('.BOX').classList.add('active')
                // $('.BOX2').classList.remove('active')
            }
            })

            document.addEventListener("click",(e) => {
                this.e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className === 'W1') {
                this.$("main").style = 'display:none'
                this.$(".BOX2").style = 'display:none'
                // $('.BOX2').classList.add('active')
                // $('.BOX').classList.remove('active')
                }
            })

            document.addEventListener("click",(e) => {
                this.e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className === 'infoM') {
                this.$(".BOX").style = 'display:none'
                this.$(".BOX2").style = 'display:block'

                }
            })
            document.addEventListener("click",(e) => {
                this.e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className === 'PI') {
                this.$(".BOX").style = 'display:block'
                this.$(".BOX2").style = 'display:none'

                }
            })

            document.addEventListener("click",(e) => {
                this.e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className === 'nav') {
                this.$(".BOX").style = 'display:none'
                this.$(".BOX2").style = 'display:none'
                this.$(".BOX3").style = 'display:block'
                }
            })

            document.addEventListener("click",(e) => {
                this.e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className === 'cityX') {
                this.$(".BOX").style = 'display:block'
                this.$(".BOX2").style = 'display:none'
                this.$(".BOX3").style = 'display:none'
                }
            })


            document.addEventListener("click",(e) => {
                this.e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'LI') {
                    this.$(".BOX").style = 'display:block'
                    this.$(".BOX2").style = 'display:none'
                    this.$(".BOX3").style = 'display:none'
                }
            })

            this.renderMain(0,10)
            var maxIndex = 9
            document.addEventListener("scroll",() => {
                console.log(this.$("html").scrollTop + this.$("html").clientHeight,this.$("html").scrollHeight)
            if (this.$("html").scrollTop + this.$("html").clientHeight >= this.$("html").scrollHeight ) {
                maxIndex += 10
                // console.log(1111)
                this.renderMain(0,maxIndex);
            }
            })


            this.$('.inpName').addEventListener('change', () => {
                this.$('.azCity').innerHTML = cities.data.cities.filter((item) =>
                    item.name.includes(this.$('.inpName').value)
                ).map((item) => `<li class ="cityName">${item.name}</li>`).join('')
                // 判断搜索框内容
                if (this.$('.inpName').value === '') {
                    this.$('.azCity').innerHTML = cities.data.cities.map((item) =>
                        `<li class ="cityName">${item.name}</li>`
                    ).join('')
                }
                if (cities.data.cities.filter((item) =>
                    item.name.includes(this.$('.inpName').value)
                ).join('') === '') {   
                    this.$('.azCity').innerHTML = ` `
                }
            })

        }


        


        //  单个元素
         $(el , parent = document) {
            return parent.querySelector(el)
        }
        // 多个元素
        gets(el , parent = document){
            return [...parent.querySelectorAll(el)]
        }
    }
        
    new Movie()
    
    
}
