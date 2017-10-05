import Vue from 'vue';

function getAlbumDetails(albumId) {
  return Vue.http.get(`albums/${albumId}`)
    .then(res => res.body);
}
function createNewAlbum(albumDto) {
  return Vue.http.post(`albums`, albumDto).then(() => {});
}
export { getAlbumDetails, createNewAlbum };
