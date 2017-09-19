import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Home from '@/components/Home';
import AlbumDetails from '@/components/AlbumDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/albums/:id',
      name: 'album_details',
      component: AlbumDetails
    }
  ]
});
