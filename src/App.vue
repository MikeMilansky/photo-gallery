<template>
  <div id="app" class="container">
    <navbar></navbar>
    <router-view></router-view>
    <page-footer></page-footer>
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
  .container {
    padding-bottom: 50px;
  }
</style>
