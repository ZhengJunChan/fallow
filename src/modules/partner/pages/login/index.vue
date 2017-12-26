<!-- [home_page]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="login_page" :style="{backgroundImage: `url(${relationInfo.photo})`}">
    <div class="center_box">
    	<div class="logo_box">
    		<router-link class="logo_btn" to="/"></router-link>
    	</div>

    	<div class="main_box">
        <p class="error_label" v-show="errorTip">
          <i class="iconfont icon-warming"></i>
          <span v-text="errorTip"></span>
        </p>

        <div class="login_form">
    			<div class="input_label">
            <input v-model="account" type="text" placeholder="请输入您的账号">   
          </div>
    			<div class="input_label">
            <input v-model="password" type="password" placeholder="请输入您的密码">
          </div>
          <div class="forget_password">
            <!-- <router-link to="/">忘记密码</router-link> -->
          </div>
          <div class="submit_label">
            <button @click="login">登录</button>
          </div>
        </div>

        <div></div>
    	</div>

    	<div class="bottom_tip"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { RouterUtil } from '@/utils'
import { relationInfo } from '@/data'

export default {
  data () {
    return {
      relationInfo,
      account: '',
      password: '',
      errorTip: ''
    }
  },
  methods: {
    login () {
      this.errorTip = ''

      if (!this.account) {
        this.errorTip = '账号不能为空'
        return
      }

      if (!this.password) {
        this.errorTip = '密码不能为空'
        return
      }

      // todo: 请求后端登录接口
      RouterUtil.go('/', this.$router)
    }
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
