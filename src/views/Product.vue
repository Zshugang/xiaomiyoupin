<template>
  <div class="S-product">
    <!-- 引入头组件 -->
    <top></top>
    <top-header></top-header>
    <!-- 版心 -->
    <div class="container">
      <!-- 轮播图 -->
      <div class="banner-box clearfix">
        <div class="list"></div>
        <div class="banner">
          <banner></banner>
        </div>
      </div>

      <!-- 商品列表 -->
      <div class="product-box">
        <div class="box-title">
          <h2>专属推荐</h2>
        </div>
        <div class="productList">
          <!-- 引入商品列表 -->
          <keep-alive>
            <product-list></product-list>
          </keep-alive>
        </div>
      </div>
    </div>

    <!-- 引入底部 -->
    <div class="footer">
      <product-footer></product-footer>
    </div>
  </div>
</template>
<script>
import top from "../components/Top";
import topHeader from "../components/Header";
import productFooter from "../components/Footer";
import banner from "../components/product/Banner";
import productList from "../components/product/ProductList";
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {
    top,
    topHeader,
    productFooter,
    banner,
    productList
  }
};
</script>
<style lang="less" scoped>
.S-product {
  .container {
    width: 1080px;
    margin: 0 auto;

    .banner-box {
      width: 100%;
      height: 358px;

      .list {
        float: left;
        width: 221px;
        height: 100%;
        background-color: #9f8052;
      }
      .banner {
        float: right;
        width: 859px;
        height: 100%;
      }
    }

    .product-box {
      width: 100%;

      .box-title {
        margin-top: 50px;
        margin-bottom: 20px;
        h2 {
          color: #333;
          font-size: 28px;
          font-weight: 400;
        }
      }
    }
  }
  .footer {
    margin-top: 60px;
  }
}
</style>