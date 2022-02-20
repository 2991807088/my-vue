<template>
  <div class="home">
    <div class="test">测试</div>
    <router-link to="/login">登录</router-link>
  </div>
</template>

<script>
import {banner} from '@/api/home'
export default {
  name: "Home",
  data(){
    return{}
  },
  created() {
    this.onBanner()
  },
  methods: {
    async onBanner() {
      const {data} = await banner({language: 1, platform: 'pc'})
      console.log('code', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #42b983;
 .test{
   @include center;
   width: 200px;
   height: 200px;
   color: rebeccapurple;
 }
}
</style>