import * as types from './mutationTypes';
import { appConstants } from "../../../app.constants";
import { getUserInfo, isAuthorized } from "../../../services/user";

export const actions = {
  setToken({ commit }, token) {
    commit(types.SET_AUTH_TOKEN, token);
    localStorage.setItem(appConstants.authTokenKey, token);
  },
  getUserInfo({ commit, state }) {
    if (!state.token) return Promise.resolve(false);

    return getUserInfo(state.token).then((response) => {
      commit(types.RECEIVE_USER_INFO, response);

      isAuthorized(response.id).then((res) => {
        commit(types.SET_AUTHORIZATION, res.isAuthorized);
      });
    });
  },
  logOff({ commit }) {
    commit(types.AUTHENTICATION_LOGOFF);
    localStorage.setItem(appConstants.authTokenKey, '');
  }
};
