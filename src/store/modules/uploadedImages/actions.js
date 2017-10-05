import * as types from './mutationTypes';
import { upload, deleteImage } from '../../../services/images';

export const actions = {
  uploadImages({ commit }, images) {
    return upload(images).then((response) => {
      commit(types.RECEIVE_UPLOADED_IMAGES, response);
    });
  },
  setImages({ commit }, images) {
    commit(types.SET_IMAGES, images);
  },
  deleteImage({ commit }, image) {
    deleteImage(image.publicId).then(() => {
      commit(types.REMOVE_UPLOADED_IMAGE, image);
    });
  },
  resetUploadedImages({ commit }) {
    commit(types.RESET_UPLOADED_IMAGES);
  }
};
