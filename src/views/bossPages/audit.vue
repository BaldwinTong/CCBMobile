<template>
  <div class="audit">
    <div class="top">
      <div class="pageTitle">交易流水</div>
      <div class="search">
        <img src="../../assets/search.png" alt="" class="icon" />
        <input type="text" class="inpt" placeholder="请输入关键字" />
      </div>
    </div>
    <div class="tabs">
      <div class="tab-item" @click="changeTab(1)">
        <p>全部</p>
        <div class="line" v-if="tabsIndex == 1"></div>
      </div>
      <div class="tab-item" @click="changeTab(2)">
        <p>待审核</p>
        <div class="line" v-if="tabsIndex == 2"></div>
      </div>
      <div class="tab-item" @click="changeTab(3)">
        <p>已审核</p>
        <div class="line" v-if="tabsIndex == 3"></div>
      </div>
    </div>

    <div class="data">
      <div class="data-item" v-for="item in list" :key="item.id">
        <div class="item-top">
          <div class="con-item">
            <div class="items">
              <img src="../../assets/people.png" alt="" />
              <div class="name">申请人:{{ item.applicant }}</div>
            </div>
          </div>
          <div class="con-item">
            <div class="items">
              <img src="../../assets/datetime.png" alt="" />
              <div class="name">申请时间:{{ item.applicantDate }}</div>
            </div>
            <div class="items">
              <img class="pro-img" src="../../assets/product.png" alt="" />
              <div class="name">交易产品： {{ item.product }}</div>
            </div>
          </div>
          <div class="turnover">
            <div class="turnover-item">
              <p class="turnover-title">重量(吨)</p>
              <p class="turnover-num">{{ item.weight }}</p>
            </div>
            <div class="turnover-item">
              <p class="turnover-title">单价(元)</p>
              <p class="turnover-num">{{ item.price }}</p>
            </div>
            <div class="turnover-item">
              <p class="turnover-title">总价(元)</p>
              <p class="turnover-num total-price">{{ item.totalPrice }}</p>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="cro line_left"></div>
          <div class="dashed-line"></div>
          <div class="cro line_right"></div>
        </div>
        <div class="item-bottom">
          <div class="info-item">
            <p class="symbol"></p>
            <p class="title">交易对象： {{ item.TradingPartner }}</p>
          </div>
          <div class="info-item">
            <p class="symbol"></p>
            <p class="title">收款银行： {{ item.bankName }}</p>
          </div>
          <div class="info-item">
            <p class="symbol"></p>
            <p class="title">银行账号：{{ item.bankNumber }}</p>
          </div>
        </div>
        <div class="btn btn1" v-if="item.status == 0" @click="toCheck(item.id)">
          审核
        </div>
        <div class="btn btn2" v-if="item.status == 1">已审核</div>
        <div
          class="status status2"
          v-if="item.status == 0 && item.auditResult == 0"
        >
          待审核
        </div>
        <div
          class="status status1"
          v-if="item.status == 1 && item.auditResult == 1"
        >
          已通过
        </div>
        <div
          class="status status3"
          v-if="item.status == 1 && item.auditResult == 2"
        >
          未通过
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tabsIndex: 1,
      dataList: [
        {
          id: 1,
          status: 0, // 0 是未审核， 1 是已审核
          auditResult: 0,
          applicant: "王大锤",
          applicantDate: "2021.11.04",
          product: "大白菜",
          weight: "20.55",
          price: "45.00",
          totalPrice: "250000.00",
          TradingPartner: "王二锤",
          bankName: "中国建设银行",
          bankNumber: "6666XXXXXXXXXXXX4738",
        },
        {
          id: 2,
          status: 1, // 0 是未审核， 1 是已审核
          auditResult: 1,
          applicant: "王大锤",
          applicantDate: "2021.11.04",
          product: "小白菜",
          weight: "10.55",
          price: "25.00",
          totalPrice: "88000.00",
          TradingPartner: "王二锤",
          bankName: "中国建设银行",
          bankNumber: "6666XXXXXXXXXXXX4778",
        },
        {
          id: 3,
          status: 1, // 0 是未审核， 1 是已审核
          auditResult: 2,
          applicant: "王大锤",
          applicantDate: "2021.11.04",
          product: "包白菜",
          weight: "21.55",
          price: "46.00",
          totalPrice: "58000.00",
          TradingPartner: "王三锤",
          bankName: "中国建设银行",
          bankNumber: "6666XXXXXXXXXXXX4478",
        },
      ],
      nocheckList: [],
      checkList: [],
      list: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    changeTab(e) {
      this.list = [];
      this.tabsIndex = e;
      if (this.tabsIndex == 1) {
        this.list = this.dataList;
      } else if (this.tabsIndex == 2) {
        this.list = this.nocheckList;
      } else if (this.tabsIndex == 3) {
        this.list = this.checkList;
      }
    },

    getData() {
      if (this.tabsIndex == 1) {
        this.list = this.dataList;
      }
      this.dataList.forEach((item) => {
        if (item.status == 0) {
          this.nocheckList.push(item);
        } else if (item.status == 1) {
          this.checkList.push(item);
        }
      });
    },
    toCheck(id) {
      let obj = {};
      this.dataList.forEach((item) => {
        if (id == item.id) {
          obj = JSON.parse(JSON.stringify(item));
        }
      });
      this.$router.push({
        name: "Approve",
        params: obj,
      });
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.audit {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f6f6f6;
}
.top {
  width: 100%;
  padding: 0 20px 16px;
  box-sizing: border-box;
  background-color: #2785fe;
  text-align: center;
  .pageTitle {
    color: #fff;
    height: 44px;
    line-height: 44px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .search {
    position: relative;
    .icon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 11px;
      left: 16px;
    }
    .inpt {
      width: 100%;
      height: 40px;
      border-radius: 40px;
      padding: 0 0px 0 42px;
      box-sizing: border-box;
      font-size: 14px;
      color: #333333;
      border: none;
      background-color: #e9edf5;
    }
  }
}

.tabs {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 18px 0;
  font-size: 16px;
  .tab-item {
    height: 30px;
    margin-right: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .line {
      width: 60%;
      height: 3px;
      border-radius: 2px;
      background-color: #2785fe;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
    }
    .active {
      color: #2785fe;
    }
  }
}

.data {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  .data-item {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ececec;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;
    .item-top {
      padding: 12px;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 8px 8px 0 0;
      .con-item:last-child {
        margin-bottom: 0;
      }
      .con-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #333333;
        margin-bottom: 10px;
        .items {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        img {
          width: 16px;
          height: 16px;
          margin-right: 10px;
        }
        .pro-img {
          margin-left: 20px;
        }
      }

      .turnover {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .turnover-title {
          color: #999999;
          font-size: 14px;
        }
        .turnover-num {
          margin-top: 5px;
          font-size: 14px;
        }
        .total-price {
          color: #fd4d4d;
          font-weight: 700;
          font-size: 16px;
        }
      }
    }

    .line {
      width: 100%;
      height: 20px;
      position: relative;
      background-color: #fff;
      display: flex;
      align-items: center;
      .cro {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        z-index: 1;
        background: #f6f6f6;
      }
      .line_left {
        top: 0px;
        left: -10px;
      }
      .line_right {
        top: 0px;
        right: -10px;
      }
      .dashed-line {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #e5e5e5;
      }
    }

    .item-bottom {
      padding: 0 12px 12px;
      background-color: #fff;
      box-sizing: border-box;
      .info-item {
        color: #333333;
        font-size: 14px;
        line-height: 30px;
        display: flex;
        align-items: center;
        .symbol {
          width: 8px;
          height: 8px;
          font-size: 24px;
          border-radius: 50%;
          margin-right: 10px;
          background-color: #9bc1ff;
        }
      }
    }
    .btn {
      width: 100%;
      height: 44px;
      color: #fff;
      line-height: 44px;
      text-align: center;
      letter-spacing: 3px;
      cursor: pointer;
      border-radius: 0 0 8px 8px;
    }
    .btn1 {
      background-color: #4185f5;
    }
    .btn2 {
      background-color: #909399;
      cursor: not-allowed;
    }

    .status {
      width: 55px;
      line-height: 25px;
      font-size: 14px;
      text-align: center;
      color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 0 8px 0 0;
    }
    .status1 {
      background-color: #fba216;
    }
    .status2 {
      background-color: #66b1ff;
    }
    .status3 {
      background-color: #FD4D4D;
    }
  }
}
</style>