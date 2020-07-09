import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    //用户名
    account:'',
    //用户ID
    userID:'',
    //购物车数量
    cartCount:0,
    //商品id
    productID:'',

    /* 商品列表数据 */
    productList:[],
    /* 添加购物车 */
    cartData:[]
  },
  mutations,
  actions
})
