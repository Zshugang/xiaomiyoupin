<template>
  <div class="registerBox">
    <div class="registerContainer">
      <div class="container">
        <div class="context">
          <div class="reg_frame">
            <div class="external_logo_area">
              <a class="milogo" href="javascript:void(0)"></a>
            </div>
            <div class="title-item t_c">
              <h4 class="title_big30">注册小米账号</h4>
            </div>
            <div>
              <div class="regbox">
                <div class="phone_step1">
                  <h4 class="tit_normal">国家/地区</h4>
                  <div class="listwrap">
                    <div class="listtit">
                      <div class="tits c_b">
                        <p class="result-select-regions">中国</p>
                        <i class="icon_cirarr" @mouseenter="getout"></i>
                      </div>
                    </div>
                    <!-- 选取地区下拉菜单 -->
                    <div
                      class="country-container-panel"
                      v-if="flag===0?false:true"
                      @mouseleave="getin"
                    >
                      <div class="country_container">
                        <div class="search-code">
                          <i class="icon_search"></i>
                          <input type="text" class="search-code-input" />
                        </div>
                        <div class="country-code">
                          <div class="countrycode-container-A">
                            <div class="header">A</div>
                            <ul class="list">
                              <li class="record">
                                <span class="record-country">阿富汗</span>
                              </li>
                              <li class="record">
                                <span class="record-country">阿尔巴尼亚</span>
                              </li>
                              <li class="record">
                                <span class="record-country">阿尔及利亚</span>
                              </li>
                              <li class="record">
                                <span class="record-country">美属萨摩亚</span>
                              </li>
                              <li class="record">
                                <span class="record-country">安道尔</span>
                              </li>
                              <li class="record">
                                <span class="record-country">安道尔</span>
                              </li>
                              <li class="record">
                                <span class="record-country">安哥拉</span>
                              </li>
                              <li class="record">
                                <span class="record-country">安圭拉</span>
                              </li>
                              <li class="record">
                                <span class="record-country">南极洲</span>
                              </li>
                              <li class="record">
                                <span class="record-country">安提瓜和巴布达</span>
                              </li>
                              <li class="record">
                                <span class="record-country">阿根廷</span>
                              </li>
                              <li class="record">
                                <span class="record-country">亚美尼亚</span>
                              </li>
                              <li class="record">
                                <span class="record-country">阿鲁巴</span>
                              </li>
                              <li class="record">
                                <span class="record-country">澳大利亚</span>
                              </li>
                              <li class="record">
                                <span class="record-country">奥地利</span>
                              </li>
                              <li class="record">
                                <span class="record-country">阿塞拜疆</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="cancel-panel"></div>
                        <div class="navbar-panel"></div>
                      </div>
                    </div>
                    <div class="region_tip_text">成功注册帐号后，国家/地区将不能被修改</div>
                    <h4 class="tit_normal">手机号码</h4>
                    <div class="listwrap_inside_panel c_b">
                      <div class="listwrap">
                        <div class="listtit">
                          <div class="tits display_box c_b">
                            <p class="select-cycode-result">+86</p>
                            <i class="icon_arrow"></i>
                          </div>
                        </div>
                      </div>
                      <div class="inputbg">
                        <label for class="labelbox">
                          <input
                            type="tel"
                            placeholder="请输入手机号码"
                            v-model="phone"
                            @blur="checkPhone"
                          />
                        </label>
                        <div class="err_tip" v-if="tip1===0?false:true">
                          <em class="icon_error"></em>
                          <span class="error-con">手机号码格式不正确</span>
                        </div>
                        <p class="select-cycode-result">用户名</p>
                        <label for class="labelbox1">
                          <input type="name" placeholder="请输入用户名" v-model="name" @blur="checkName" />
                        </label>
                        <div class="err_tip" v-if="tip2===0?false:true">
                          <em class="icon_error"></em>
                          <span class="error-con">用户名格式不正确</span>
                        </div>
                        <p class="select-cycode-result">密 码</p>
                        <label for class="labelbox1">
                          <input
                            type="password"
                            placeholder="请输入注册密码"
                            v-model="password"
                            @blur="checkPassword"
                          />
                        </label>
                        <div class="err_tip" v-if="tip3===0?false:true">
                          <em class="icon_error"></em>
                          <span class="error-con">请输入六位以上密码</span>
                        </div>
                        <p class="select-cycode-result">支付密码</p>
                        <label for class="labelbox1">
                          <input
                            type="password"
                            placeholder="请输入支付密码"
                            v-model="passwordPay"
                            @blur="checkpasswordPay"
                          />
                        </label>
                        <div class="err_tip" v-if="tip4===0?false:true">
                          <em class="icon_error"></em>
                          <span class="error-con">请输入六位以上密码</span>
                        </div>
                      </div>
                      <!-- <div class="err_tip"></div> -->
                    </div>
                    <div class="fixed_bot">
                      <input
                        type="submit"
                        value="立即注册"
                        class="btn332 btn_reg_1 submit-step"
                        @click="register"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="privacy_box">
                <div class="msg">
                  <label class="n_checked select-privacy" for>
                    已阅读并同意：小米
                    <a
                      href="/about/protocol/agreement"
                      class="inspect_link agreement_link"
                      title="用户协议"
                      target="_blank"
                    >用户协议</a>
                    和
                    <a
                      href="/about/protocol/privacy"
                      class="inspect_link privacy_link"
                      title=" 隐私政策 "
                      target="_blank"
                    >隐私政策</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">简体</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">繁体</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">English</a>
        <span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">常见问题</a>
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
import API from "../api/login";
import { Message } from "element-ui";
export default {
  data() {
    return {
      phone: "",
      name: "",
      password: "",
      passwordPay: "",
      //0代表隐藏 1代表显示
      flag: 0,
      //错误提示
      tip1: 0,
      tip2: 0,
      tip3: 0,
      tip4: 0
    };
  },
  computed: {},
  methods: {
    checkPhone() {
      console.log(1);
      if (!/^1\d{10}$/.test(this.phone)) {
        this.tip1 = 1;
      } else {
        this.tip1 = 0;
      }
      return /^1\d{10}$/.test(this.phone);
    },
    checkName() {
      if (
        !/^((\w{2,20})|([\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}))$/.test(
          this.name
        )
      ) {
        this.tip2 = 1;
      } else {
        this.tip2 = 0;
      }
      return /^((\w{2,20})|([\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}))$/.test(
        this.name
      );
    },
    checkPassword() {
      if (!/^\w{6,16}$/.test(this.password)) {
        this.tip3 = 1;
      } else {
        this.tip3 = 0;
      }
      return /^\w{6,16}$/.test(this.password);
    },
    checkpasswordPay() {
      if (!/^\w{6,16}$/.test(this.passwordPay)) {
        this.tip4 = 1;
      } else {
        this.tip4 = 0;
      }
      return /^\w{6,16}$/.test(this.passwordPay);
    },
    getout() {
      this.flag = 1;
    },
    getin() {
      this.flag = 0;
    },
    register() {
      let { phone, name, passwordPay, password } = this;
      if (
        !this.checkPhone() ||
        !this.checkName() ||
        !this.checkPassword() ||
        !this.checkpasswordPay()
      ) {
        this.$message.warning("请您仔细核对信息，认真填写！");
        return;
      }
      API.register({ phone, name, passwordPay, password }).then(res => {
        if (res.code == 0) {
          this.$message.success(
            "注册成功，即将返回登录页重新登录！",
            // {callback:action=> {
            //  window.location.href = "/#/";
            // }}
          );
          let timer = setTimeout(() => {
              window.location.href = "/#/login";
              clearTimeout(timer)
          },500);
        } else {
          Message.error({
            message: res.codeText,
            duration: 2000
          });
        }
      });
    }
  }
  // mutation: {

  // }
};
</script>

