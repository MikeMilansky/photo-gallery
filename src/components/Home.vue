<template>
  <div class="home-page">
    <div class="row">
      <div class="col">
        <h2>Альбомы</h2>
      </div>
    </div>
    <div class="row">
      <album-preview v-for="album in albums" :album="album"></album-preview>
    </div>
  </div>
</template>

<script>
  import AlbumPreview from '@/components/AlbumPreview';
  import { mapGetters } from 'Vuex';

  export default {
    name: 'home',
    created() {
      this.$store.dispatch('getAllAlbums');
    },
    computed: {
      ...mapGetters([
        'albums'
      ])
    },
    components: {
      'album-preview': AlbumPreview
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
