<script setup>
import { ref,onMounted,watch } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

let list = ref([])
let data = ref([])
let count = ref(1)
let flag = ref(false)
let odd = ref(false)
const router = useRouter()
const route = useRoute()

onMounted(
    async () => {
        try {
            const response = await axios.get('http://121.89.213.194:3001/goods');
            list.value = response;
            data.value = list.value.data.data
            const path = decodeURIComponent(route.query.redirect || '/commodity')
            router.push(path)
        } catch (error) {
            console.error('Axios error:', error);
        }
    }
)

const jianj = (index) => {
    count.value > 1 ? count.value-- : flag.value=false
    console.log(flag)
}

const jiaj = (index) => {
    count.value++
}

const tab = ()  => {
    odd.value=!odd.value
    flag.value=!flag.value
}

const toHref = (item,index) => {
    router.push({
        path: '/commodity/infos',
    })

}
</script>

<template>
    <div class="box">
        <div class="left1">
             <el-col :span="6">
                <el-anchor :container="containerRef"direction="vertical"type="default":offset="30"@click="handleClick" >
                    <el-anchor-link class="toP"  v-for="(item,index) in data" :key="item.index" :href="`#h${index}`" :title=" item.name "/>
                </el-anchor>
            </el-col>
        </div>
        <div class="left2">
            <div v-for="(item,index) in data" :key="item.index" :id="`h${index}`">
                <p class="oneP">{{ item.name }}</p>
                <el-row  v-for="(vle,k) in item.foods" :key="item.index">
                    <el-col :span="18">
                        <div ref="containerRef" style="height: 150px; overflow-y: auto">
                            <dl @click="toHref(item,index)">
                                <dt><img :src='vle.image'></dt>
                                <dd>
                                    <h4>{{ vle.name }}</h4>
                                    <div class="info"> <p class="towP">{{ vle.description === "" ? "''" : vle.description }}</p><i>月售{{ vle.sellCount }}份</i> &nbsp;&nbsp;<span>好评率 {{ vle.rating === "" ? "01" : vle.rating  }}%</span></div>
                                    <p class="price">￥{{ vle.price }}<button v-show="!flag" @click.stop="tab">+</button></p>
                                    
                                    <p v-show="flag" class="btn"><div class="jian" @click.stop="jianj(k)">-</div> <span>{{ count }}</span> <div class="jia" @click.stop="jiaj(k)">+</div> </p>
                                </dd>
                            </dl>
                        </div>
                    </el-col>
                   
                </el-row>
            </div>
        </div>
    </div>
    <div class="foot">
        <i>
            <img src="./pho/购物车2.png">
            <img src="./pho/购物车.png" v-show="!flag">
        </i>
        <span>￥</span>
        <span>另需配送费 ￥4元</span>
        <button>￥20元起送</button>
    </div>
</template>

<style lang='scss' scoped>
.box{
    display:flex;
}
.left1{
    width:90px;
    height:90vh;
    position: sticky;
    top:65px;
    background-color:#F1F4F5;
    .toP{
        display:flex;
        text-align: center;
        justify-content:center;
        padding:15px 10px;
    }
    .toP:hover{
        background-color:#FFFFFF;
    }
}
.left2{
    flex:1;
    height:90vh;
    overflow:hidden;
    overflow-y:scroll;
    padding-bottom:500px;
    .oneP{
        background-color: #F1F4F5;
        padding: 5px 0 5px 15px;
        border-left: 2px solid #D4D8DE;
    }
    dl{
        padding:20px;
        display:flex;
        position:relative;
        img{
            width:100px;
            height:100px;
        }
        dd{
            margin-left:10px;
            .towP,h4{
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:1;
                text-overflow:ellipsis;
                overflow:hidden;
            }
            .info{
                font-size:14px;
                color:#b9b9b9;
            }
            .price{
                color:red;
                font-size:18px;
            }
            button{
                position: absolute;
                bottom:20px;
                left:85%;
                padding: 5px 8px;
                color: 20px;
                color:#fff;
                border:none;
                border-radius: 50%;
                background-color: #0196D8;
            }
        }
    }
}
.foot{
    position:absolute;
    bottom:0;
    width:100%;
    height:10vh;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items: center;
    background-color: #06111A;
    button{
        height:100%;
    }
    img{
        position:absolute;
        bottom:0;
        left: 10px;
        padding-top:2px;
        padding-right:1px;
        background-color:#fff;
        text-align:center;
        border-radius:50%;
    }
    span:nth-child(2){
        margin-left:50px;
    }
}
.btn{
    display:flex;
    justify-content: space-between;
    position:relative;
    padding: 0px 0px 0 55px;
    margin-top: -25px;
    .jian,.jia{
        width:25px;
        height:25px;
        color:#fff;
        border-radius:50%;
        display:flex;
        justify-content:center;
        text-align:center;
        background-color: #0196D8;
    }
}
</style>
