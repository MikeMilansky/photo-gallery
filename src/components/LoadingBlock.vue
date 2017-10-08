<template>
  <div class="loading-block" v-if="isLoading">
    <div class="loading-block-loader">
      <div class="loader">
        <img src="../assets/ball-triangle.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'loading-block',
    computed: {
    ...mapGetters(['isLoading'])
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading-block {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2000;
    background-color: #6491a5;
    opacity: 0.8;
  }

  .loader {
    height: 100px;
    width: 20%;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    vertical-align: middle;
    display: table-cell;
  }

  .loading-block-loader {
    display: table;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  /*
    Set the color of the icon
  */
  svg path,
  svg rect {
    fill: #4a54ff;
  }
</style>
