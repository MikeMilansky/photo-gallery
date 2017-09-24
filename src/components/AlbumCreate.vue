<template>
  <div class="album-create">
    <h2>Новый альбом</h2>
    <b-form @submit="onSubmit">
      <b-form-group label-for="albumName" label="Имя альбома:">
        <b-form-input id="albumName"
                      type="text" v-model="form.title" required
                      placeholder="Введите имя альбома"
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
      <b-button type="submit" variant="primary">Создать</b-button>
    </b-form>
  </div>
</template>

<script>
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
        this.$store.dispatch('createNewAlbum', this.form);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
