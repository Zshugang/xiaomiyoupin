<template>
  <div class="S-banner">
    <el-carousel height="358px" arrow="always" :autoplay="true" trigger="click">
      <el-carousel-item v-for="item in bannerData" :key="item.id">
        <h3 class="small">
          <img :src="item.pic" alt />
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
import Banner from "../../api/product";
// @ is an alias to /src
export default {
  name: "carrousel",
  data() {
    return {
      bannerData: []
    };
  },
  created() {
    this.getBannerData();
  },
  methods: {
    getBannerData() {
      Banner.getBanner().then(data => {
        this.bannerData = data.data;
      });
    }
  }
};
</script>
<style lang="less" >
.S-banner {
  img {
    width: 100%;
    height: 100%;
  }
    /* 左右按钮 */
  .el-carousel__arrow {
    font-size: 0 !important;
    width: 38px !important;
    height: 38px !important;
    transition: 0s !important;
    background: url(../../assets/img/yp-icons.product.png) !important;
  }
  .el-carousel__arrow--left {
    background-position: 0 -1940px !important;
  }
  .el-carousel__arrow--left:hover {
    background-position: 0 -1814px !important;
  }
  .el-carousel__arrow--right {
    background-position: 0 -1856px !important;
  }
  .el-carousel__arrow--right:hover {
    background-position: 0 -1898px !important;
  }
  /* 分页器 */
  .el-carousel__button{
      margin: 0 2px;
      width: 10px !important;
      height: 10px !important;
      border-radius: 500px;
      background-color: #fff;
      border:1px solid #cecece;
      opacity: 1 !important;
  }
  .is-active .el-carousel__button{
      background: #a7936e;
      box-shadow: 0 0 0 4px #ccc;
  }
}
</style>