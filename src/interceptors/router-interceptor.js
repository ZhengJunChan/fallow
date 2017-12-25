/*  获取token Created by 郑君婵 on 2017-05-25  */

// import store from '@/vuex';
// import { TokenUtil, BrowserUtil, RouterUtil } from '@/utils';

export default function (router, vue) {
  router.beforeEach((to, from, next) => {
    // 设置title
    setTiTle(to);

    next()
  });

  router.afterEach(function (to) {
    if (!to.meta.stopToTop) {
      window.scrollTo(0, 0);
    }

    next()
  });
};

function setTiTle(to, from, next) {
  document.title = to.meta.title || fallow;
}
