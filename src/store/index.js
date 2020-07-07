import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account:'',
    //购物车数量
    cartCount:0
  },
  mutations,
  modules: {
  },
  actions
})
