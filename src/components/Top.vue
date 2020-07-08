<template>
  <div class="S-header-top">
    <div class="container">
      <div class="S-header-top-right">
        <!-- 未登录状态 -->
        <div class="nologin" v-if="!isLogin">
          <router-link to="/login">
            <span>登录</span>
          </router-link>
          <router-link to="/login/register">
            <span>注册</span>
          </router-link>
        </div>
        <!-- 登录状态 -->
        <div class="S-title login-info" v-else>
          <i class="S-login"></i>
          <span class="S-username">{{$store.state.account}}</span>
          <i class="S-down-icon"></i>
          <ul class="S-login-info-ul">
            <li>
              <a href="#">我的订单</a>
            </li>
            <li>
              <a href="#">我的订单</a>
            </li>
            <li>
              <a href="#">我的订单</a>
            </li>
            <li>
              <a href="#">我的订单</a>
            </li>
            <li>
              <a href="#">我的订单</a>
            </li>
            <li>
              <a href="#">我的订单</a>
            </li>
          </ul>
        </div>
        <span class="S-title line"></span>
        <div class="S-title help">
          <span>帮助中心</span>
        </div>
        <span class="S-title line"></span>
        <div class="S-title download">
          <i class="S-phone"></i>
          <span class="S-phone-text">下载APP</span>
        </div>
        <span class="S-title line"></span>
        <div class="S-title clauses-con">
          <span>资质证照&nbsp/&nbsp协议规则</span>
          <i class="S-down-icon"></i>
          <ul class="S-clauses-con-ul">
            <li>
              <a href="#">资质证照</a>
            </li>
            <li>
              <a href="#">协议规则</a>
            </li>
          </ul>
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
    return {
      isLogin: false,

    };
  },
  created(){
    this.login()
  },
  components: {},
  methods: {
    login() {
      if(this.$store.state.account){
        this.isLogin = true;

      }
      // console.log(this.$store.state)
      // this.$store
    }
  }
};
</script>
<style lang="less" scoped>
.S-header-top {
  width: 100%;
  height: 48px;
  color: #e7e7e7;
  background: #333;
  font-size: 14px;
  text-align: center;
  .container {
    width: 1080px;
    margin: 0 auto;

    .S-header-top-right {
      float: right;

      .nologin {
        float: left;
        line-height: 48px;
        height: 100%;
        position: relative;
        cursor: pointer;
        margin-right: 8px;

        span {
          margin-left: 8px;
          color: #e7e7e7;
        }
        span:hover {
          color: #fff;
        }
      }
      .S-title {
        float: left;
        line-height: 48px;
        height: 100%;
        position: relative;
        cursor: pointer;

        ul {
          // width: 100px;
          background: #fff;
          position: absolute;
          z-index: 999;
          left: 15px;
          top: 48px;
          box-shadow: 0 3px 28px rgba(0, 0, 0, 0.1);

          li {
            height: 35px;
            line-height: 35px;
            padding: 0 10px;
            text-align: center;
            color: #e7e7e7;
            a {
              color: #666;
            }
          }
          li:hover {
            color: #fff;
            background-color: rgb(132, 95, 63);
            a {
              color: #fff;
            }
          }
        }
      }
      .S-title:hover span {
        color: #fff;
      }
      .login-info {
        width: 70px;
        padding-left: 30px;
        padding-right: 20px;

        .S-login {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: url(../assets/img/yp-icons.png) 0 -726px;
          background-size: center;
          position: absolute;
          top: 8px;
          left: 0;
        }
        .S-username {
          margin-left: 3px;
          display: inline-block;
          width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .S-down-icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          background: url(../assets/img/yp-icons.png) 0 -1678px;
          position: absolute;
          top: 10px;
          right: 0;
        }
        .S-login-info-ul {
          width: 100px;
          //   opacity: 0;
          display: none;
          // transition: all ease .5s;
        }
      }
      .login-info:hover .S-login-info-ul {
        display: block;
      }
      .line {
        display: inline-block;
        margin: 17px 3px 0 6px;
        border-right: 1px solid #666;
        height: 16px;
        vertical-align: middle;
      }
      .help {
        margin-right: 8px;
        margin-left: 11px;
      }
      .download {
        margin-left: 5px;
        margin-right: 5px;
        padding-left: 30px;

        .S-phone {
          display: inline-block;
          width: 30px;
          height: 30px;
          background: url(../assets/img/yp-icons.png) 0 -964px;
          position: absolute;
          left: 0;
          top: 9px;
        }
        .S-phone-text {
          box-sizing: border-box;
        }
      }
      .clauses-con {
        padding-right: 40px;
        padding-left: 11px;

        .S-down-icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          background: url(../assets/img/yp-icons.png) 0 -1678px;
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .S-clauses-con-ul {
          width: 160px;
          left: 0;
          display: none;
        }
      }
      .clauses-con:hover .S-clauses-con-ul {
        display: block;
      }
    }
  }
}
</style>