import Vue from 'vue'
import Vandan from './Vandan.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Vandan),
}).$mount('#app')
