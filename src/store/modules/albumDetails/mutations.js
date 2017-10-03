import * as types from './mutationTypes';

export const mutations = {
  [types.RECEIVE_ALBUM_DETAILS](state, album) {
    state.albumDetails = album;
  }
};
