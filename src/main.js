import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 引入swiper */
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

//导入公共样式
import './assets/css/reset.min.css';

Vue.config.productionTip = false


/* 引入公共样式表 */
import './assets/css/reset.min.css';
// import 'swiper/swiper-bundle.css'
// import 'element-ui/lib/theme-chalk/index.css';


/* 按需引入element-ui */
import { Button, Select,Carousel,CarouselItem } from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Carousel);
Vue.use(CarouselItem);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
