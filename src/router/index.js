import Vue from 'vue'
import Router from 'vue-router'
import partner from '@/modules/partner/routers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: partner
})
