<template>
  <div>
    <info-top></info-top>
    <info-header></info-header>
    <div class="detail">
      <div class="container">
        <!-- 上部分 -->
        <div class="header-detail">
          <div class="banner">
            <div class="main fl">
              <img
                :src="fiveimages[0]"
                alt
              />
            </div>
            <div class="thumb fr">
              <div class="thumb-container" style="top:0px">
                <div
                  class="thumb-pic"
                  v-for="(item,index) in fiveimages"
                  :key="index"
                  style="border-color:border-color: rgb(236, 236, 236);"
                >
                  <img :src="item" alt />
                </div>
              </div>
              <div class="thumb-arrow-up">
                <a class="m-icons m-icons-up" href="javascript:;"></a>
              </div>
              <div class="thumb-arrow-down">
                <a class="m-icons m-icons-down" data-src href="javascript:;"></a>
              </div>
            </div>
          </div>
          <div class="sku-container">
            <div class="name">
              <div class="good-name fl">{{dec.title}}</div>
            </div>
            <div class="summary">{{dec.detail.text}}</div>
            <div class="promotion-box"></div>
            <div class="card">
              <div class="price-line">
                <h5 class="sku-title">售价</h5>
                <div class="price">
                  <span class="money-symbol">￥</span>
                  <span class="value">{{dec.discount}}</span>
                  <span class="money-symbol">起</span>
                  <span class="market-price">￥{{dec.discount+200}}</span>
                  <span class="m-sale-tag">特价</span>
                </div>
              </div>
              <div class="service-line">
                <h5 class="sku-title">服务</h5>
                <div class="introduce-container">
                  <p class="icon">!</p>
                  <div class="content">
                    <div
                      class="cardmodal-outer-container"
                      style="width: 500px; left: -20px; top: -20px;"
                    >
                      <div class="inner-container">
                        <div class="container" style="width: 494px;">
                          <div class="content-main">
                            <div class="text-item">
                              <p class="text-title">满99包邮</p>
                              <p class="text-content">本商品满99元可包邮，不足99元收取运费10元</p>
                            </div>
                            <div class="text-item">
                              <p class="text-title">三方店铺</p>
                              <p
                                class="text-content"
                              >本商品为有品精选精品，第三方品牌方为实际销售方，小米有品精心挑选，严格把关，为您精选品质上乘的精品商品。</p>
                            </div>
                            <div class="text-item">
                              <p class="text-title">由小米有品提供配送服务，上海新案数字科技有限公司提供售后</p>
                              <p class="service-item-qualification">查看商家资质</p>
                            </div>
                            <div class="text-item">
                              <p class="text-title">7天无理由</p>
                              <p class="text-content">本商品支持7天无理由退货</p>
                            </div>
                            <div class="text-item">
                              <p class="text-title">平台运费说明</p>
                              <p class="text-content">由小米平台发货的小米自营商品,单笔满99元免运费,不满99元收取10元运费;</p>
                              <p class="text-content">有品自营产品、有品平台三方产品，单笔订单满99元免运费，不满99元收取10元运费;</p>
                              <p class="text-content">特殊商品需要单独收取运费,具体以实际结算金额为准;</p>
                              <p class="text-content">优惠券不能抵扣运费。</p>
                            </div>
                            <div class="text-item">
                              <p class="text-title">退换货运费声明</p>
                              <p class="text-content">非质量问题退换货,运费不予返还;</p>
                              <p class="text-content">因质量问题退换货,运费予以返还,多件产品只退部分产品时,运费按比例返还;</p>
                              <p class="text-content">电视等大件商品,无质量问题退货产生的运费由购买者承担,从退款中直接扣除。</p>
                              <p class="text-content">包邮订单申请退款，剩余订单不达包邮门槛，将补扣10元运费。</p>
                            </div>
                            <div class="text-item">
                              <p class="text-title">企业信息</p>
                              <p class="text-content">企业名称： 上海新案数字科技有限公司</p>
                              <p class="text-content">企业执照注册号： 91310118MA1JLHQR3W</p>
                              <p class="text-content">企业地址： 上海市闵行区紫星路588号2幢2220室</p>
                              <p class="text-content">企业电话： 021-61890899</p>
                              <p class="text-content">营业期限： 2016年09月30日至2026年09月29日</p>
                              <p
                                class="text-content"
                              >经营范围： 从事信息科技、汽车科技、电子科技、机电科技、通信科技、计算机科技、环保科技领域内的技术开发、技术咨询、技术服务、技术转让，计算机网络工程，计算机、软硬件及辅助设备、办公用品、电子产品、汽摩配件、通讯设备、仪器仪表、电子元器件、机电设备的销售，从事货物及技术的进出口业务，电子商务（不得从事金融业务），设计、制作、代理、发布各类广告，自由设备租赁，商务咨询。【依法须经批准的项目，经相关部门批准后方可开展经验活动】</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="size">
                        <div class="content-main">
                          <div class="text-item">
                            <p class="text-title">满99包邮</p>
                            <p class="text-content">本商品满99元可包邮，不足99元收取运费10元</p>
                          </div>
                          <div class="text-item">
                            <p class="text-title">三方店铺</p>
                            <p
                              class="text-content"
                            >本商品为有品精选精品，第三方品牌方为实际销售方，小米有品精心挑选，严格把关，为您精选品质上乘的精品商品。</p>
                          </div>
                          <div class="text-item">
                            <p class="text-title">由小米有品提供配送服务，上海新案数字科技有限公司提供售后</p>
                            <p class="service-item-qualification">查看商家资质</p>
                          </div>
                          <div class="text-item">
                            <p class="text-title">7天无理由</p>
                            <p class="text-content">本商品支持7天无理由退货</p>
                          </div>
                          <div class="text-item">
                            <p class="text-title">平台运费说明</p>
                            <p class="text-content">由小米平台发货的小米自营商品,单笔满99元免运费,不满99元收取10元运费;</p>
                            <p class="text-content">有品自营产品、有品平台三方产品，单笔订单满99元免运费，不满99元收取10元运费;</p>
                            <p class="text-content">特殊商品需要单独收取运费,具体以实际结算金额为准;</p>
                            <p class="text-content">优惠券不能抵扣运费。</p>
                          </div>
                          <div class="text-item">
                            <p class="text-title">退换货运费声明</p>
                            <p class="text-content">非质量问题退换货,运费不予返还;</p>
                            <p class="text-content">因质量问题退换货,运费予以返还,多件产品只退部分产品时,运费按比例返还;</p>
                            <p class="text-content">电视等大件商品,无质量问题退货产生的运费由购买者承担,从退款中直接扣除。</p>
                            <p class="text-content">包邮订单申请退款，剩余订单不达包邮门槛，将补扣10元运费。</p>
                          </div>
                          <div class="text-item">
                            <p class="text-title">企业信息</p>
                            <p class="text-content">企业名称： 上海新案数字科技有限公司</p>
                            <p class="text-content">企业执照注册号： 91310118MA1JLHQR3W</p>
                            <p class="text-content">企业地址： 上海市闵行区紫星路588号2幢2220室</p>
                            <p class="text-content">企业电话： 021-61890899</p>
                            <p class="text-content">营业期限： 2016年09月30日至2026年09月29日</p>
                            <p
                              class="text-content"
                            >经营范围： 从事信息科技、汽车科技、电子科技、机电科技、通信科技、计算机科技、环保科技领域内的技术开发、技术咨询、技术服务、技术转让，计算机网络工程，计算机、软硬件及辅助设备、办公用品、电子产品、汽摩配件、通讯设备、仪器仪表、电子元器件、机电设备的销售，从事货物及技术的进出口业务，电子商务（不得从事金融业务），设计、制作、代理、发布各类广告，自由设备租赁，商务咨询。【依法须经批准的项目，经相关部门批准后方可开展经验活动】</p>
                          </div>
                        </div>
                      </div>-->
                    </div>
                  </div>
                </div>
                <div class="service">
                  <div class="service-item">
                    <a class="m-icons m-icons-service" data-src href="javascript:;"></a>
                    <span class="service-item-text">满99包邮</span>
                  </div>
                  <div class="service-item">
                    <a class="m-icons m-icons-service" data-src href="javascript:;"></a>
                    <span class="service-item-text">三方店铺</span>
                  </div>
                  <div class="service-item">
                    <a class="m-icons m-icons-service" data-src href="javascript:;"></a>
                    <span class="service-item-text">7天无理由</span>
                  </div>
                  <div class="service-item">
                    <a class="m-icons m-icons-service" data-src href="javascript:;"></a>
                    <span class="service-item-text">有品配送</span>
                  </div>
                  <div class="service-item">
                    <a class="m-icons m-icons-service" data-src href="javascript:;"></a>
                    <span class="service-item-text">由小米有品提供配送服务，上海新案数字科技有限公司提供售后</span>
                    <span class="service-item-qualification">(查看商家资质)</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="address-line">
              <h5 class="sku-title">配送区域</h5>
              <div class="address">
                <div>
                  <span>北京 北京市 海淀区</span>
                  <span>&nbsp;</span>
                  <a>修改</a>
                </div>
              </div>
            </div>
            <div>
              <div style="overflow: hidden; padding: 0px 0px 12px;">
                <div class="size-line clearfix">
                  <h5 class="sku-title">规格</h5>
                  <div class="size-container">
                    <div class="tag-item-onSaled">标配</div>
                    <div class="tag-item-onSaled">套餐一</div>
                    <div class="tag-item-onSaled">套餐二</div>
                  </div>
                </div>
              </div>
              <div class="count-line">
                <h5 class="sku-title count-title">数量</h5>
                <div class="count-container">
                  <div>
                    <div class="minus-btn">
                      <a class="m-icons m-icons-reduce" data-src href="javascript:;">-</a>
                    </div>
                    <input type="text" value="1" class="count-input" />
                    <div class="minus-btn-active">
                      <a class="m-icons m-icons-add-active" data-src href="javascript:;">+</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-line">
              <div class="buy-btn-container">
                <a class="m-btns m-btn-middle m-btn-brown" href="javascript:;">加入购物车</a>
                <a class="m-btns m-btn-middle m-btn-brown-stroke" href="javascript:;">立即购买</a>
              </div>
              <div class="favor-btn">
                <div>
                  <a class="m-icons m-icons-collection" data-src href="javascript:;"></a>
                  <p>收藏</p>
                </div>
              </div>
              <div class="faver-service-btn favor-btn">
                <div>
                  <a class="m-icons m-icons-service-detail" data-src href="javascript:;"></a>
                  <p>客服</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 下部分 -->
        <div class="detail-content">
          <!-- 有边详情 -->
          <div class="info-right fl">
            <div class="nav-title">
              <ul class="info-nav clearfix">
                <li
                  class="info-nav-item"
                  style="border-right-color: rgb(204, 204, 204); width: 128px;"
                >商品详情</li>
                <li
                  class="info-nav-item"
                  style="border-right-color: rgb(204, 204, 204); width: 128px;"
                >评论</li>
                <li
                  class="info-nav-item"
                  style="border-right-color: transparent; width: 128px;"
                >常见问题</li>
              </ul>
              <div class="nav-arr-container">
                <div class="nav-arr" style="left: 0px; width: 128px;"></div>
              </div>
            </div>
            <div class="main-body">
              <div>
                <img
                  v-for="(item,index) in infoImages "
                  :key="index"
                  :src="item"
                  style="width: 100%;display:block"
                />
              </div>
            </div>
          </div>
          <!-- 左边相关推介 -->
          <div class="best">
            <div class="flagship">
              <div class="icon-container">
                <img
                  src="https://img.youpin.mi-img.com/youpinoper/shop_c880632eda103f707db10d931c4d8371.png"
                  height="100%"
                />
                <div class="title-container">
                  <div class="title-content">
                    <h6 title="70迈">70迈</h6>
                  </div>
                  <p>随心畅驾，随行千里</p>
                </div>
                <div class="enter-btn">
                  <a class="m-btns m-btn-xs m-btn-brown" href="javascript:;">进入</a>
                </div>
              </div>
            </div>
            <h2 class="recommend-title">
              <span class="special-line"></span>相关推荐
              <span class="special-line"></span>
            </h2>
            <info-recommend :picid="id"></info-recommend>
          </div>
        </div>
      </div>
    </div>
    <!-- 浮层 -->
    <info-floating></info-floating>
    <info-footer></info-footer>
  </div>
