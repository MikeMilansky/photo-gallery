<template>
  <div class="home-page">
    <div class="row">
      <div class="col">
        <h2>Альбомы</h2>
      </div>
    </div>
    <div class="row">
      <album-preview v-for="album in albums" :album="album" :key="album.id"></album-preview>
      <div v-if="!albums.length" class="no-data">
        <div>Пока еще не создано ни одного альбома :(</div>
        <div><router-link :to="{ name: 'album_create' }">Исправить!</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
  import AlbumPreview from '@/components/AlbumPreview';
  import { mapGetters } from 'vuex';

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
  .no-data {
    max-width: 300px;
    margin: 0 auto;
    padding-top: 100px;
    font-size: 2rem;
    text-align: center;
  }
</style>