<style lang="less" scoped>
.registerBox {
  background: #f5f5f5;
  width: 100%;
  min-height: 100%;
  height: auto;
  // display: -webkit-box;
  // -webkit-box-align: center;
  padding-top: 70px;
  font-size: 14px;
  font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", "微軟正黑體",
    "儷黑 Pro", sans-serif;
  .registerContainer {
    .container {
      padding-bottom: 80px;
      .context {
        width: 854px;
        margin: 0 auto;
        padding-bottom: 10px;
        .reg_frame {
          border: none;
          border-radius: 0;
          background: #fff;
          padding: 0px 34px 30px;
          min-height: 400px;
          .external_logo_area {
            padding-bottom: 40px;
            .milogo {
              width: 49px;
              height: 48px;
              margin: 0 auto;
              display: block;
              cursor: default;
              background-image: url("../assets/img/milogo.png");
            }
          }
          .title-item {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
            .title_big30 {
              font-size: 30px;
              font-weight: normal;
              text-align: center;
              color: #333;
              line-height: 1.5;
            }
          }
          .regbox {
            width: 332px;
            padding: 30px 0;
            line-height: 20px;
            margin: 0 auto;
            .phone_step1 {
              .tit_normal {
                padding-bottom: 5px;
                color: #333;
                font-weight: normal;
              }
              .listwrap {
                padding-bottom: 15px;
                position: relative;
                .listtit {
                  .c_b {
                    zoom: 1;
                  }
                  .c_b:before {
                    content: "";
                    display: block;
                  }
                  .c_b:after {
                    clear: both;
                    content: "";
                    display: block;
                  }
                  .tits {
                    height: 40px;
                    padding-left: 14px;
                    line-height: 40px;
                    display: inline-block;
                    vertical-align: middle;
                    border: 1px solid #e8e8e8;
                    color: #555;
                    cursor: pointer;
                    .result-select-regions {
                      text-align: left; //为了让里面的字靠左
                      float: left;
                      width: 275px;
                      border-right: 1px solid #e8e8e8;
                      cursor: pointer;
                    }
                    .icon_cirarr {
                      float: right;
                      background: url(../assets/img/icon_user.png);
                      width: 16px;
                      height: 16px;
                      margin: 11px 12px 0 12px;
                    }
                  }
                }
                .country-container-panel {
                  width: 100%;
                  background: #fff;
                  height: 270px;
                  line-height: 30px;
                  border: 1px solid #e8e8e8;
                  box-sizing: border-box;
                  overflow-x: hidden;
                  overflow-y: auto;
                  position: absolute;
                  left: 0;
                  top: 41px;
                  z-index: 98;
                  .header {
                    cursor: default;
                    background: #fcdecc;
                    padding-left: 10px;
                    margin-bottom: 6px;
                    line-height: 30px;
                    color: #ef5b00 !important;
                    text-align: left;
                  }
                  .record-country {
                    float: left;
                    max-width: 74%;
                    color: #000;
                    cursor: pointer;
                  }
                  .record {
                    padding: 0 10px;
                    line-height: 39px;
                    clear: both;
                    overflow: hidden;
                    color: #000;
                    border-bottom: 1px solid #e0e0e0;
                    // *zoom: 1;
                    cursor: point;
                    span {
                      height: 39px;
                      overflow: hidden;
                    }
                  }
                  .search-code {
                    padding: 10px;
                    .search-code-input {
                      width: 274px;
                      height: 22px;
                      line-height: 22px;
                      padding: 5px 10px 5px 10px;
                      display: block;
                      border: 1px solid #e0e0e0;
                    }
                  }
                  .country-container {
                    height: 100%;
                    width: 313.2px;
                  }
                }
                .region_tip_text {
                  margin-top: 5px;
                  margin-bottom: 15px;
                  text-align: left;
                }
                .tit_normal {
                  padding-bottom: 5px;
                  color: #333;
                  font-weight: normal;
                  text-align: left;
                }
                .listwrap_inside_panel {
                  .listwrap {
                    float: left;
                    padding-bottom: 15px;
                    position: relative;
                    .listtit {
                      .tits {
                        width: 54px;
                        text-align: center;
                        padding: 0 9px;
                        height: 40px;
                        line-height: 40px;
                        display: inline-block;
                        vertical-align: middle;
                        border: 1px solid #e8e8e8;
                        color: #555;
                        cursor: pointer;
                        p {
                          width: auto;
                          border-right: 0 none;
                          float: left;
                          cursor: pointer;
                        }
                        .icon_arrow {
                          float: left;
                          margin: 17px 0 0 10px;
                          width: 0;
                          height: 0;
                          line-height: 0;
                          font-size: 0;
                          border-width: 5px;
                          border-style: solid;
                          border-color: #9d9d9d transparent transparent
                            transparent;
                        }
                      }
                    }
                  }
                  .inputbg {
                    padding-bottom: 15px;
                    input {
                      width: 236px;
                    }
                    .labelbox {
                      height: 41px;
                      line-height: 42px;
                      display: inline-block;
                      margin-left: -1px;
                      position: relative;
                      z-index: 3;
                      outline: 0 none;
                      border: 1px solid #e8e8e8;
                      margin-bottom: 15px;
                      input {
                        vertical-align: center;
                        border: 0;
                        height: 20px;
                        line-height: 20px;
                        padding: 10px;
                        display: inline-block;
                      }
                    }
                    .err_tip {
                      margin-bottom: 5px;
                      line-height: 20px;
                      color: #ff6700;
                      .icon_error {
                        width: 14px;
                        height: 14px;
                        margin: -1px 5px 0 0;
                        overflow: hidden;
                        display: inline-block;
                        vertical-align: middle;
                        background: url(../assets/img/sprite_login.gif);
                        background-position: 0 -69px;
                      }
                      span {
                        font-size: 14px;
                        vertical-align: middle;
                      }
                    }
                    .labelbox1 {
                      height: 41px;
                      line-height: 42px;
                      display: inline-block;
                      margin-left: -1px;
                      position: relative;
                      z-index: 3;
                      outline: 0 none;
                      border: 1px solid #e8e8e8;
                      margin-bottom: 15px;
                      input {
                        width: 310px;
                        vertical-align: center;
                        border: 0;
                        height: 20px;
                        line-height: 20px;
                        padding: 10px;
                        display: inline-block;
                      }
                    }
                  }
                }
                .fixed_bot {
                  .btn_reg_1 {
                    background-color: #ff6700;
                    margin-top: 15px;
                    border: 1px solid rgba(186, 186, 186, 0.3);
                    // *border: 0 none;
                    color: #fff;
                  }
                  .btn332 {
                    width: 330px;
                    height: 42px;
                    margin: 0 auto;
                    line-height: 42px;
                    text-align: center;
                    font-size: 14px;
                    display: block;
                    cursor: pointer;
                    border: 1px solid #e8e8e8;
                    overflow: hidden;
                  }
                }
              }
            }
          }
          .privacy_box {
            text-align: center;
            padding-top: 40px;
            .msg {
              color: #9d9d9d;
              a {
                color: #333;
                font-weight: bold;
              }
              .n_checked {
                padding: 10px 0;
                cursor: pointer;
                display: inline-block;
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
      padding: 0 620px;
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