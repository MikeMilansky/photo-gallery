import * as types from './mutationTypes';

export const mutations = {
  [types.SET_AUTH_TOKEN](state, token) {
    state.token = token;
  },
  [types.AUTHENTICATION_LOGOFF](state) {
    state.token = null;
    state.userInfo = null;
    state.isAuthorized = false;
  },
  [types.SET_AUTHORIZATION](state, isAuthorized) {
    state.isAuthorized = isAuthorized;
  },
  [types.RECEIVE_USER_INFO](state, userInfo) {
    state.userInfo = {
      id: userInfo.id,
      displayName: userInfo.display_name,
      firstName: userInfo.first_name,
      lastName: userInfo.last_name,
      login: userInfo.login,
      realName: userInfo.real_name
    };
  }
};
