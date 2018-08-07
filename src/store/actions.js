const actions = {
  addState ({ commit }, data) {
    commit('addState', data);
  },
  clearState ({ commit }, name) {
    commit('clearState', name);
  },
  updateLayout ({ commit }, layout) {
    commit('updateLayout', layout);
  },
  updateUserInfo ({ commit }, data) {
    commit('updateUserInfo', data);
  },
  clearUserInfo ({ commit }) {
    commit('clearUserInfo');
  }
};

export default actions;
