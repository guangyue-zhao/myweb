// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Autocomplete,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Icon,
  Row,
  Col,
  Card,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  } from 'element-ui';
import App from './App'
import router from './router'
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import '../static/css/common.css';
import '../static/font/iconfont.css';
import 'element-ui/lib/theme-chalk/display.css';
import '../static/js/clock.js';

Vue.config.productionTip = false
Vue.use(Autocomplete);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
