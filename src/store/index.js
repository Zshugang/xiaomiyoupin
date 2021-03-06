import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //用户名
    account: '',
    //用户ID
    userID: '',
    //购物车数量
    cartCount: 0,
    //商品id
    productID: '',
    //用户头像
    userPic: '',

    /* 商品离列表数据 */
    productList: []
  },
  mutations,
  actions
})
