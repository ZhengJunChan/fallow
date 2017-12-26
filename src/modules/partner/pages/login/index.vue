<!-- [home_page]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="login_page" :style="{backgroundImage: `url(${relationInfo.photo})`}">
    <div class="center_box">
    	<div class="logo_box">
    		<router-link class="logo_btn" to="/"></router-link>
    	</div>

    	<div class="main_box">
    		<div>
    			<div></div>
    			<div></div>
    		</div>
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
      relationInfo
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
