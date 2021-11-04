<template>
  <div>
    <div class="bgc"></div>
    <div class="top">
      <img src="../../assets/back.png" alt="" @click="goback" />
      <div class="pageTitle">审核</div>
    </div>
    <div class="content">
      <div class="card"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    goback() {
      this.$router.go(-1);
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
    box-shadow: 2px 3px 7px 2px #cccc;
  }
}
</style>