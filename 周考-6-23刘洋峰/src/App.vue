<template>
    <div class="app">
        
        <index
        :arr="arr"
        @vss="vss"
        :running="running"
        ></index>

        <div class="infoBOX">

            <higBor 
            :count="count"
            :arr="arr"
            @vs="vs"
            ></higBor>

            <main >
                <dl v-for="(item,index) in data" :key="index" :class="{borders : item.flag}">
                    <dt><img :src= item.src alt=""></dt>
                    <dd>
                        <img class="adds" @click="borFn(item)" v-show="item.flag === true ? !item.flag : !item.flag " src="./assets/jh.png" alt="">
                        <img class="adds" @click="borFn(item)" v-show="item.flag === false ? item.flag : item.flag" src="./assets/dh.png" alt="">
                        <h3>{{ item.title }}</h3>
                        <div>{{ item.price }}</div>
                        <button @click="borFn(item)">Add to cart</button>
                    </dd>
                </dl>
            </main>
        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import higBor from './components/higBor.vue'
import index from './components/index.vue'
import axios from 'axios';
import 'animate.css';

export default {
  name: 'App',
    data() {
        return {
           data: null,
           error: null,
           count:0,
           flag:false,
           arr:[],
           running:false
        }
    },
    // 计算属性
    Computed:{
    },
    // 侦听器
    watch:{
    },
    // 创建钩子
    created() {
        this.fetchData();
  },
    // 定义函数
    methods:{
        fetchData(){
            axios.get("https://zyxcl.xyz/exam_api/bottle")
            .then(response => {
                this.data = response.data.value.map(i=>{return {...i,flag:false,Url:'./dh.png'}});
                console.log(this.data)
            })
            .catch(error => {
                this.error = error.message;
            });
        },
        borFn(item){
            this.count++
            this.arr.length <= 2 ? item.flag = true : this.arr.length = 3
            this.arr = this.data.filter((item)=>{
                return item.flag === true
            })
        },
        vs(){
            this.running=true
        },
        vss(){
            this.running=false
        }
    },
    // 注册组件
    components: {
        higBor,
        index
    }
}
</script>

<style lang="scss">
    *{
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}
html,body{
    height: 100%;
    width: 100%;
}
main{
    background-color: #292B2F;
    display: flex;
    padding: 0 50px;
    padding-left: 200px;
    flex-wrap: wrap;
    color: #ffffff;
}
main dl{
    background-color: #232529;
    padding: 20px;
    width: 20%;
    margin: 20px;
    text-align: center;
    position: relative;
}
main dl dd h3{
    height: 50px;
}
main dl dd >div{
    margin: 20px 0;
    color: #6E70BB;
}
main dl dd button{
    padding: 10px 30px;
    color: #ffffff;
    cursor: pointer;
    background-color: #2C2D34;
}
.adds{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 3%;
    left: 80%;
    cursor: pointer;
}
.borders{
    border: 3px solid #4047C3;
    border-radius: 5px;
}
main dl dt img:hover{
    animation: wobble 1s;

}
// .animate__animated:hover{
// }

</style>
