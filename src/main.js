import Vue from 'vue'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false


// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.use(VueCookie);


/* 引入公共样式表 */
import './assets/css/reset.min.css';
Vue.config.productionTip = false


/* 按需引入element-ui */
import { Button, Select,Carousel,CarouselItem,Message,Image, } from 'element-ui';
// Vue.use(Message);
Vue.use(Button);
// Vue.use(Select);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Image);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
