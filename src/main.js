import Vue from 'vue'
import App from './App.vue'
console.log('是什么')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
