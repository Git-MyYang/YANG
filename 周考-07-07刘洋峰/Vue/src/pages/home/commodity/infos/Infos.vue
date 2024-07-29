<script setup>
import { ref,onMounted,watch } from 'vue'
import axios from 'axios'


let list = ref([])
let data = ref([])

onMounted(
    async () => {
        try {
            const response = await axios.get('http://121.89.213.194:3001/goods');
            list.value = response;
            data.value = list.value.data.data
        } catch (error) {
            console.error('Axios error:', error);
        }
    }
)

</script>

<template>
    <div  v-for="(item,index) in data" :key="item.index">
        <div v-for="(v,k) in item.foods" :key="item.index">
            <p><img :src='v.image'></p>
            <h3>{{ v.name }}</h3>
        </div>
    </div>
</template>

<style lang='scss' scoped>
p{
    img{
        width:375px;
        // height:100px;
    }
}
</style>
