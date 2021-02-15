import Vue from 'vue'
import App from './App.vue'

// Vue Router
import router from "./router/index";

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
import "@/assets/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
