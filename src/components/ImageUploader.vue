<template>
  <div class="image-uploader">
    <form enctype="multipart/form-data" novalidate>
      <h2>Загрузить фотографии</h2>
      <div class="uploaded-images" v-if="!!uploadedFiles.length">
        <div v-for="image in uploadedFiles" class="image-container" :key="image.public_id">
          <img :src="image.url" class="img-responsive img-thumbnail" :alt="image.originalName">
          <i class="fa fa-times icon-remove" aria-hidden="true" @click="deleteImage(image)"></i>
        </div>
      </div>
      <div class="dropbox">
        <input type="file" multiple :name="uploadFieldName" :disabled="isLoading"
               @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
               accept="image/*" class="input-file">
        <p v-if="!isLoading">
          Перетащи сюда файлы<br> или кликни для выбора
        </p>
        <p v-if="isLoading">
          Загружается {{ fileCount }} файлов...
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'image-uploader',
    data() {
      return {
        isLoading: false,
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos'
      };
    },
    computed: {
      ...mapGetters({
        'uploadedFiles': 'images'
      })
    },
    methods: {
      reset() {
        // reset form to initial state
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      deleteImage(imageToDelete) {
        this.$store.dispatch('deleteImage', imageToDelete);
      },
      save(formData) {
        this.isLoading = true;
        this.$store.dispatch('uploadImages', formData).then(() => {
          this.isLoading = false;
        });
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(key => {
            formData.append(fieldName, fileList[key], fileList[key].name);
          });

        // save it
        this.save(formData);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .image-uploader {
   margin-bottom: 10px;
  }

  .uploaded-images {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .image-container {
    max-width: 370px;
    position: relative;
  }

  .icon-remove {
    position: absolute;
    right: 10px;
    top: 8px;
    color: white;
    cursor: pointer;
  }

  .image-container:hover .icon-remove {
    color: #ed4b4a
  }

  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
