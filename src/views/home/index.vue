<template>
  <div class="home">
    <div class="test">测试</div>
    <router-link to="/login">登录</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
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