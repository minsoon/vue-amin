// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import VueBus from 'vue-bus';
import VueAnalytics from 'vue-analytics';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'babel-polyfill';
import App from './App';

Vue.use(Vuetify);
Vue.use(VueBus);
Vue.use(VueAnalytics, {
  id: 'UA-122842050-1',
  router
});

Vue.prototype.$eventHub = new Vue();
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
