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

<<<<<<< HEAD
    /* 商品列表数据 */
    productList:[],
    /* 添加购物车 */
    cartData:[]
=======
    /* 商品离列表数据 */
    productList: []
>>>>>>> 70ba03402870e3d411b1cb4514e710047e05aac2
  },
  mutations,
  actions
})
