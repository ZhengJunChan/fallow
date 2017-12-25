const login = {
  path: 'login',
  component: resolve => require(['./../pages/login'], resolve),
  meta: {
    title: '账号登录'
  }
}

export default login
