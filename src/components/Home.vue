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

  export default {
    name: 'home',
    data() {
      return {
        albums: [
          {
            "edited": "2017-09-15T19:32:43Z",
            "updated": "2017-09-15T19:32:43Z",
            "links": {
              "edit": "http://api-fotki.yandex.ru/api/users/alekna/album/197816/?format=json",
              "self": "http://api-fotki.yandex.ru/api/users/alekna/album/197816/?format=json",
              "alternate": "http://fotki.yandex.ru/users/alekna/album/197816/",
              "cover": "http://api-fotki.yandex.ru/api/users/alekna/photo/657065/?format=json",
              "photos": "http://api-fotki.yandex.ru/api/users/alekna/album/197816/photos/?format=json",
              "ymapsml": "http://api-fotki.yandex.ru/api/users/alekna/album/197816/photos.ymapsml/"
            },
            "authors": [
              {
                "name": "alekna",
                "uid": "14733932"
              }
            ],
            "id": "197816",
            "imageCount": 4,
            "img": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-XL",
            "title": "Природа",
            "author": "alekna",
            "published": "2012-07-09T11:46:31Z"
          },
          {
            "edited": "2017-09-15T19:32:43Z",
            "updated": "2017-09-15T19:32:43Z",
            "links": {
              "edit": "http://api-fotki.yandex.ru/api/users/alekna/album/197663/?format=json",
              "self": "http://api-fotki.yandex.ru/api/users/alekna/album/197663/?format=json",
              "alternate": "http://fotki.yandex.ru/users/alekna/album/197663/",
              "cover": "http://api-fotki.yandex.ru/api/users/alekna/photo/656634/?format=json",
              "photos": "http://api-fotki.yandex.ru/api/users/alekna/album/197663/photos/?format=json",
              "ymapsml": "http://api-fotki.yandex.ru/api/users/alekna/album/197663/photos.ymapsml/"
            },
            "authors": [
              {
                "name": "alekna",
                "uid": "14733932"
              }
            ],
            "id": "urn:yandex:fotki:alekna:album:197663",
            "imageCount": 1,
            "img": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a04fa_2f68a5db_L",
            "title": "Животные",
            "author": "alekna",
            "published": "2012-07-06T07:54:46Z"
          },
          {
            "edited": "2017-09-15T19:32:43Z",
            "updated": "2017-09-15T19:32:43Z",
            "links": {
              "edit": "http://api-fotki.yandex.ru/api/users/alekna/album/170471/?format=json",
              "self": "http://api-fotki.yandex.ru/api/users/alekna/album/170471/?format=json",
              "alternate": "http://fotki.yandex.ru/users/alekna/album/170471/",
              "cover": "http://api-fotki.yandex.ru/api/users/alekna/photo/471435/?format=json",
              "photos": "http://api-fotki.yandex.ru/api/users/alekna/album/170471/photos/?format=json",
              "ymapsml": "http://api-fotki.yandex.ru/api/users/alekna/album/170471/photos.ymapsml/"
            },
            "authors": [
              {
                "name": "alekna",
                "uid": "14733932"
              }
            ],
            "id": "urn:yandex:fotki:alekna:album:170471",
            "imageCount": 2,
            "img": "http://img-fotki.yandex.ru/get/5907/alekna.2/0_7318b_2136a628_L",
            "title": "Путешествия",
            "author": "alekna",
            "published": "2011-06-06T11:36:53Z"
          }
        ]
      };
    },
    components: {
      'album-preview': AlbumPreview
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
