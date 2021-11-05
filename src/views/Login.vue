<template>
  <div class="login">
    <div class="head">欢迎登录</div>
    <div class="form">
      <div class="form-item">
        <p class="title">帐号</p>
        <input
          class="inpt"
          type="text"
          v-model="form.userName"
          placeholder="请输入帐号"
        />
      </div>
      <div class="form-item">
        <p class="title">密码</p>
        <input
          class="inpt"
          type="password"
          v-model="form.password"
          placeholder="请输入帐号"
        />
      </div>
    </div>
    <div class="select">
      <van-checkbox
        icon-size="16px"
        checked-color="#1BD1FF"
        @change="change"
        v-model="checked"
        >记住密码</van-checkbox
      >
    </div>
    <div class="login-btn" @click="login">登 录</div>
    <div class="circular circular-big"></div>
    <div class="circular circular-small"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      checked: false,
    };
  },
  created() {},
  methods: {
    change(e) {
      console.log(e);
    },
    login() {
      if (this.form.userName && this.form.password) {
        if (this.form.userName == "boss") {
          this.$router.push("/audit");
        } else if (this.form.userName == "farm") {
          this.$router.push("/bill");
        }else{
          this.$toast("此账号未开通！");
        }
      } else {
        this.$toast("请正确填写帐号密码！");
      }
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.login {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #e8ecf5;
  padding: 0 32px;
  box-sizing: border-box;
  .head {
    color: #20201f;
    line-height: 40px;
    font-size: 24px;
    font-weight: 600;
    margin-top: 20%;
  }

  .form {
    width: 100%;
    margin-top: 60px;
    .form-item {
      width: 100%;
      margin-bottom: 20px;
      .title {
        color: #343331;
        font-size: 16px;
        line-height: 45px;
      }
      .inpt {
        width: 100%;
        height: 54px;
        border: none;
        border-radius: 6px;
        padding: 0 12px;
        box-sizing: border-box;
        font-size: 16px;
        color: #767676;
        box-shadow: 2px 3px 7px 2px #cccc;
      }
    }
  }

  .select {
    font-size: 12px;
    color: #323336;
  }

  .login-btn {
    width: 100%;
    height: 44px;
    border-radius: 4px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    box-shadow: 2px 3px 7px 2px #cccc;
    margin-top: 20px;
    background-color: #2785ff;
    cursor: pointer;
  }

  .circular {
    border-radius: 50%;
    background-color: #e2e6f1;
  }

  .circular-big {
    width: 72px;
    height: 72px;
    position: absolute;
    top: 10%;
    right: 0;
  }
  .circular-small {
    width: 42px;
    height: 42px;
    position: absolute;
    top: 24%;
    right: 26%;
  }
}
</style>
