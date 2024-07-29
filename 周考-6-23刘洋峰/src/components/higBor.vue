<template>
      <header>
          <ul v-for="(item,index) in arr" :key="index">
              <li><img class="ig1" :src=item.src alt=""><img class="imgg" src="../assets/错号.png" @click="del(index)" alt=""></li>
          </ul>
          <button v-show="count > 0"  :class="{active : arr.length>1}" @click="$emit('vs')" :disabled="arr.length < 2" >√ Compare</button>
      </header>
</template>
  
  <script>

import 'animate.css';
  import index from './index.vue'



  export default {
    props:["count","arr"],
    data() {
      return {
        
      }
    },
    methods: {
      
      del(index){
        this.arr[index].flag=false
        this.arr.splice(index,1)
      }
    },
     // 注册组件
     components: {
      index
    }
  }
  </script>
  
  <style>
    header{
    display: flex;
    justify-content: end;
    background-color: #25272B;
}
header ul{
    display: flex;
    align-items: center;
}
header ul li{
    width: 35px;
    height: 35px;
    margin: 5px 10px;
    position: relative;
    background-color: #2C2D34;
}
header ul li img{
  width: 100%;
  height: 100%;
}
.imgg{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 5%;
  left: 75%;
  background-color: #ffffff;
}
header button{
  padding: 10px 30px;
  color: #ffffff;
  cursor: pointer;

}
.active{
  padding: 10px 30px;
    color: #ffffff;
    cursor: pointer;
  background-color: #4752CD;
}
  </style>
  