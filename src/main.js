import Vue from 'vue'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueCookie);

// Vue.use(ElementUI);

/* 引入公共样式表 */
import './assets/css/reset.min.css';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
