export default function (vue) {
  // request 拦截器
  vue.http.interceptors.request.use(
    config => {
      // var token = window.localStorage.getItem('token');

      // config.headers.fingerKey = window.localStorage.getItem('fingerprint');

      // // 判断是否存在token，如果存在的话，则每个http header都加上token
      // if (token) {
      //     config.headers.accesstoken = token;
      // }

      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  // response 拦截器
  vue.http.interceptors.response.use(
    response => {
      // store.commit('setLoginStatus', { isLogined: response.headers.x_end_user });
      // rebiuldResponse(response);

      return response.data;
    },
    error => {
      // if (error.response) {
      //     switch (error.response.status) {
      //     case 401:
      //         // app在别处登录
      //         goLogin();
      //         break;
      //     case 402:
      //         // token授权失败或者已过期
      //         requireToken();
      //         break;
      //     }
      // }

      // 返回接口返回的错误信息
      return Promise.reject(error.response.data);
    }
  );
};
