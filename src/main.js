// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import '../static/css/common.css';
import '../static/font/iconfont.css';
import 'element-ui/lib/theme-chalk/display.css';
import '../static/js/clock.js';


Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
