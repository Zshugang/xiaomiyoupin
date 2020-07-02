import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';

Vue.config.productionTip = false
// Vue.use(ElementUI);

/* 引入公共样式表 */
import './assets/css/reset.min.css';
// import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
