<template>
    <div class="login-container">
        <el-form :model="loginForm" ref="loginForm" class="login-form">
            <h3>Vue-admin</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" name="username" auto-complete="on" placeholder="用户名" clearable prefix-icon="iconfont icon-yonghu"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input :type="passwordType" v-model="loginForm.password" name="password" auto-complete="on" placeholder="密码" prefix-icon="iconfont icon-suo"></el-input>
            </el-form-item>
            <el-button :loading="loading" type="primary">登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '11111111'
      },
      passwordType: 'password',
      loading: false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  .login-form {
    left: 0;
    right: 0;
    width: 350px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
}
</style>
