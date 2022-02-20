<template>
  <div class="login">登录页</div>
</template>

<script>
import { user_login } from '@/api/login'
export default {
  name: "Login",
  data(){
    return{}
  },
  created() {
    this.onTravelGuide()
  },
  methods: {
    async onTravelGuide() {
      const {result} = await user_login({key: '7bf308cd3c31592018cf36b8c7c02b6e'})
      console.log('是什么', result)
    }
  }
}
</script>

<style scoped>

</style>