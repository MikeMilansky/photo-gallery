import * as types from './mutationTypes';

export const actions = {
  changeLoadingState({ commit }, state) {
    commit(types.SET_LOADING_STATE, state);
  }
};
