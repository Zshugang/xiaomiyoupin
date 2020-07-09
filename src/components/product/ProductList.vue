<template>
  <div class="S-product-list">
    <ul class="product-list">
      <li class="product-item" v-for="item in $store.state.productList" :key="item.id" @click="godetail(item.id)">
        <div class="category-img">
          <div class="img-box">
            <el-image
              :src="item.pic"
              lazy
            ></el-image>
          </div>
          <p>{{item.detail.text}}</p>
        </div>
        <div class="category-box">
          <div class="goods-tag">
            <span>{{item.tag}}</span>
          </div>
          <p class="pro-info">{{item.title}}</p>
          <p class="pro-info">
            <span class="pro-unit">¥</span>
            <span class="m-num">{{item.discount}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getProductData } from "../../store/index";
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      
    };
  },
  components: {},
  created() {
    /* 为了做数据缓存，减少向服务器发送请求，方法放在vuex中 */
    this.$store.dispatch('getProductData');
  },
  methods:{
    godetail(id){
      // console.log("/detailInfo/"+`${id}`);
      this.$router.push({path:"/detailInfo/"+`${id}`})
    }
  }
};
</script>
<style lang="less" scoped>
.S-product-list {
  width: 100%;

  .product-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .product-item {
      width: 264px;
      margin-bottom: 5px;
      margin-left: 5px;
      border: 1px solid #e7e7e7;
      transition: all 0.4s;

      .category-img {
        .img-box {
          padding: 45px 70px 28px;
          width: 124px;
          height: 125px;
          img {
            width: 100%;
          }
        }
        p {
          box-sizing: border-box;
          text-align: center;
          color: #845f3f;
          font-size: 16px;
          line-height: 20px;
          height: 20px;
          padding:0 10px;
          margin-top: 0;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .category-box {
        margin-top: 18px;
        padding: 13px 0 10px;
        background: #f8f8f8;

        .goods-tag {
          text-align: center;
          height: 20px;
          padding-top: 2px;
          padding-bottom: 2px;
          width: 100%;
          overflow: hidden;

          span {
            display: inline-block;
            background-color: rgb(217, 107, 108);
            padding: 0 6px;
            border-radius: 2px;
            color: #fff;
            font-size: 14px;
          }
        }
        .pro-info {
          width: 100%;
          color: #333;
          margin-top: 10px;
          font-size: 18px;
          line-height: 22px;
          height: 22px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          box-sizing: border-box;
          padding: 0 30px;

          .pro-unit {
            margin-right: 5px;
            font-size: 13px;
            line-height: 22px;
            color: #a92112;
          }
          .m-num {
            color: #a92112;
            font-size: 20px;
          }
        }
      }
    }
    .product-item:nth-child(4n + 1) {
      margin-left: 0px;
    }
    .product-item:hover {
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, -2px, 0);
    }
  }
}
</style>
