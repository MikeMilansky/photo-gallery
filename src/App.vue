<template>
  <div id="app" class="container container-main">
    <navbar></navbar>
    <router-view></router-view>
    <page-footer></page-footer>
    <v-dialog/>
    <loading-block></loading-block>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import LoadingBlock from './components/LoadingBlock.vue';
  import { appConstants } from "./app.constants";

export default {
  name: 'app',
  components: {
    'navbar': Navbar,
    'page-footer': Footer,
    'loading-block': LoadingBlock
  },
  created() {
    this.$store.dispatch('setToken', localStorage.getItem(appConstants.authTokenKey));
    this.$store.dispatch('getUserInfo');
  }
};
</script>

<style>
  .container-main {
    padding-bottom: 50px;
    background-color: #fff;
  }
  body {
    background: url('./assets/skelatal_weave.png') repeat;
  }
</style>
