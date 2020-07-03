<template>
  <div class="S-empty-cart">
    <div class="S-empty">
      <div class="empty">
        <div class="empty-img"></div>
        <p class="empty-text">购物车还是空的</p>
      </div>

      <div class="gohome">
        <div class="gohome-text">继续逛</div>
      </div>
      
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.S-empty-cart {
  width: 100%;
  .S-empty {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 200px;

    .empty {
      width: 100%;
      .empty-img {
        margin: 0 auto;
        width: 153px;
        height: 132px;
        background: url(../../assets/img/no-cart.png) no-repeat;
        background-size: 100%;
      }
      .empty-text {
        text-align: center;
        margin-top: 24px;
        color: #333;
        font-size: 14px;
      }
    }
    .gohome {
      width: 100%;
      margin-top: 21px;

      .gohome-text {
        margin: 0 auto;
        text-align: center;
        color: #666;
        border: 1px solid #666;
        width: 97px;
        height: 43px;
        line-height: 41px;
        font-size: 18px;
        border-radius: 2px;
        box-sizing: border-box;
        padding: 0 6px;
        transition: all .5s cubic-bezier(0,1,.5,1);
      }
      .gohome-text:hover {
        color: #fff;
        background-color: #845f3f;
        border-color: #845f3f;
      }
    }
  }
}
</style>