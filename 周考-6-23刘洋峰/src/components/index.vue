<template>
    <div class="app mc" v-if="running">
        <img class="imggs" @click="$emit('vss')" src="../assets/错号.png" alt="">
        <div class="lefts"  v-for="(item,index) in arr" :key="index">
            <img :src="item.src" alt="">
            <h3>{{ item.title }}</h3>
            <div>{{ item.year }}</div>
            <div>{{ item.region }}</div>
            <div>{{ item.alcohol }}</div>
            <div>{{ item.price }}</div>
            <button>Add to cart</button>
        </div>
       
    </div>
</template>


<script>

import 'animate.css';


export default {
    props:["arr",'running'],
  name: 'App',
   
    // 计算属性
    Computed:{
    },
    // 侦听器
    watch:{
    },
    // 定义函数
    methods:{
    },
    // 注册组件
    components: {
    }
}
</script>

<style lang="scss" scoped>
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    img{
        width: 150px;
        height: 150px;
    }
    .mc{
        display: flex;
        // display: none;
    }
    .app{
        
        width: 100%;
        height: 100%;
        background-color: #24252A;
        position: absolute;
        top: 0;
        left: 0;
        // display: flex;
        z-index: 9;
        color: #fff;
    }
    .lefts{
        flex: 1;
        padding: 100px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .lefts:nth-child(odd){
        background-color: #202226;
    }
    .lefts >div{
        width: 300px;
    }
    .lefts > button{
        padding: 20px 50px;
        color: #fff;
        background-color: #2C2D33;
    }
    .imggs{
        padding: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        top: 5%;
        left: 95%;
        cursor: pointer;
    }
    .lefts:nth-child(odd){
        animation: bounceInDown 2s;
    }
    .lefts:nth-child(even){
        animation: bounceInUp 2s;
        
}
</style>
