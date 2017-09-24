import * as types from './mutationTypes';
import Vue from 'vue';

export const actions = {
  getAlbumDetails({ commit }, { albumId }) {
    Vue.http.get(`albums/${albumId}`).then(response => {
      commit(types.RECEIVE_ALBUM_DETAILS, response.body);
    });
  },
  createNewAlbum({ commit }, album) {
    console.log(album); // eslint-disable-line no-console
    Vue.http.post(`albums/`, album).then(() => {
    });
  }
};