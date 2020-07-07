//youpin vuex
export default {
    saveUserName (context, username) {
      context.commit('saveUserName', username)
    },
    saveCartCount (context, count) {
      context.commit('saveCartCount', count)
    },
    saveUserId(context, userid) {
      context.commit('saveUserId',userid)
    },
    saveProductId(context, productid) {
      context.commit('saveProductId',productid)
    }
  }