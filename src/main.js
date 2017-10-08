// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import VueQuillEditor from 'vue-quill-editor';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'font-awesome/css/font-awesome.css';

import App from './App';
import router from './router';
import store from './store';

Vue.use(VeeValidate);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueQuillEditor);

// Vue.http.options.root = 'https://private-4298e9-photogallery2.apiary-mock.com/api';
// Vue.http.options.root = 'http://localhost:3000';
Vue.http.options.root = 'https://photo-gallery-be.herokuapp.com';
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
});
