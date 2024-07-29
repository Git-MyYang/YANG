<script setup>
import { ref } from 'vue';
import { useRouter, useRoute, RouterView } from 'vue-router'

const router = useRouter()
const route = useRoute()

// console.log(router)
const value = ref('');
const active = ref(0);

const data = ref([]);
const list = ref([])
const arr = ref([])

 
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://zyxcl.xyz/exam_api/food');
        data.value = await response.json();

        // console.log(data.value,list.value)
      } catch (error) {
        console.error('Fetch Error', error);
      }
    };
 
    fetchUsers();

    const toArr = () => {

        arr.value = JSON.parse(JSON.stringify(route.query))
        console.log(arr.value)
    }
    toArr()

  const tofn = (i) => {
    if(i === 0){
        router.push('/infonav/left1')
        // router.push({
        //     path:'/infonav',
        //     query:{
        //         arr1: JSON.stringify(arr1.value)
        //     }
        // })
    }
    if(i === 1){
        router.push('/infonav/left2')
    }
    if(i === 2){
        router.push('/infonav/left3')
    }
  }

</script>

<template>
    <div>
        <header>
            <h2>食品健康测评</h2>

            <p>搜索你今天吃的食物</p>
        </header>

        <main>
            <van-sidebar v-model="active" style="widows: 50px; height: 105vh;background: #F7F8FA;">
                <van-sidebar-item v-for="(item,index) in data.value" :key="index" :title="item.name" @click="tofn(index)"/>
            </van-sidebar>

            <RouterView />
        </main>

        <!-- <footer>
            <div class="endbox">
                <p class="endnav"><span>已选食物()</span><button class="pc">去评测</button></p>
                <div class="end">
                    <p v-for="(item,index) in arr" :key="item" class="iminfo">{{ item.name }} <button class="del">x</button> </p>
                </div>
            </div>
        </footer> -->
    </div>

</template>

<style lang='scss' scoped>
    header{
        width: 100%;
        height: 120px;
        border-bottom: 1px solid #F3F3F3;
        p{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #EFEFEF;
            border-radius: 25px;
            color: #AAAAAA;
        }
    }
    main{
        display: flex;
    }

    .maininfo{
        display: flex;
        flex-wrap: wrap;
    }
    footer{
        width: 335px;
        height: 25vh;
        position: absolute;
        top: 70vh;
        border-top: 1px solid #EEEEEE;
        background-color: #F3F3F3;
        padding: 20px;
        .endnav{
            display: flex;
            justify-content: space-between;
        }
    }

    .active{
        border: 1px solid red;
    }
</style>
