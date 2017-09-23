import * as types from './mutationTypes';

export const mutations = {
  [types.RECEIVE_ALBUMS](state, { albums }) {
    state.all = albums;
  }
};
