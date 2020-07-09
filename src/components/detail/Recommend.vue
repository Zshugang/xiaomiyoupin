<template>
  <div>
    <div v-for="(item,index) in productList" :key="index" class="best-product">
      <div class="image-container">
        <div class="m-product-image-container">
          <div class="img-container" style="padding:22px 53px;width:154px;height:153px;">
            <img
              :src="item.pic"
              alt="【罗永浩推荐】清蜓便携随手吸尘器"
              style="height:154px;width:154px;margin-top:-0.5px;"
            />
          </div>
        </div>
      </div>
      <p>16800Pa大吸力，车家两用，一键倒尘，除螨率＞99.9%</p>
      <h5>【罗永浩推荐】清蜓便携随手吸尘器</h5>
      <h4>
        <span class="dollar">￥</span>
        <span class="price">389</span>
      </h4>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Recommend",
  props: ["picid"],
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(["productList"])
  },
  methods: {
   
  },
  mounted() {
    console.log(this.productList);
    console.log(this.picid);
  }
};
</script>

<style lang="less" scoped>
.best-product {
  //   box-sizing: content-box;
  width: 262px;
  border: 1px solid #f4f4f4;
  margin-bottom: 5px;
  transition: all 0.4s;
  overflow: hidden;
  .image-container {
    width: 260px;
    height: 197px;
    text-align: center;
    background-color: #fff;
    .m-product-image-container {
      overflow: hidden;
      .img-container {
        overflow: hidden;
        display: inline-block;
      }
    }
  }
  p {
    margin-bottom: 10px;
    width: 230px;
    height: 38px;
    line-height: 38px;
    color: #845f3f;
  }
  h5 {
    height: 30px;
    line-height: 34px;
    color: #333;
  }
  p,
  h5 {
    overflow: hidden;
    padding: 0 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    text-align: center;
  }
  h5,
  h4 {
    font-weight: 400;
    background-color: #f4f4f4;
  }
  h4 {
    height: 24px;
    line-height: 20px;
    color: #c33300;
    text-align: center;
    .dollar {
      font-size: 12px;
      vertical-align: top;
    }
    .price {
      font-size: 16px;
    }
  }
}
</style>