<template>
  <div class="home-page">
    <div class="row">
      <div class="col">
        <h2>{{album.title}}</h2>
      </div>
    </div>
    <photo :photo="image" v-for="image in album.images"></photo>
  </div>
</template>

<script>
  import Photo from '@/components/Photo';
  import { mapGetters } from 'vuex';

  export default {
    name: 'album_details',
    created() {
      this.$store.dispatch('getAlbumDetails', { albumId: this.$route.params.id });
    },
    computed: {
      ...mapGetters(['album'])
    },
    components: {
      photo: Photo
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
