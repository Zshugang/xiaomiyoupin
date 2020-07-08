/**
 * youpin Vuex-mutations
 */
export default {
  saveUserName(state, username) {
    state.account = username
  },
  saveCartCount(state, count) {
    state.cartCount = count
  },
  saveUserId(state, userid) {
    state.userID = userid
  },
  saveProductId(state, productid) {
    state.productID = productid
  },

  /* 设置商品列表数据 */
  setProductData(state,options){
    state.productList = options
  }
}
