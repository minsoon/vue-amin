import { setStore, removeStore } from '../auth/utils.js';

const mutations = {
  addState (state, data) {
    state[data.name] = data.data;
  },
  clearState (state, name) {
    state[name] = undefined;
  },
  updateLayout (state, layout) {
    state.layout = layout;
  },
  updateUserInfo (state, data) {
    state.accessToken = data.accessToken;
    state.user.name = data.user.name;
    state.user.email = data.user.email;
    state.user.id = data.user.id;
    setStore('isUser', {
      name: data.user.name,
      email: data.user.email,
      id: data.user.id
    }, 1);
    setStore('accessToken', data.accessToken, 1);
  },
  clearUserInfo (state) {
    state.accessToken = null;
    state.user.name = null;
    state.user.email = null;
    state.user.id = null;
    removeStore('isUser');
    removeStore('accessToken');
  }
};

export default mutations;
