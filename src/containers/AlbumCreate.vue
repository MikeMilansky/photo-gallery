<template>
  <div class="album-create">
    <h2 v-if="!isEditMode">Новый альбом</h2>
    <h2 v-if="isEditMode">Редактирование альбома</h2>
    <b-form @submit="onSubmit">
      <b-form-group label-for="albumName" label="Имя альбома:" :feedback="'Имя альбома обязательно'" :state="!errors.has('albumName')">
        <b-form-input id="albumName"
                      name="albumName"
                      type="text" v-model="form.title" required
                      placeholder="Введите имя альбома"
                      v-validate.initial="'required'"
        ></b-form-input>
      </b-form-group>
      <b-form-group label-for="description" label="Описание альбома:">
        <b-form-textarea id="description"
                         v-model="form.description"
                         :rows="3"
                         :max-rows="6"
                         placeholder="Введите описание альбома">
        </b-form-textarea>
      </b-form-group>
      <image-uploader></image-uploader>
      <div class="error-box" v-show="!images.length">Загрузи хотя бы одну фотографию</div>
      <b-button type="submit" variant="primary" :disabled="errors.has('albumName') || !images.length">Сохранить</b-button>
    </b-form>
  </div>
</template>

<script>
  import ImageUploader from '../components/ImageUploader.vue';
  import { getAlbumDetails } from '../services/albums';
  import { mapGetters } from 'vuex';

  export default {
    name: 'album_create',
    created() {
      this.$store.dispatch('resetUploadedImages');
    },
    data() {
      return {
        form: {
          title: '',
          description: ''
        },
        isEditMode: false
      };
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        if (!this.isEditMode) {
          this.$store.dispatch('createNewAlbum', Object.assign(this.form, this.$store.state.uploadedImages)).then(() => {
            this.$store.dispatch('resetUploadedImages');
            this.$router.push('/home');
          });
        } else {
          this.$store.dispatch('updateAlbum', Object.assign(this.form, this.$store.state.uploadedImages)).then(() => {
            this.$store.dispatch('resetUploadedImages');
            this.$router.push('/home');
          });
        }
      },
      setData(data) {
        this.form = {
          id: data._id,
          title: data.title,
          description: data.description
        };
        this.$store.dispatch('setImages', data.images);
        this.isEditMode = true;
      }
    },
    computed: {
      ...mapGetters(['images'])
    },
    beforeRouteEnter(to, from, next) {
      if (to.params.id) {
        getAlbumDetails(to.params.id).then((data) => {
          next(vm => vm.setData(data));
        });
      } else {
        next();
      }
    },
    components: {
      'image-uploader': ImageUploader
    }
  };
</script>
<style scoped>
  .error-box {
    color: #dc3545;
    margin-bottom: 10px;
  }
</style>
