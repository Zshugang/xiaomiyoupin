<template>
  <div class="S-product">
    <!-- 引入头组件 -->
    <top></top>
    <top-header></top-header>
    <!-- 版心 -->
    <div class="container">
      <div class="banner-box clearfix">
        <div class="list"></div>
        <div class="banner">
          <banner></banner>
        </div>
      </div>
    </div>
    
    <!-- 引入底部 -->
    <product-footer></product-footer>
  </div>
</template>
<script>
import top from "../components/Top";
import topHeader from "../components/Header";
import productFooter from "../components/Footer";
import banner from "../components/product/Banner";
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
    banner
  }
};
</script>
<style lang="less">
.S-product {
  .container {
    width: 1080px;
    margin: 0 auto;

    .banner-box{
        width: 100%;
        height: 358px;

        .list{
            float: left;
            width: 221px;
            height: 100%;
            background-color: #9f8052;
        }
        .banner{
            float: right;
            width: 859px;
            height: 100%;
        }
    }
  }
}
</style>