</template>

<script>
import infoTop from "../components/Top.vue";
import infoFooter from "../components/Footer.vue";
import infoHeader from "../components/Header.vue";
import infoRecommend from "../components/detail/Recommend.vue";
import infoFloating from "../components/detail/FloatingLayer";
import API from "../api/product";
export default {
  data() {
    return {
      id: this.$route.params.id,
      fiveimages: [],
      infoImages: [],
      dec: {}
    };
  },
  components: {
    infoTop,
    infoFooter,
    infoHeader,
    infoRecommend,
    infoFloating
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      console.log(this.id);
      console.log(this.productList);
      // axios
      //   .all([API.productInfo(this.id), this.$store.dispatch("getProductData")])
      //   .then(
      //     axios.spread(function(val1, val2) {
      //       console.log(val1.data.images)
      //       let value1 = val1.data.images;
      //       this.fiveimages = value1;
      //       // this.infoImages = val1.data.detail.images;
      //       // this.pic = val1.data.pic;
      //     })
      //   );

      API.productInfo(this.id).then(res => {
        console.log(res);
        console.log(res.data);
        this.fiveimages = res.data.images;
        this.infoImages = res.data.detail.images;
        this.dec = res.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  box-sizing: content-box;
  width: 100%;
  min-height: 285px;
  padding-top: 60px;
  padding-bottom: 100px;
  overflow: hidden;
  border-top: 1px solid #e7e7e7;
  .container {
    min-height: inherit;
    position: relative;
    width: 1080px;
    margin: 0 auto;
    .header-detail {
      width: 100%;
      min-height: 285px;
      padding-top: 60px;
      padding-bottom: 100px;
      overflow: hidden;
      border-top: 1px solid #e7e7e7;
      .banner {
        margin-right: 46px;
        width: 465px;
        height: 374px;
        float: left;
        .main {
          width: 372px;
          height: 372px;
          background-color: #f4f4f4;
          border: 1px solid #ececec;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .fl {
          float: left;
        }
        .fr {
          float: right;
        }
        .thumb {
          width: 85px;
          height: 100%;
          position: relative;
          overflow: hidden;
          .thumb-container {
            position: absolute;
            left: 0;
            transition: top 0.3s ease;
            .thumb-pic {
              width: 83px;
              height: 83px;
              margin-bottom: 11px;
              border-width: 1px;
              border-style: solid;
              background-color: #f4f4f4;
              transition: border 0.5s cubic-bezier(0, 1, 0.5, 1);
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .thumb-arrow-up {
            position: absolute;
            top: 0;
            left: 0;
            .m-icons-up {
              width: 85px;
              height: 16px;
              background-position: 0 -271px;
            }
          }
          .thumb-arrow-down {
            position: absolute;
            top: 358px;
            left: 0;
            .m-icons-down {
              width: 85px;
              height: 16px;
              background-position: 0 -211px;
            }
          }
          // .m-icons {
          //   background-image: url(../assets/img/yp-icons-cart.png);
          //   background-size: 85px 2585px;
          //   display: inline-block;
          // }
        }
      }
      //公共样式
      .m-icons {
        background-image: url(../assets/img/yp-icons.png);
        background-size: 85px 2585px;
        display: inline-block;
      }
      .m-sale-tag,
      .m-tag,
      .m-tag-hot {
        display: inline-block;
      }
      .sku-container .sku-content,
      .sku-container .sku-title {
        float: left;
        font-size: 12px;
        font-weight: 400;
        line-height: 32px;
        vertical-align: bottom;
      }
      .sku-container .card .service-line .service .service-item .m-icons,
      .sku-container .card .service-line .service .service-item span {
        vertical-align: middle;
      }
      .sku-container
        .card
        .service-line
        .service
        .service-item
        .service-item-text {
        margin-left: 8px;
        line-height: 16px;
      }
      .add-btn,
      .minus-btn {
        float: left;
        width: 34px;
        height: 30px;
        border: 1px solid #d6d6d6;
        line-height: 28px;
        text-align: center;
        color: #d6d6d6;
        .m-icons-reduce {
          width: 30px;
          height: 30px;
          background-position: 0 -1406px;
        }
        .count-input {
          float: left;
          width: 60px;
          height: 30px;
          padding: 0;
          border: 1px solid #d6d6d6;
          border-left-width: 0;
          border-right-width: 0;
          text-align: center;
          font-weight: 700;
          font-size: 14px;
          color: #333;
          outline: none;
        }
      }
      .add-btn-active,
      .minus-btn-active {
        float: left;
        width: 34px;
        height: 30px;
        border: 1px solid #d6d6d6;
        line-height: 28px;
        text-align: center;
        color: #d6d6d6;
      }

      // 以上为公共样式
      .sku-container {
        width: 561px;
        float: left;
        .name {
          margin-bottom: 4px;
          margin-right:10px;
          .good-name {
            vertical-align: middle;
            line-height: 26px;
            font-size: 20px;
            color: #333;
            float: left;
          }
        }
        .summary {
          margin-left: 10px;
          width: 84%;
          line-height: 18px;
          font-size: 12px;
          color: #999;
        }
        .promotion-box {
          margin-bottom: 18px;
        }
        .card {
          margin-bottom: 26px;
          padding: 10px;
          background-color: #f9f9f9;
          .price-line {
            margin-top: 12px;
            margin-bottom: 12px;
            height: 37px;
            overflow: hidden;
            vertical-align: bottom;
            line-height: 40px;
            font-size: 30px;
            .sku-title {
              margin-right: 10px;
              width: 48px;
            }
            .price {
              color: #c00000;
              line-height: 30px;
              overflow: hidden;
              .money-symbol {
                margin-right: 3px;
                font-size: 14px;
                vertical-align: 0;
              }
              .value {
                font-size: 30px;
                vertical-align: 0;
              }
              .money-symbol {
                margin-right: 3px;
                font-size: 14px;
                vertical-align: 0;
              }
              .market-price {
                margin-left: 14px;
                font-size: 12px;
                vertical-align: 0;
                text-decoration: line-through;
                color: #ccc;
              }
              .m-sale-tag {
                height: 20px;
                line-height: 20px;
                padding: 0 6px;
                margin-left: 8px;
                background-color: #c00000;
                color: #fff;
                font-size: 12px;
                vertical-align: 2px;
                border-radius: 2px;
              }
            }
          }
          .service-line {
            margin-bottom: 12px;
            vertical-align: bottom;
            line-height: 24px;
            font-size: 24px;
            .introduce-container {
              position: relative;
              overflow: visible;
              margin-left: -30px;
              cursor: pointer;
              .icon {
                float: left;
                // -webkit-box-sizing: border-box;
                box-sizing: border-box;
                margin-top: 9px;
                border: 1px solid #c00000;
                border-radius: 50%;
                width: 12px;
                height: 12px;
                line-height: 12px;
                text-align: center;
                font-size: 10px;
                color: #c00000;
                margin-left: -30px;
                cursor: pointer;
              }
              .content {
                display: none;
                z-index: 10000;
                .cardmodal-outer-container {
                  position: relative;
                  overflow: visible;
                  .inner-container {
                    position: absolute;
                    // -webkit-box-shadow: 0 0 24px rgba(0,0,0,.1);
                    box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e7e7e7;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    background: #fff;
                    .container {
                      overflow-y: auto;
                      overflow-x: hidden;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      padding-left: 17px;
                      padding-right: 17px;
                      .content-main {
                        max-height: 350px;
                        .text-item {
                          margin-top: 10px;
                          .text-title {
                            font-size: 14px;
                            color: #000;
                          }
                          .text-content {
                            font-size: 12px;
                            color: #666;
                          }
                        }
                      }
                    }
                  }
                  .size {
                    visibility: hidden;
                    z-index: -10;
                    overflow: hidden;
                    .content-main {
                      max-height: 350px;
                      .text-item {
                        margin-top: 10px;
                        .text-title {
                          font-size: 14px;
                          color: #000;
                        }
                        .text-content {
                          font-size: 12px;
                          color: #666;
                        }
                      }
                    }
                  }
                }
              }
            }
            .service {
              overflow: hidden;
              .service-item {
                float: left;
                overflow: hidden;
                min-height: 24px;
                margin-right: 13px;
                line-height: 24px;
                font-size: 16px;
                .m-icons-service {
                  width: 16px;
                  height: 16px;
                  background-position: 0 -231px;
                }
              }
            }
          }
        }
        .address-line {
          overflow: hidden;
          padding: 0 10px 26px;
          .sku-title {
            line-height: 14px;
          }
          .address {
            font-size: 14px;
            float: left;
            line-height: 14px;
            margin-right: 10px;
            font-weight: 400;
            a {
              margin-left: 10px;
              color: #666;
            }
          }
        }
        .btn-line {
          height: 52px;
          position: relative;
        }
        .sku-title {
          margin-right: 10px;
          width: 48px;
        }
        .size-line {
          margin-bottom: 14px;
          padding: 0 10px;
          .size-container {
            margin-bottom: -14px;
            float: left;
            width: 473px;
            overflow: hidden;
            .tag-item-onSaled {
              border: 1px solid #d6d6d6;
              float: left;
              margin-right: 14px;
              // -webkit-box-sizing: border-box;
              box-sizing: border-box;
              padding: 4px 20px;
              color: #333;
              line-height: 22px;
              font-size: 14px;
              // text-align: center;
              margin-bottom: 14px;
              // -webkit-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
              -o-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
              transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
              text-align: left;
              // -webkit-user:select: none;
              // -moz-user-select: none;
              // -ms-user-select: none;
              user-select: none;
            }
          }
        }
        .count-line {
          overflow: hidden;
          margin-bottom: 40px;
          .count-title {
            float: left;
            line-height: 32px;
            margin-left: 10px;
            margin-right: 10px;
          }
          .sku-title {
            font-size: 12px;
            font-weight: 400;
            vertical-align: bottom;
          }
          .count-container {
            .minus-btn {
              float: left;
              width: 34px;
              height: 30px;
              border: 1px solid #d6d6d6;
              line-height: 28px;
              text-align: center;
              color: #d6d6d6;
              // background: url(../assets/img/yp-icons-cart.png);
              // background-size: 85px 2585px;
              .m-icons-reduce {
                width: 30px;
                height: 30px;
                background-position: 0 -1406px;
              }
            }
            .count-input {
              float: left;
              width: 60px;
              height: 30px;
              padding: 0;
              border: 1px solid #d6d6d6;
              border-left-width: 0;
              border-right-width: 0;
              text-align: center;
              font-weight: 700;
              font-size: 14px;
              color: #333;
              outline: none;
            }
            .minus-btn-active {
              float: left;
              width: 34px;
              height: 30px;
              border: 1px solid #d6d6d6;
              line-height: 28px;
              text-align: center;
              color: #d6d6d6;
              .m-icons-add-active {
                width: 30px;
                height: 30px;
                background-position: 0 -1032px;
                // background: url(../assets/img/yp-icons-cart.png);
                // background-size: 85px 2585px;
              }
            }
          }
        }
        .btn-line {
          height: 52px;
          position: relative;
          .buy-btn-container {
            float: left;
            overflow: hidden;
            a {
              margin-right: 15px;
            }
            .m-btn-brown {
              color: #fff;
              background-color: #845f3f;
              border-color: #845f3f;
            }
            .m-btn-middle {
              min-width: 167px;
              height: 52px;
              line-height: 50px;
              font-size: 20px;
            }
            .m-btn-brown-stroke {
              color: #845f3f;
              border-color: #845f3f;
            }
            .m-btns {
              display: inline-block;
              border-radius: 2px;
              text-align: center;
              // color: #666;
              border: 1px solid #666;
              // -webkit-box-sizing: border-box;
              // box-sizing: border-box;
              padding: 0 6px;
              // -webkit-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
              // -o-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
              transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
            }
          }
          .faver-service-btn {
            margin-left: 15px;
          }
          .favor-btn {
            float: left;
            width: 50px;
            height: 50px;
            border: 1px solid #ccc;
            border-radius: 2px;
            color: #999;
            line-height: 12px;
            text-align: center;
            font-size: 12px;
            // -webkit-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
            // -o-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
            transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
            .m-icons {
              background-image: url(../assets/img/yp-icons.png);
              background-size: 85px 2585px;
            }
            .m-icons-collection {
              width: 30px;
              height: 30px;
              background-position: 0 -930px;
              display: inline-block;
            }
            .m-icons-service-detail {
              width: 30px;
              height: 30px;
              background-position: 0 -1576px;
              display: inline-block;
            }
          }
        }
      }
    }
    .detail-content {
      overflow: hidden;
      .info-right {
        width: 774px;
        .nav-title {
          width: 774px;
          background-color: #e7e7e7;
          z-index: 5;
          .info-nav {
            height: 13px;
            padding: 16px 0 13px;
            .info-nav-item {
              float: left;
              height: 13px;
              border-right-width: 1px;
              border-right-style: solid;
              line-height: 13px;
              font-size: 13px;
              text-align: center;
            }
          }
          .nav-arr-container {
            height: 2px;
            position: relative;
            .nav-arr {
              position: absolute;
              height: 2px;
              background-color: #845f3f;
              // -webkit-transition: left 0.2s linear;
              // -o-transition: left 0.2s linear;
              transition: left 0.2s linear;
            }
          }
        }
        .main-body {
          min-height: 900px;
          img {
            height: auto;
          }
        }
      }
      .fl {
        float: left;
      }
    }
    .best {
      float: right;
      width: 262px;

      .flagship {
        padding-bottom: 13px;
        margin-bottom: 17px;
        border-bottom: 1px solid #e7e7e7;
        padding-bottom: 25px;
        .icon-container {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: #333;
          img {
            width: 30px;
            height: 30px;
            float: left;
            margin-right: 10px;
          }
          .title-container {
            float: left;
            width: 156px;
            .title-content {
              display: flex;
              align-items: center;
              .flagship .icon-container .title-container h6 {
                overflow: hidden;
                line-height: 14px;
                font-size: 14px;
                font-weight: 400;
                // -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            p {
              margin-top: 4px;
              overflow: hidden;
              line-height: 12px;
              font-size: 12px;
              // -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .m-btn-brown {
            color: #fff;
            background-color: #845f3f;
            border-color: #845f3f;
            font-size: 13px;
          }
          .enter-btn {
            float: right;
            .m-btns {
              text-align: center;
              display: block;
              min-width: 48px;
              height: 30px;
              line-height: 28px;
              border-radius: 3px;
              font-size: 13px;
            }
          }
        }
      }
      .recommend-title {
        text-align: center;
        color: #333;
        font-size: 16px;
        font-weight: 400;
        height: 42px;
        line-height: 42px;
        margin-bottom: 17px;
      }
    }
  }
}
</style>