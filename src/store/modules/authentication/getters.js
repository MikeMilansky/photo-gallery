export const getters = {
  userInfo (state) {
    return state.userInfo;
  },
  token (state) {
    return state.token;
  },
  isAuthenticated (state) {
    return state.token && state.userInfo;
  },
  isAuthorized (state) {
    return state.isAuthorized;
  }
};
