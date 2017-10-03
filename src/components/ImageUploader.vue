<template>
  <div class="image-uploader">
    <form enctype="multipart/form-data" novalidate>
      <h2>Загрузить фотографии</h2>
      <div class="uploaded-images" v-if="!!uploadedFiles.length">
        <div v-for="image in uploadedFiles" class="image-container">
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
  import * as remove from 'lodash/remove.js';
  import { upload, deleteImage } from '../services/images';

  export default {
    name: 'image-uploader',
    props: ['value'],
    data() {
      return {
        uploadedFiles: [
//          {url: "http://res.cloudinary.com/reshetnikova-photogallery/image/upload/v1506973196/bsyqshnuhy4sqpgft30q.png", public_id: "bsyqshnuhy4sqpgft30q" },
//          {url: "http://res.cloudinary.com/reshetnikova-photogallery/image/upload/v1506870413/yevdpp9wmtnpj0m27ze9.jpg"},
//          {url: "http://res.cloudinary.com/reshetnikova-photogallery/image/upload/v1506870413/yevdpp9wmtnpj0m27ze9.jpg"},
//          {url: "http://res.cloudinary.com/reshetnikova-photogallery/image/upload/v1506870413/yevdpp9wmtnpj0m27ze9.jpg"},
//          {url: "http://res.cloudinary.com/reshetnikova-photogallery/image/upload/v1506870413/yevdpp9wmtnpj0m27ze9.jpg"},
//          {url: "http://res.cloudinary.com/reshetnikova-photogallery/image/upload/v1506870413/yevdpp9wmtnpj0m27ze9.jpg"}
        ],
        isLoading: false,
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos'
      };
    },
    computed: {
    },
    methods: {
      reset() {
        // reset form to initial state
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      deleteImage(imageToDelete) {
        deleteImage(imageToDelete.public_id).then(() => {
          remove(this.uploadedFiles, (image) => {
            debugger;
            return image.public_id === imageToDelete.public_id;
          });
          this.$emit('input', this.uploadedFiles);
        });
      },
      save(formData) {
        // upload data to the server
        this.isLoading = true;

        upload(formData)
          .then(res => {
            console.log(res);
            this.uploadedFiles = this.uploadedFiles.concat([].concat(res));
            this.$emit('input', this.uploadedFiles);
            this.isLoading = false;
          })
          .catch(err => {
            this.uploadError = err.response; // TODO: show toster with error
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

  .icon-remove:hover {
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
