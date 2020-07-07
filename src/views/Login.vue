<template>
  <div class="login">
    <!-- 上半部分 -->
    <div class="container">
      <!-- 为了加内填充 -->
      <div class="main">
        <!-- 整个登录区域 -->
        <div class="context">
          <!-- 登录头部 -->
          <div class="loginheader">
            <div class="header_title">
              <em class="milogo">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700" />
                  <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF" />
                  <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF" />
                  <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF" />
                  <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF" />
                  <rect
                    x="20.6"
                    y="15"
                    width="9.8"
                    height="9.8"
                    rx="4.4"
                    ry="4.4"
                    style="fill:#FFFFFF"
                  />
                  <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700" />
                  <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700" />
                  <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700" />
                  <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF" />
                </svg>
              </em>
              <h4 class="log_title">小米账号登录</h4>
              <div class="site_info"></div>
            </div>
          </div>
          <!-- 登录主体内容 -->
          <div class="login_context">
            <div>
              <div class="login_area">
                <!-- 输入框 -->
                <div class="loginbox">
                  <div class="lg_input">
                    <label class="labelbox" for>
                      <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="account" />
                    </label>
                    <label class="labelbox" for>
                      <input type="password" placeholder="密码" v-model="password" />
                    </label>
                  </div>
                  <!-- 错误提示 -->
                  <div class="err_tip"></div>
                  <!-- 提交按钮 -->
                  <div class="sub">
                    <input class="btnadpt" type="button" value="登录" @click="login" />
                  </div>
                  <!-- 其他方式登录 -->
                  <div class="other_panel">
                    <span class="sms_link">
                      <router-link to="/login/checkPhone" class="login_type_link">手机短信登录/注册</router-link>
                    </span>
                    <div class="reverse">
                      <div class="n_links_area">
                        <router-link to="/login/register" class="outer-link">立即注册</router-link>
                        <span>|</span>
                        <a href class="outer-link">忘记密码？</a>
                      </div>
                    </div>
                    <div class="other_login_type">
                      <fieldset class="oth_type_tit">
                        <legend class="oth_type_txt">其他方式登录</legend>
                      </fieldset>
                      <div class="sns-login-links">
                        <a
                          class="icon_type btn_qq sns-login-link"
                          data-type="qq"
                          href="/pass/sns/login/auth?appid=100284651&amp;&amp;callback=https%3A%2F%2Fshopapi.io.mi.com%2Fapp%2Fshop%2Fauth%3Flogid%3D1593341755.223089979%26sign%3D5e5e2c4651d61103d8fad0dbba6bf0bd%26followup%3Dhttps%253A%252F%252Fwww.xiaomiyoupin.com%252Fcart&amp;sid=miotstore"
                          title="QQ登录"
                          target="_blank"
                        >
                          <i class="btn_sns_icontype icon_default_qq"></i>
                        </a>
                        <a
                          class="icon_type btn_weibo sns-login-link"
                          data-type="weibo"
                          href="/pass/sns/login/auth?appid=2996826273&amp;&amp;callback=https%3A%2F%2Fshopapi.io.mi.com%2Fapp%2Fshop%2Fauth%3Flogid%3D1593341755.223089979%26sign%3D5e5e2c4651d61103d8fad0dbba6bf0bd%26followup%3Dhttps%253A%252F%252Fwww.xiaomiyoupin.com%252Fcart&amp;sid=miotstore"
                          title="微博登录"
                          target="_blank"
                        >
                          <i class="btn_sns_icontype icon_default_weibo"></i>
                        </a>
                        <a
                          class="icon_type btn_alipay sns-login-link"
                          data-type="alipay"
                          href="/pass/sns/login/auth?appid=2088011127562160&amp;&amp;callback=https%3A%2F%2Fshopapi.io.mi.com%2Fapp%2Fshop%2Fauth%3Flogid%3D1593341755.223089979%26sign%3D5e5e2c4651d61103d8fad0dbba6bf0bd%26followup%3Dhttps%253A%252F%252Fwww.xiaomiyoupin.com%252Fcart&amp;sid=miotstore"
                          title="支付宝登录"
                          target="_blank"
                        >
                          <i class="btn_sns_icontype icon_default_alipay"></i>
                        </a>
                        <a
                          class="icon_type btn_weixin sns-login-link"
                          data-type="weixin"
                          href="/pass/sns/login/auth?appid=wxxmzh&amp;scope=snsapi_login&amp;callback=https%3A%2F%2Fshopapi.io.mi.com%2Fapp%2Fshop%2Fauth%3Flogid%3D1593341755.223089979%26sign%3D5e5e2c4651d61103d8fad0dbba6bf0bd%26followup%3Dhttps%253A%252F%252Fwww.xiaomiyoupin.com%252Fcart&amp;sid=miotstore"
                          title="微信登录"
                          target="_blank"
                        >
                          <i class="btn_sns_icontype icon_default_weixin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部FOOTER -->
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">简体</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">繁体</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">English</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">常见问题</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">隐私政策</a>
      </div>
      <p class="copyright">
        小米公司版权所有-京ICP备10046444-
        <a>
          <span>
            <img src="../assets/img/ghs.png" alt />
          </span>京公网安备11010802020134号
        </a>-京ICP证110507号
      </p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import { Message } from "element-ui";
