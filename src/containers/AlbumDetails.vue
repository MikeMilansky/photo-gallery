<template>
  <div class="home-page">
    <div class="row">
      <div class="col-10">
        <h2>{{album.title}}</h2>
      </div>
      <div class="col-2 edit-button">
        <router-link :to="{ name: 'album_edit', params: { id: album.id }}">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </router-link>
      </div>
    </div>
    <div class="row section">
      <div class="col" v-html="album.description">
      </div>
    </div>
    <photo :photo="image" v-for="image in album.images" :key="image.publicId"></photo>
  </div>
</template>

<script>
  import Photo from '@/components/Photo';
  import { mapGetters } from 'vuex';

  export default {
    name: 'album_details',
    created() {
      this.$store.dispatch('changeLoadingState', true);
      this.$store.dispatch('getAlbumDetails', { albumId: this.$route.params.id }).then(() => {
        this.$store.dispatch('changeLoadingState', false);
      });
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
  .section {
    margin-bottom: 10px;
  }
  .edit-button {
    padding-top: 10px;
    text-align: right;
  }
</style>
