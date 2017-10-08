<template>
  <div id="app" class="container container-main">
    <navbar></navbar>
    <router-view></router-view>
    <page-footer></page-footer>
    <v-dialog/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    'navbar': Navbar,
    'page-footer': Footer
  }
};
</script>

<style>
  .container-main {
    padding-bottom: 50px;
  }
</style>
