import Vue from 'vue'

import vuex from 'vuex'
Vue.use(vuex)

// 添加http拦截
import { AjaxPlugin } from 'vux';
Vue.use(AjaxPlugin);