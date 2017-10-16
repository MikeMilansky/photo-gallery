import * as types from './mutationTypes';
import Vue from 'vue';

export const actions = {
  getAllAlbums({ commit }) {
    return Vue.http.get('albums').then(response => {
      commit(types.RECEIVE_ALBUMS, response.body);
    });
  },
  deleteAlbum({ commit }, album) {
    return Vue.http.delete(`albums/${album.id}`).then(() => {
      commit(types.DELETE_ALBUM, album);
    });
  }
};
