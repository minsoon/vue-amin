import Cookies from 'js-cookie';

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
  updateIsUser (state, data) {
    // state = Object.assign({}, defaults, data);
    state.user.accessToken = data.user.accessToken;
    state.user.name = data.user.name;
    state.user.email = data.user.email;
    state.user.id = data.user.id;
    Cookies.set('isUser', data, 1);
  },
  clearIsUser (state) {
    state.user.accessToken = null;
    state.user.name = null;
    state.user.email = null;
    state.user.id = null;
    Cookies.remove('isUser');
  }
};

export default mutations;
