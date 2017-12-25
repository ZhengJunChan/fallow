// request 拦截器
vue.http.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

// response 拦截器
vue.http.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response.data);
  }
)
