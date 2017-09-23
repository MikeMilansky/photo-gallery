import Vue from 'vue';
import Vuex from 'vuex';
import albums from './modules/albums';
import albumDetails from './modules/albumDetails';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    albums,
    albumDetails
  },
  strict: true,
  plugins: []
});
