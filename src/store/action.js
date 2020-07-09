//youpin vuex
import PRODUCT from '../api/product';

export default {
  saveUserName(context, username) {
    context.commit('saveUserName', username)
  },
  saveCartCount(context, count) {
    context.commit('saveCartCount', count)
  },
  saveUserId(context, userid) {
    context.commit('saveUserId', userid)
  },
  saveUserPic(context, userpic) {
    context.commit('saveUserPic', userpic)
  },
  saveProductId(context, productid) {
    context.commit('saveProductId', productid)
  },

  /* 商品列表数据请求 */
  getProductData(store, options) {
    PRODUCT.getProductlist(options).then(data => {
      // console.log(data.data);
      store.commit('setProductData', data.data)
    })
  }
}