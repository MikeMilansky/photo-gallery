import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import AlbumDetails from '@/containers/AlbumDetails';
import AlbumCreate from '@/containers/AlbumCreate';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/albums/:id',
      name: 'album_details',
      component: AlbumDetails
    },
    {
      path: '/album_create',
      name: 'album_create',
      component: AlbumCreate
    }
  ]
});
