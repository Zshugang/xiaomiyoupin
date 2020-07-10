<template>
  <div>
    <!-- 头组件 -->
    <top></top>
    <top-header></top-header>
    <!-- 购物车部分 -->
    <div class="S-cart">
      <div class="container">
        <div class="S-cart-title">
          <span class="title-tohome" @click="goHome">首页</span>
          <span>></span>
          <span class="title-tocart">购物车</span>
        </div>

        <!-- 空购物车组件 -->
        <empty-cart v-if="cartData.length===0"></empty-cart>
        <!-- 有商品的购物车 -->
        <has-cart v-else></has-cart>
      </div>

      <!-- 底部组件 -->
      <cart-footer></cart-footer>
    </div>
  </div>
</template>
<script>
import top from "../components/Top";
import topHeader from "../components/Header";
import cartFooter from "../components/Footer";
import emptyCart from "../components/cart/emptyCart";
import hasCart from "../components/cart/hasCart";
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      cartData: [
        {
          isSelect: true,
          category1: "小米商城",
          img:
            "https://img.youpin.mi-img.com/shopmain/693ed3defbda3f629e5ce0996a59f4d6.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800",
          name: "空调A（3匹/变频/新一级能效）"
        }
      ]
    };
  },
  components: {
    top,
    topHeader,
    cartFooter,
    emptyCart,
    hasCart
  },
  created() {
    console.log(this.$store.state.count);
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less">
.S-cart {
  border-top: 1px solid #e7e7e7;
  .container {
    width: 1080px;
    margin: 0 auto;

    .S-cart-title {
      padding: 30px 0;
      width: 100%;
      font-size: 13px;

      .title-tohome {
        margin: 0 6px;
        cursor: pointer;
        color: #000;
      }

      .title-tocart {
        color: #999;
        margin: 0 6px;
        cursor: default;
      }
      span:hover {
        color: #845f3f;
      }
    }
  }
}
</style>