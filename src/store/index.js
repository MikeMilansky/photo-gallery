import Vue from 'vue';
import Vuex from 'vuex';
import albums from './modules/albums';
import albumDetails from './modules/albumDetails';
import uploadedImages from './modules/uploadedImages';
import loadingBlock from './modules/loadingBlock';
import authentication from './modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    albums,
    albumDetails,
    uploadedImages,
    loadingBlock,
    authentication
  },
  strict: true,
  plugins: []
});
