<template>
  <div class="row">
    <div class="col">
      <router-link :to="{ name: 'album_details', params: { id: photo.id }}">
        <div class="card card-album">
          <img class="card-img-top" v-bind:src="photo.img['L']['href']">
          <div class="card-block">
            <div class="card-title">{{photo.title}}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['photo']
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-block {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 35px;
    color: #fff;
    background-color: #000;
    opacity: 0.7;
  }
  .card-album {
    cursor: pointer;
    min-height: 120px;
  }
  .card-title {
    z-index: 1000;
    text-align: center;
    vertical-align: middle;
  }
</style>