import md5 from "blueimp-md5";
import API from "../api/login";
export default {
  name: "login",
  data() {
    return {
      account: "",
      password: "",
      userId: ""
    };
  },
  methods: {
    checkAccount() {
      //用户名 手机
      let argArr = [
        /^((\w{2,20})|([\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}))$/,
        /^1\d{10}$/
      ];
      return argArr.some(item => {
        return item.test(this.account);
      });
    },
    checkPassWord() {
      return /^\w{6,16}$/.test(this.password);
    },
    login() {
      let { account, password } = this;
      if (!this.checkAccount() || !this.checkPassWord()) {
        this.$message.error("请输入合法的账号和密码！");
        return;
      }
      password = md5(password);
      API.userLogin({ account, password }).then(res => {
        console.log(res);
        console.log(res.code);
        if (res.code == 1) {
          Message.error({
            message: '账号和密码不匹配，请仔细填写!',
            duration: 2000
          });
          return;
        }
        // console.log(this.$cookie+'hahah')
        //Session会话，需要把浏览器关掉，Session缓冲才会删掉
        // console.log( this.$cookie);
        this.$cookie.set("userId", res.data.id, { expires: "Session" });
        this.saveUserName(res.data.name);
        // console.log(1);
        // this.$router.push({
        //   name: "Product",
        //   params: {
        //     id: res.data.id
        //   }
        // });
        // this.$router.push('/cart')
        // location.href = location.origin;
        window.location.href = "/#/";
      });
    },
    ...mapActions(["saveUserName"])
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  // min-height: 100%;
  height: auto;
  background: #f5f5f5;
  .container {
    width: 100%;
    padding-bottom: 80px;
    .main {
      width: 100%;
      padding-top: 130px;
      .context {
        position: relative;
        width: 100%;
        min-width: 400px;
        min-height: 480px;
        background-color: #fff;
        max-width: 854px;
        margin: 0 auto 20px;

        background: #fff;
        .loginheader {
          .header_title {
            padding-top: 25px;
            .milogo {
              width: 49px;
              height: 48px;
              margin: 0 auto;
              display: block;
            }
            .log_title {
              font-size: 22px;
              padding: 15px 355px 0px;
              color: #333;
              font-weight: normal;
            }
            .site_info {
              padding-top: 10px;
            }
          }
        }
        .login_context {
          .login_area {
            width: 358px;
            margin: 0 auto;
            padding-bottom: 20px;
            .loginbox {
              .lg_input {
                position: relative;
                .labelbox {
                  input {
                    margin-bottom: 14px;
                    border: 1px solid #e0e0e0;
                    height: 22px;
                    line-height: 22px;
                    padding: 13px 16px 13px 14px;
                    display: block;
                    width: 326px;
                  }
                }
              }
              .sub {
                padding-top: 10px;
                .btnadpt {
                  background-color: #ff6700;
                  width: 100%;
                  height: 50px;
                  line-height: 50px;
                  display: block;
                  margin-bottom: 14px;
                  text-align: center;
                  font-size: 14px;
                  color: #fff;
                  cursor: pointer;
                  border: 0;
                }
              }
              .other_panel {
                margin-top: -5px;
                .sms_link {
                  float: left;
                  .login_type_link {
                    color: #ff6700;
                    border: 0 none;
                    height: auto;
                    line-height: normal;
                    margin: 0;
                    font-size: 14px;
                  }
                }
                .reverse {
                  .n_links_area {
                    text-align: center;
                    color: #e0e0e0;
                    float: right;
                    a {
                      font-size: 14px;
                      color: #757575;
                    }
                    span {
                      padding-left: 5px;
                      padding-right: 5px;
                    }
                  }
                }
                .other_login_type {
                  padding-top: 50px;
                  text-align: center;
                  .oth_type_tit {
                    border-top: 1px solid #e0e0e0;
                    padding-top: 10px;
                    border: 0;
                    .oth_type_txt {
                      font-size: 14px;
                      color: #b0b0b0;
                      margin: 0 auto;
                      text-align: center;
                    }
                  }
                  .sns-login-links {
                    padding-top: 5px;
                    text-align: center;
                    .icon_type {
                      width: 30px;
                      height: 30px;
                      margin: 0 12px;
                      display: inline-block;
                      border-radius: 50%;
                      .btn_sns_icontype {
                        width: 18px;
                        height: 18px;
                        display: block;
                        margin: 4px auto 0;
                        background: url(../assets/img/icons_type.png);
                      }
                    }
                    .btn_qq {
                      background-color: #0288d1;

                      .icon_default_qq {
                        background-position: -19px 0;
                      }
                    }
                    .btn_weibo {
                      background-color: #d32f2f;
                      .icon_default_weibo {
                        background-position: -38px 0;
                      }
                    }
                    .btn_alipay {
                      background-color: #0ae;
                      .icon_default_alipay {
                        margin-top: 6px;
                        margin-left: 4px;
                        background-position: -57px 0;
                        width: 25px;
                      }
                    }
                    .btn_weixin {
                      background-color: #00d20d;
                      .icon_default_weixin {
                        margin-top: 6px;
                        background-position: -83px 0;
                        width: 24px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .footer {
    height: 80px;
    text-align: center;
    font-size: 14px;
    .footer-link {
      display: flex;
      padding: 0 555px;
      justify-content: space-between;
      align-items: center;
      a {
        color: #757575;
      }
    }
    .copyright {
      padding-top: 10px;
    }
  }
}
</style>