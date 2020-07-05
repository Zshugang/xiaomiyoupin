/**
 * youpin Vuex-mutations
 */
export default {
    saveUserName (state, username) {
      state.account = username
    },
    saveCartCount (state, count) {
      state.cartCount = count
    }
  }
  