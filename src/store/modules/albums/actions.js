import * as types from './mutationTypes';
import Vue from 'vue';

export const actions = {
  getAllAlbums({ commit }) {
    Vue.http.get('albums').then(response => {
      commit(types.RECEIVE_ALBUMS, response.body);
    });
  }
};
