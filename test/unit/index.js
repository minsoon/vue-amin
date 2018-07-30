import Vue from 'vue';
import Router from 'vue-router';
import {
  Vuetify,
  VApp,
  VCard,
  VIcon,
  VList,
  VBtn,
  VFooter,
  VToolbar,
  VNavigationDrawer
} from 'vuetify';
import { Ripple } from 'vuetify/es5/directives';

Vue.use(Router);
Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VIcon,
    VList,
    VBtn,
    VFooter,
    VToolbar,
    VNavigationDrawer
  },
  directives: {
    Ripple
  }
});

Vue.config.silent = true;
Vue.config.productionTip = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
