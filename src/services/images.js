import Vue from 'vue';

function upload(formData) {
  return Vue.http.post('photos', formData)
    .then(res => res.data);
}

function deleteImage(publicId) {
  return Vue.http.delete(`photos/${publicId}`)
    .then(res => res.data);
}

export { upload, deleteImage };
