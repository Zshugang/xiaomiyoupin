<template>
  <div class="m-fixedBar">
    <ul class="fixed-nav">
      <li>
        <a href="javascript:;" class="m-icons m-icons- m-icons-service-fixed" @click="hover" style='dispaly:block'></a>
        <p class="text">联系客服</p>
        <div class="fixed-pop fixed-service-pop">
          <div class="pop-inner">
            <p class="info-title">小米有品平台问题，建议反馈，商户和物流问题投诉等请拨打 小米有品客服热线</p>
            <p class="info-phone">400-100-1199</p>
            <p class="info-day">(周一至周日 8：00-18：00)</p>
            <p class="info-des">小米/米家自营品牌，手机电视智能硬件商品或订单发货/退款售后问题 请拨打小米自营客服热线</p>
            <p class="info-phone">400-100-5678</p>
            <p class="info-day">(周一至周日 8：00-18：00)</p>
            <a class="m-icons m-icons-arrow-right" href="javascript:;"></a>
          </div>
        </div>
      </li>
      <li>
        <a href="javascript:;" class="m-icons m-icons- m-icons-download"></a>
        <p class="text">下载 APP</p>
        <div class="fixed-pop fixed-down-pop">
          <div class="pop-inner">
            <img class="qr-code" src="../../assets/img/code.6b4e6f01.png" alt />
            <p class="site-info">
              下载小米有品APP
              <br />得新人礼包
            </p>
            <a class="m-icons m-icons-arrow-right" href="javascript:;"></a>
          </div>
        </div>
      </li>
      <li>
        <a href="javascript:;" class="m-icons m-icons- m-icons-gift"></a>
        <p class="text">新人有礼</p>
        <div class="fixed-pop fixed-gift-pop">
          <div class="pop-inner">
            <div class="gift-bg"></div>
            <img class="qr-code" src="../../assets/img/code.6b4e6f01.png" alt />
            <p class="site-info">立即扫码下载·小米有品 APP</p>
            <a class="m-icons m-icons-arrow-right" href="javascript:;"></a>
          </div>
        </div>
      </li>
      <li>
        <a href="javascript:;" class="m-icons m-icons- m-icons-wx-chat"></a>
        <p class="text">关注微信</p>
        <div class="fixed-pop fixed-wx-pop">
          <div class="pop-inner">
            <img class="qr-code" src="../../assets/img/wx_code.83208f15.png" alt />
            <p class="site-info">扫码关注「小米有品」微信服务号，签到积分赢大奖</p>
            <a class="m-icons m-icons-arrow-right" href="javascript:;"></a>
          </div>
        </div>
      </li>
      <li>
        <a href="javascript:;" class="m-icons m-icons- m-icons-top"></a>
        <p class="text">回到顶部</p>
        <div class="fixed-pop"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag:1,
    }
  },
  methods: {
    hover(){

    }
  }
};
</script>

<style lang="less" scoped>
.m-fixedBar {
  position: fixed;
  top: 220px;
  right: 10px;
  z-index: 999;
  width: 71px;
  padding: 0 5px;
  background: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
  li {
    padding: 10px;
    font-size: 12px;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    cursor: pointer;
    position: relative;
    .m-icons-service-fixed {
      width: 30px;
      height: 30px;
      background-position: 0 -1644px;
    }
    .m-icons-download {
      width: 30px;
      height: 30px;
      background-position: 0 -1270px;
    }
    .m-icons-gift {
      width: 30px;
      height: 30px;
      background-position: 0 -794px;
    }
    .m-icons-wx-chat {
      width: 30px;
      height: 30px;
      background-position: 0 -998px;
    }
    .m-icons-top {
      width: 30px;
      height: 30px;
      background-position: 0 -1304px;
    }
    .m-icons {
      background-image: url(../../assets/img/yp-icons.png);
      background-size: 85px 2585px;
      display: inline-block;
    }
    // 控制第一个具体的样式
    .fixed-service-pop {
      width: 230px;
      left: -244px;
      display: none;
      .pop-inner {
        padding: 10px 18px;
        border: 1px solid #dfdfdf;
        background: #fff;
      }
      .info-title {
        margin-top: 8px;
        color: #333;
        font-size: 12px;
      }
      .info-phone {
        margin-top: 15px;
        color: #845f3f;
        font-size: 20px;
      }
      .info-day {
        margin-top: 1px;
        color: #666;
        font-size: 12px;
      }
      .info-des {
        margin-top: 18px;
        color: #333;
        font-size: 12px;
      }
    }
    // 控制第二个具体样式
    .fixed-down-pop {
      display: none;
      width: 130px;
      overflow: hidden;
    }
    //第三个具体样式
    .fixed-gift-pop {
      height: 328px;
      overflow: hidden;
      display: none;
      left: -226px;
      .gift-bg {
        width: 190px;
        height: 152px;
        margin-bottom: 20px;
        background: url(../../assets/img/gift-gd.3f999fde.png) 50% no-repeat;
        background-size: 100%;
      }
      .qr-code {
        padding: 8px;
        border: 1px solid #e7e7e7;
      }
    }
    //控制第四个具体样式
    .fixed-wx-pop {
      width: 210px;
      left: -224px;
      display: none;
      .qr-code {
        width: 120px;
        height: 120px;
      }
    }
  }
  .fixed-pop {
    position: absolute;
    left: -144px;
    top: 0;
    display: block;
    padding-right: 20px;
  }
  .pop-inner {
    padding: 10px;
    border: 1px solid #dfdfdf;
    background: #fff;
    //   联系客服
    .m-icons {
      position: absolute;
      right: 15px;
      top: 15px;
    }
    .m-icons-arrow-right {
      width: 6px;
      height: 12px;
      background-position: 0 -38px;
    }
    // 下载APP
    img {
      vertical-align: middle;
      border: none;
    }
  }
  .qr-code {
    display: block;
    width: 88px;
    height: 88px;
    margin: 0 auto 10px;
  }
}
</style>