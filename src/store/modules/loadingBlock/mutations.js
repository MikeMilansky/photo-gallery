import * as types from './mutationTypes';

export const mutations = {
  [types.SET_LOADING_STATE](state, newState) {
    state.isLoading = newState;
  }
};
