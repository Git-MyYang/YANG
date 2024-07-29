<script setup>
import { ref } from 'vue';
import { useRouter, useRoute, RouterView } from 'vue-router'
import  axios  from "axios";
const router = useRouter()
const route = useRoute()
const count = ref(0)

const data = ref([]);
const list = ref([])
let arr1 = ref([])

    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://zyxcl.xyz/exam_api/food');
        data.value = response;
        // console.log(data.value.data.value)
        list.value = data.value.data.value[0]
        list.value.list.forEach(v => {
            v.flag = false
        })
        // console.log(data.value,list.value)

      } catch (error) {
        console.error('Fetch Error', error);
      }
    };
    fetchUsers();
 

    const active = (p,i) => {
        p.flag = !p.flag
        if(p.flag){
            arr1.value.push(p)
            console.log(arr1.value)
        }else{
            arr1.value.slice(i,1)
        }
        router.push({
            path:'/infonav',
            query:{
                arr1: JSON.stringify(arr1.value)
            }
        })
        // console.log(router,route.query)
    }


</script>

<template>


    <div class="maininfo" style="flex: 1;" >
        <van-grid :column-num="1" class="rightinfo" v-for="(p,i) in list.list" :key="p" style="width: 90px;height: 100px;">
            <van-grid-item :icon="p.imgUrl" :text="p.name"  @click="active(p,i)" :class="{active : p.flag}"  />
        </van-grid>
        
    </div>
    <footer>
        <div class="endbox">
            <p class="endnav"><span>已选食物({{ arr1.length }})</span><button class="pc">去评测</button></p>
            <div class="end">
                <p v-for="(item,index) in arr1" :key="item" class="iminfo">{{ item.name }} <button class="del">x</button> </p>
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
        width: 100%;
        min-height: 25vh;
        position: absolute;
        top: 70vh;
        border-top: 1px solid #EEEEEE;
        background-color: #F3F3F3;
        // padding: 20px;
        .endnav{
            display: flex;
            justify-content: space-between;
        }
        .end{
            display:flex;
            flex-wrap:wrap;
            .iminfo{
                color:#7e7d7d;
                padding: 10px;
                margin: 5px;
                border: 1px solid #a19d9d  
            }
        }
    }

    .active{
        border: 1px solid red;
    }
</style>
