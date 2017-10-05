import * as types from './mutationTypes';
import * as map from 'lodash/map.js';
import { getAlbumDetails, createNewAlbum } from '../../../services/albums';

export const actions = {
  getAlbumDetails({ commit }, { albumId }) {
    getAlbumDetails(albumId).then((response) => {
      commit(types.RECEIVE_ALBUM_DETAILS, response);
    });
  },
  createNewAlbum({ commit }, album) {
    console.log(album); // eslint-disable-line no-console
    let albumDto = {
      title: album.title,
      description: album.description,
      images: map(album.images, (image) => ({
        publicId: image.public_id,
        url: image.url,
        title: 'Be title here' // TODO: define
      }))
    };

    return createNewAlbum(albumDto);
  }
};
