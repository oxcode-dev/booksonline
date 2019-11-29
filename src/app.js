import Vue from 'vue';
import App from "./App.vue";

Vue.config.productionTip = false;

window.Vue = Vue;
window.bus = new Vue;
new Vue({
//   router,
//   store,
  render: h => h(App)
}).$mount("#app");