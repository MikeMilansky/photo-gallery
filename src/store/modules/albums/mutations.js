import * as types from './mutationTypes';
import * as without from 'lodash/without.js';

export const mutations = {
  [types.RECEIVE_ALBUMS](state, albums) {
    state.all = albums;
  },
  [types.DELETE_ALBUM](state, album) {
    state.all = without(state.all, album);
  }
};
