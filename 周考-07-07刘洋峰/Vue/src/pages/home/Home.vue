<script setup>
import axios from 'axios'

const axiosData = async () => {
      try {
        const response = await axios.get('http://121.89.213.194:3001/goods');
        axiosData.value = response;
        console.log(axiosData.value)
      } catch (error) {
        console.error('Axios error:', error);
      }
};

    


</script>

<template>

    <div class="nav">
      <router-link to="/commodity" class="nav1" >商品</router-link >
      <router-link to="/remark" class="nav2">评论</router-link>
      <router-link to="/merchant" class="nav3">商家</router-link>
    </div>

    <div class="main">
      <RouterView />
    </div>


</template>

<style lang='scss' scoped>

.nav{
  // width: 100%;
  margin-bottom: 3px;
  .nav1,.nav2,.nav3{
    padding: 20px 12.3%;
  }
  a{
    line-height: 61px;
    color: black;
  }
}.router-link-active{
  color: #E61513 !important;
  border-bottom: 3px solid #E61513 !important;
}
</style>
