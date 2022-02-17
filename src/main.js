import Vue from 'vue'
import App from './App.vue'
console.log('是什么')
import router from "@/router";
import './styles/utils.css'
import './styles/mixin.scss'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
