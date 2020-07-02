<template>
  <div class="S-footer">
    <div class="container">
      <div class="footer">
        <div class="footer-logo">
          <img src="../assets/img/logo@2x.cf8cc6a8.png" alt />
        </div>
        <div class="footer-center">
          <p>小米有品平台运营主体变更公告小米有品平台运营主体变更公告</p>
          <p>小米有品平台运营主体变更公告小米有品平台运营主</p>
          <p>小米有品平台运营主体变更公告小米有品</p>
          <p>小米有品平台运营主体变更公告</p>
        </div>
        <div class="footer-right clearfix">
          <img src="../assets/img/f-logo.png" alt />
        </div>
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
<style lang="less" scoped>
.S-footer {
  width: 100%;
  padding: 45px 0;
  height: 45px;
  line-height: 23px;
  border-top: 1px solid #e7e7e7;
  background-color: #fff;
  color: #666;

  .container {
    width: 1080px;
    margin: 0 auto;

    .footer {
      width: 100%;
      .footer-logo {
        float: left;
        img {
          width: 123px;
          height: 45px;
          margin-right: 25px;
        }
      }
      .footer-center {
        float: left;
        margin-left: 300px;
        font-size: 12px;
      }
      .footer-right {
        float: right;

        img {
          width: 100px;
        }
      }
    }
  }
}
</style>