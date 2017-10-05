import * as types from './mutationTypes';
import * as without from 'lodash/without.js';

export const mutations = {
  [types.RECEIVE_UPLOADED_IMAGES](state, images) {
    state.images = images;
  },
  [types.REMOVE_UPLOADED_IMAGE](state, image) {
    state.images = without(state.images, image);
  },
  [types.RESET_UPLOADED_IMAGES](state) {
    state.images = [];
  },
  [types.SET_IMAGES](state, images) {
    state.images = images;
  }
};
