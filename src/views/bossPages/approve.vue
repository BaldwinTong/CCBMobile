<template>
  <div>
    <div class="bgc"></div>
    <div class="top">
      <img src="../../assets/back.png" alt="" @click="goback" />
      <div class="pageTitle">审核</div>
    </div>
    <div class="content">
      <div class="card">
        <div class="card-top">
          <div class="title">基本信息</div>
          <div class="info">
            <div class="info-item">
              <div class="info-title">申请人</div>
              <input type="text" class="info-inpt" v-model="data.applicant" />
            </div>
            <div class="info-item">
              <div class="info-title">交易产品</div>
              <input type="text" class="info-inpt" v-model="data.product"/>
            </div>
            <div class="info-item">
              <div class="info-title">重量</div>
              <input type="text" class="info-inpt" v-model="data.weight"/>
            </div>
            <div class="info-item">
              <div class="info-title">单价</div>
              <input type="text" class="info-inpt" v-model="data.price"/>
            </div>
            <div class="info-item totalPrice">
              <div class="info-title">总价</div>
              <input type="text" class="info-inpt" v-model="data.totalPrice"/>
            </div>
          </div>
        </div>
        <div class="dashed-line"></div>
        <div class="card-top">
          <div class="title">收款人信息</div>
          <div class="info">
            <div class="info-item">
              <div class="info-title">收款人</div>
              <input type="text" class="info-inpt" v-model="data.TradingPartner"/>
            </div>
            <div class="info-item">
              <div class="info-title">收款银行</div>
              <input type="text" class="info-inpt" v-model="data.bankName"/>
            </div>
            <div class="info-item accountNumber">
              <div class="info-title">收款账号</div>
              <input type="text" class="info-inpt" v-model="data.bankNumber"/>
            </div>
          </div>
        </div>
      </div>
      <div class="btns">
        <van-button
          type="primary"
          color="#4185F5"
          :loading="loading"
          block
          @touchstart="handleTouch"
          >同意</van-button
        >
        <div class="Spacer"></div>
        <van-button plain color="#EE0A24" block @click="handleClick"
          >拒绝</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loading: false,
      data:{},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.data = this.$route.params
    },

    goback() {
      this.$router.go(-1);
    },
    handleTouch() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1990);
      setTimeout(() => {
        this.$toast.success("审核通过");
      }, 2100);
      setTimeout(() => {
        this.goback();
      }, 2200);
    },

    handleClick() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "此操作会拒绝通过审核？是否确认此",
        })
        .then(() => {
          this.$toast.fail("审核不通过");
          this.goback();
        })
        .catch(() => {
          console.log("点击取消");
        });
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.bgc {
  width: 100%;
  height: 245px;
  background-image: linear-gradient(#2785fe, #fff);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.top {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  box-sizing: border-box;
  img {
    width: 18px;
    height: 16px;
    cursor: pointer;
  }
  .pageTitle {
    flex: 1;
    text-align: center;
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
  }
}

.content {
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  margin-top: 25px;
  .card {
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 2px 3px 7px 2px #cccc;
    .card-top {
      padding: 14px;
      box-sizing: border-box;
      .title {
        color: #404040;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 2px;
      }
      .info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .totalPrice {
          width: 100% !important;
          display: flex;
          margin-top: 20px;

          .info-inpt {
            flex: 1;
            height: 44px !important;
            color: #fd4d4d;
            margin: 0 0 0 12px !important;
            font-size: 18px !important;
            font-weight: 800;
          }
        }
        .accountNumber {
          width: 100% !important;
          display: flex;
          margin-top: 20px;
          .info-inpt {
            flex: 1;
            height: 44px !important;
            margin: 0 0 0 12px !important;
          }
        }

        .info-item {
          width: 45%;
          margin-top: 16px;
          .info-title {
            font-size: 14px;
            color: #6b6b75;
          }
          .info-inpt {
            width: 100%;
            height: 32px;
            border: none;
            background-color: #f6f6f6;
            border-radius: 4px;
            padding: 0 12px;
            box-sizing: border-box;
            font-size: 14px;
            margin-top: 8px;
          }
        }
      }
    }
    .dashed-line {
      width: 100%;
      padding: 0 4px;
      box-sizing: border-box;
      border: 1px dashed #e5e5e5;
    }
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    .Spacer {
      width: 25%;
      height: 4px;
    }
  }
}
</style>