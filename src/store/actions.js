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
  updateIsUser ({ commit }, data) {
    commit('updateIsUser', data);
  },
  clearIsUser ({ commit }) {
    commit('clearIsUser');
  }
};

export default actions;
