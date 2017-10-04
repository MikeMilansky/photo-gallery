<template>
  <div class="album-create">
    <h2>Новый альбом</h2>
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
      <b-button type="submit" variant="primary" :disabled="errors.has('albumName') || !images.length">Создать</b-button>
    </b-form>
  </div>
</template>

<script>
  import ImageUploader from '../components/ImageUploader.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'album_create',
    data() {
      return {
        form: {
          title: '',
          description: ''
        }
      };
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        this.$store.dispatch('createNewAlbum', Object.assign(this.form, this.$store.state.uploadedImages )).then(() => {
          this.$store.dispatch('resetUploadedImages');
          this.$router.push('/home');
        });
      }
    },
    computed: {
      ...mapGetters(['images'])
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
