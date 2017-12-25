import home from './home.js'
import login from './login.js'

let partner = [{
  path: '/',
  component: resolve => require(['./../pages'], resolve),
  children: [home, login]
}]

// wap = wap.concat(songSheet, common);

export default partner
