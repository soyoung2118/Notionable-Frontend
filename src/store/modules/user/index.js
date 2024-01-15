export default {
  namespaced: true,
  state: {
    login: false,
    name: '',
    phoneNumber: '',
    email: '',
  },
  mutations: {
    USER_STATUS(state, payload) {
      state.login = payload;
    },
    USER_NAME(state, payload) {
      state.name = payload;
    },
    USER_NUMBER(state, payload) {
      state.phoneNumber = payload;
    },
    USER_EMAIL(state, payload) {
      state.email = payload;
    },
  },
  actions: {
    loginUser({ commit }, payload) {
      commit('USER_STATUS', payload.login);
      commit('USER_NAME', payload.name);
      commit('USER_NUMBER', payload.phoneNumber);
      commit('USER_EMAIL', payload.email);
    },
  },
};
