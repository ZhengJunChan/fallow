<!-- [home_page]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="login_page" :style="{backgroundImage: `url(${relationInfo.photo})`}">
    <div class="center_box">
    	<div class="logo_box">
    		<router-link class="logo_btn" to="/"></router-link>
    	</div>

    	<div class="main_box">
        <div class="login_form">
    			<div class="input_label">
            <input type="text" placeholder="请输入您的账号">   
          </div>
    			<div class="input_label">
            <input type="password" placeholder="请输入您的密码">
          </div>
          <div class="forget_password">
            <!-- <router-link to="/">忘记密码</router-link> -->
          </div>
          <div class="submit_label">
            <button>登录</button>
          </div>
        </div>

        <div></div>
    	</div>

    	<div class="bottom_tip"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { relationInfo } from '@/data'
// import defualt from './defualt.js';

export default {
  data () {
    return {
      relationInfo,
      account: '',
      password: ''
    }
  },
  created () {
    console.log(relationInfo)
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
