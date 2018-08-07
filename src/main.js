// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';
import {
  Vuetify,
  VIcon,
  VBtn
} from 'vuetify';
import { Ripple } from 'vuetify/es5/directives';
import VueAnalytics from 'vue-analytics';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'babel-polyfill';
import App from './App';

Vue.use(Vuetify, {
  components: {
    VIcon,
    VBtn
  },
  directives: {
    Ripple
  }
});

Vue.use(VueAnalytics, {
  id: process.env.ANALYTICS_ID,
  router
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
