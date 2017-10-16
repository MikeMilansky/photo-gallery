<template>
  <div class="col-xs-3 col-sm-4 album-container">
    <router-link :to="{ name: 'album_details', params: { id: album.id }}">
      <div class="card card-album">
        <img class="card-img-top" v-bind:src="album.cover.url">
        <div class="card-block">
          <div class="card-title">{{album.title}}</div>
        </div>
        <i class="fa fa-times icon-remove" aria-hidden="true" @click="deleteAlbum($event)" v-if="isAuthorized"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'album_preview',
    props: ['album'],
    ...mapGetters([
      'isAuthorized'
    ]),
    methods: {
      deleteAlbum(event) {
        event.preventDefault();
        event.stopPropagation();

        this.$modal.show('dialog', {
          title: 'Удаление альбома',
          text: `Подтвердите удаление альбома: ${this.album.title}`,
          buttons: [
            {
              title: 'Удалить', handler: () => {
              this.$store.dispatch('deleteAlbum', this.album).then(() => {
                this.$modal.hide('dialog');
              });
            }
            },
            { title: 'Отменить' }
          ]
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .album-container {
    padding: 15px;
  }

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
    position: relative;
    cursor: pointer;
    min-height: 120px;
  }

  .card-title {
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icon-remove {
    position: absolute;
    right: 10px;
    top: 8px;
    display: none;
    cursor: pointer;
    color: #ed4b4a
  }

  .card-album:hover .icon-remove {
    display: block;
  }
</style>
