<template>
  <div class="hello">
    <el-form label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="username"  placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="checkPass"  placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="onSubmet">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      username: '',
      checkPass: ''
    }
  },
  methods: {
    onSubmet () {
      this.$router.push({
        name: 'endPort',
        params:{ user: this.username}
      })
      localStorage.setItem('username',this.username)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login-container .title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login-container .remember {
    margin: 0px 0px 35px 0px;
  }
</style>
