import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const defaults = {
  layout: 'LayoutDefault',
  accessToken: '',
  user: {
    appId: '2',
    name: '',
    email: '',
    id: ''
  }
};

export default new Vuex.Store({
  state: Object.assign({}, defaults),
  mutations,
  actions
});
