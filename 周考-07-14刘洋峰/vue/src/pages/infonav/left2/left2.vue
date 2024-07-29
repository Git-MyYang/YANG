<script setup>
import { ref } from 'vue';
import { useRouter, useRoute, RouterView } from 'vue-router'
const router = useRouter()
const route = useRoute()


const data = ref([]);

const list = ref([])
let arr2 = ref([])


    const fetchUsers = async () => {
      try {
        const response = await fetch('https://zyxcl.xyz/exam_api/food');
        data.value = await response.json();
        // console.log(data.value.value)
        list.value = data.value.value[1]
        list.value.list.forEach(v => {
            v.flag = false
        })
        // console.log(list.value)
      } catch (error) {
        console.error('Fetch Error', error);
      }
    };
 
    fetchUsers();

    const active = (p) => {
        p.flag = !p.flag
        if(p.flag){
            arr2.value.push(p)
            console.log(arr2.value)
        }
        router.push({
            path:'/infonav',
            query:{
                arr2: JSON.stringify(arr2.value)
            }
        })
        // console.log(router,route.query)
    }

  
</script>

<template>


    <div class="maininfo" style="flex: 1;">
        <van-grid :column-num="1" class="rightinfo" v-for="p in list.list" :key="p" style="width: 90px;height: 100px;">
            <van-grid-item :icon="p.imgUrl" :text="p.name" @click="active(p)" :class="{active : p.flag}"  />
        </van-grid>
    </div>
    <footer>
        <div class="endbox">
            <p class="endnav"><span>已选食物()</span><button class="pc">去评测</button></p>
            <div class="end">
                <p v-for="(item,index) in arr2" :key="item" class="iminfo">{{ item.name }} <button class="del">x</button> </p>
            </div>
        </div>
    </footer>
    
</template>

<style lang='scss' scoped>
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
