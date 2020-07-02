<template>
  <div class="S-has-cart">
    <div class="title">
      <a href="javascript:;" class="select-icon"></a>
      <span class="all-txt">全选</span>
      <span class="product">商品信息</span>
      <span class="price">单价</span>
      <span class="num">数量</span>
      <span class="total">金额</span>
      <span class="edit">操作</span>
    </div>
    <!-- 商户列表 -->
    <div class="merchant-list">
      <!-- 每一个商户 -->
      <div class="merchant-item">
        <div class="merchant-info">
          <a href="javascript:;" class="select-icon"></a>
          <span class="name">小米自营(特殊商品)</span>
          <div class="name-right">
            <span>
              <span class="postimg">!</span>
              已免运费
            </span>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="commodity-list">
          <!-- 每一个商品 -->
          <div class="commodity-item clearfix">
            <div class="select">
              <a href="javascript:;" class="select-icon"></a>
            </div>
            <div class="image">
              <img
                src="https://img.youpin.mi-img.com/shopmain/693ed3defbda3f629e5ce0996a59f4d6.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800"
                alt
              />
            </div>
            <div class="name">
              <p>空调A（3匹/变频/新一级能效）</p>
            </div>
            <div class="price">
              <span>¥4999.00</span>
            </div>
            <div class="num">
              <div class="can-edit">
                <div class="num-reduce-add">
                  <a href="javascript:;" class="m-icon minus"></a>
                  <span class="txt">1</span>
                  <a href="javascript:;" class="m-icon plus"></a>
                </div>
              </div>

              <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
            </div>
            <div class="subtotal">¥4999</div>
            <div class="del">
              <span class="icon"></span>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>

    <!-- 结算 -->
    <div class="cart-total">
      <div class="ico">
        <a href="javascript:;" class="select-icon"></a>
        <span class="select-text">全选</span>
        <span class="already-select">以选0件</span>
      </div>
      <div class="total-price">
        <span class="total-after-prefer">合计：</span>
        <span class="total-price-num">¥0.00</span>
      </div>
      <div class="checkout">去结算</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      num: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.S-has-cart {
  width: 100%;

  .select-icon {
    box-sizing: content-box;
    display: inline-block;
    margin-left: 7px;
    margin-right: 20px;
    vertical-align: middle;
    margin-top: -5px;
    width: 18px;
    height: 18px;
    background-image: url(../../assets/img/yp-icons-cart.png);
    background-position: 0 -506px;
    // background-position: 0 -418px;
  }
  .title {
    height: 42px;
    line-height: 40px;
    background-color: #fafafa;
    color: #999;
    margin-bottom: 3px;
    font-size: 14px;

    span {
      display: inline-block;
    }
    .all-txt {
      width: 130px;
    }
    .product {
      width: 325px;
    }
    .price {
      width: 205px;
    }
    .num {
      width: 208px;
    }
    .total {
      width: 129px;
    }
    .edit {
    }
  }

  .merchant-list {
    padding-bottom: 100px;

    .merchant-item {
      .merchant-info {
        padding-top: 47px;
        padding-bottom: 17px;
        vertical-align: middle;
        border-bottom: 1px solid #e7e7e7;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 14px;
        color: #333;

        .name {
          margin-left: 10px;
          cursor: pointer;
          flex: 1;
        }
        .name-right {
          position: relative;
          cursor: pointer;
          margin-right: 15px;
          color: #999;

          .postimg {
            box-sizing: border-box;
            margin-right: 5px;
            display: inline-block;
            border: 1px solid #999;
            border-radius: 50%;
            width: 17px;
            height: 17px;
            padding-left: 6px;
          }
        }
      }
      .commodity-list {
        .commodity-item {
          border-bottom: 1px dashed #e7e7e7;
          font-size: 14px;
          color: #333;

          .select {
            padding: 35px 0;
            height: 72px;
            line-height: 72px;
            width: 45px;
            float: left;
          }
          .image {
            float: left;
            height: 142px;
            position: relative;
            width: 120px;
            cursor: pointer;

            img {
              position: absolute;
              top: 10px;
              left: 0;
              width: 120px;
              height: 120px;
            }
          }
          .name {
            float: left;
            box-sizing: border-box;
            width: 330px;
            padding: 27px 90px 27px 5px;
            height: 142px;
            line-height: 88px;
            cursor: pointer;

            p {
              margin-top: 10px;
              line-height: 24px;
            }
          }
          .price {
            width: 215px;
            padding: 35px 0;
            height: 72px;
            line-height: 72px;
            float: left;
          }
          .num {
            width: 205px;
            padding: 35px 0;
            height: 72px;
            line-height: 72px;
            float: left;

            .can-edit {
              margin-left: -55px;

              .num-reduce-add {
                width: 134px;
                display: inline-block;
                vertical-align: middle;
                text-align: center;

                box-sizing: border-box;
                height: 32px;
                border: 1px solid #b3b3b3;
                overflow: hidden;

                .m-icon {
                  //   float: left;
                  width: 30px;
                  height: 30px;
                  display: inline-block;
                  background-image: url(../../assets/img/yp-icons-cart.png);
                }
                .minus {
                  float: left;
                  background-position: 0 -1406px;
                }
                .plus {
                  float: right;
                  background-position: 0 -1032px;
                }
                .txt {
                  width: 70px;
                  border-left: 1px solid #b3b3b3;
                  border-right: 1px solid #b3b3b3;
                  float: left;
                  height: 30px;
                  line-height: 30px;
                  text-align: center;
                }
              }
            }
          }
          .subtotal {
            float: left;
            width: 130px;
            text-align: left;
            color: #c00000;

            padding: 35px 0;
            height: 72px;
            line-height: 72px;
          }
          .del {
            padding: 35px 0;
            height: 72px;
            line-height: 72px;

            .icon {
              display: inline-block;
              width: 13px;
              height: 13px;
              background-image: url(../../assets/img/yp-icons-cart.png);
              background-position: 0 -135px;
            }
          }
        }
        .commodity-item:nth-last-child(1) {
          border-bottom: 1px solid #e7e7e7;
        }
      }
    }
  }
  .ico {
    padding: 25px 0;
    height: 30px;
    line-height: 30px;
    float: left;

    .select-text {
      font-size: 18px;
      color: #333;
    }
    .already-select {
      margin-left: 20px;
      font-size: 18px;
      color: #333;
    }
  }
  .cart-total {
    position: relative;
    margin-bottom: 160px;
    background-color: #fafafa;
    // font-size: 18px;
    width: 1080px;
    height: 80px;
    z-index: 98;

    .total-price {
      height: 55px;
      padding-top: 25px;

      position: absolute;
      right: 230px;
      bottom: 0;

      font-size: 12px;
      color: #999;
    }

    .total-after-prefer {
      font-size: 20px;
      color: #333;
    }
    .total-price-num {
      color: #c00000;
      font-size: 20px;
    }
  }
  .checkout {
    background-color: #e7e7e7;
    color: #fff;
    cursor: not-allowed;
    // margin-top: -.5px;
    float: right;
    width: 200px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
  }
}
</style>