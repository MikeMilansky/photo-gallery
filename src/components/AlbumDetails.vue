<template>
  <div class="home-page">
    <div class="row">
      <div class="col">
        <h2>{{album.title}}</h2>
      </div>
    </div>
    <photo :photo="photo" v-for="photo in album.photos"></photo>
  </div>
</template>

<script>
  import Photo from '@/components/Photo';

  export default {
    data() {
      return {
        album: {
          title: 'Природа',
          photos: [
            {
              "edited": "2012-07-11T07:49:36Z",
              "updated": "2012-07-11T07:49:36Z",
              "xxx": false,
              "img": {
                "XXS": {
                  "width": 75,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-XXS",
                  "height": 75
                },
                "XL": {
                  "width": 598,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-XL",
                  "height": 800
                },
                "M": {
                  "width": 224,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-M",
                  "height": 300
                },
                "L": {
                  "width": 373,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-L",
                  "height": 500
                },
                "XXXS": {
                  "width": 50,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-XXXS",
                  "height": 50
                },
                "XXXL": {
                  "width": 956,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-XXXL",
                  "height": 1280
                },
                "S": {
                  "width": 112,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-S",
                  "height": 150
                },
                "XS": {
                  "width": 75,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-XS",
                  "height": 100
                },
                "XXL": {
                  "width": 765,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-XXL",
                  "height": 1024
                },
                "orig": {
                  "width": 956,
                  "href": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-orig",
                  "bytesize": 295684,
                  "height": 1280
                }
              },
              "links": {
                "album": "http://api-fotki.yandex.ru/api/users/alekna/album/197816/?format=json",
                "editMedia": "http://img-fotki.yandex.ru/get/5705/14733932.2/0_a087d_f80b057b_-1-orig",
                "self": "http://api-fotki.yandex.ru/api/users/alekna/photo/657533/?format=json",
                "alternate": "http://fotki.yandex.ru/users/alekna/view/657533/",
                "edit": "http://api-fotki.yandex.ru/api/users/alekna/photo/657533/?format=json"
              },
              "tags": {},
              "title": "Небо",
              "access": "public",
              "created": "2012-05-05T17:15:55Z",
              "disableComments": false,
              "authors": [
                {
                  "name": "alekna",
                  "uid": "14733932"
                }
              ],
              "hideOriginal": false,
              "author": "alekna",
              "geo": {
                "zoomlevel": "7",
                "type": "Point",
                "maptype": "schema",
                "coordinates": "37.289999993517995 13.58633330091834"
              },
              "id": "urn:yandex:fotki:alekna:photo:657533",
              "published": "2012-07-11T07:48:12Z"
            },
            {
              "edited": "2012-07-10T11:17:50Z",
              "updated": "2012-07-10T11:17:50Z",
              "xxx": false,
              "img": {
                "XXS": {
                  "width": 75,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-XXS",
                  "height": 75
                },
                "XL": {
                  "width": 800,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-XL",
                  "height": 597
                },
                "M": {
                  "width": 300,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-M",
                  "height": 224
                },
                "L": {
                  "width": 500,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-L",
                  "height": 373
                },
                "XXXS": {
                  "width": 50,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-XXXS",
                  "height": 50
                },
                "S": {
                  "width": 150,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-S",
                  "height": 112
                },
                "XS": {
                  "width": 100,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-XS",
                  "height": 75
                },
                "XXL": {
                  "width": 1011,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-XXL",
                  "height": 755
                },
                "orig": {
                  "width": 1011,
                  "href": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-orig",
                  "bytesize": 162015,
                  "height": 755
                }
              },
              "links": {
                "album": "http://api-fotki.yandex.ru/api/users/alekna/album/197816/?format=json",
                "editMedia": "http://img-fotki.yandex.ru/get/6214/14733932.2/0_a07c8_8e36bea_-3-orig",
                "self": "http://api-fotki.yandex.ru/api/users/alekna/photo/657352/?format=json",
                "alternate": "http://fotki.yandex.ru/users/alekna/view/657352/",
                "edit": "http://api-fotki.yandex.ru/api/users/alekna/photo/657352/?format=json"
              },
              "tags": {
                "природа": "http://api-fotki.yandex.ru/api/users/alekna/tag/%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0/",
                "путешествия": "http://api-fotki.yandex.ru/api/users/alekna/tag/%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D1%8F/"
              },
              "title": "Горы",
              "summary": "Сан-Катальдо, Сицилия",
              "access": "public",
              "created": "2012-01-09T16:54:15Z",
              "disableComments": false,
              "authors": [
                {
                  "name": "alekna",
                  "uid": "14733932"
                }
              ],
              "hideOriginal": false,
              "author": "alekna",
              "geo": {
                "zoomlevel": "7",
                "type": "Point",
                "maptype": "schema",
                "coordinates": "37.481333278119564 14.011666607111692"
              },
              "id": "urn:yandex:fotki:alekna:photo:657352",
              "published": "2012-07-10T09:02:52Z"
            },
            {
              "edited": "2012-07-10T10:08:39Z",
              "updated": "2012-07-10T10:08:39Z",
              "xxx": false,
              "img": {
                "XXS": {
                  "width": 75,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-XXS",
                  "height": 75
                },
                "XL": {
                  "width": 800,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-XL",
                  "height": 598
                },
                "M": {
                  "width": 300,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-M",
                  "height": 224
                },
                "L": {
                  "width": 500,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-L",
                  "height": 373
                },
                "XXXS": {
                  "width": 50,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-XXXS",
                  "height": 50
                },
                "XXXL": {
                  "width": 1083,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-XXXL",
                  "height": 809
                },
                "S": {
                  "width": 150,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-S",
                  "height": 112
                },
                "XS": {
                  "width": 100,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-XS",
                  "height": 75
                },
                "XXL": {
                  "width": 1024,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-XXL",
                  "height": 765
                },
                "orig": {
                  "width": 1083,
                  "href": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-orig",
                  "bytesize": 335863,
                  "height": 809
                }
              },
              "links": {
                "album": "http://api-fotki.yandex.ru/api/users/alekna/album/197816/?format=json",
                "editMedia": "http://img-fotki.yandex.ru/get/6114/14733932.2/0_a06a9_1d9e7bf_-1-orig",
                "self": "http://api-fotki.yandex.ru/api/users/alekna/photo/657065/?format=json",
                "alternate": "http://fotki.yandex.ru/users/alekna/view/657065/",
                "edit": "http://api-fotki.yandex.ru/api/users/alekna/photo/657065/?format=json"
              },
              "tags": {
                "природа": "http://api-fotki.yandex.ru/api/users/alekna/tag/%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0/"
              },
              "title": "В горах",
              "summary": "Муссумели, Сицилия",
              "access": "public",
              "created": "2012-05-03T19:51:31Z",
              "disableComments": false,
              "authors": [
                {
                  "name": "alekna",
                  "uid": "14733932"
                }
              ],
              "hideOriginal": false,
              "author": "alekna",
              "geo": {
                "zoomlevel": "7",
                "type": "Point",
                "maptype": "schema",
                "coordinates": "37.54266659729183 15.000333292409778"
              },
              "id": "urn:yandex:fotki:alekna:photo:657065",
              "published": "2012-07-09T11:51:39Z"
            },
            {
              "edited": "2012-07-10T10:07:37Z",
              "updated": "2012-07-10T10:07:37Z",
              "xxx": false,
              "img": {
                "XXS": {
                  "width": 75,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-XXS",
                  "height": 75
                },
                "XL": {
                  "width": 800,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-XL",
                  "height": 598
                },
                "M": {
                  "width": 300,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-M",
                  "height": 224
                },
                "L": {
                  "width": 500,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-L",
                  "height": 374
                },
                "XXXS": {
                  "width": 50,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-XXXS",
                  "height": 50
                },
                "S": {
                  "width": 150,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-S",
                  "height": 112
                },
                "XS": {
                  "width": 100,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-XS",
                  "height": 75
                },
                "XXL": {
                  "width": 1005,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-XXL",
                  "height": 751
                },
                "orig": {
                  "width": 1005,
                  "href": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-orig",
                  "bytesize": 273226,
                  "height": 751
                }
              },
              "links": {
                "album": "http://api-fotki.yandex.ru/api/users/alekna/album/197816/?format=json",
                "editMedia": "http://img-fotki.yandex.ru/get/5806/14733932.2/0_a07c9_fcb52004_-1-orig",
                "self": "http://api-fotki.yandex.ru/api/users/alekna/photo/657353/?format=json",
                "alternate": "http://fotki.yandex.ru/users/alekna/view/657353/",
                "edit": "http://api-fotki.yandex.ru/api/users/alekna/photo/657353/?format=json"
              },
              "tags": {},
              "title": "Небо",
              "access": "public",
              "created": "2012-05-03T19:22:37Z",
              "disableComments": false,
              "authors": [
                {
                  "name": "alekna",
                  "uid": "14733932"
                }
              ],
              "hideOriginal": false,
              "author": "alekna",
              "geo": {
                "zoomlevel": "7",
                "type": "Point",
                "maptype": "schema",
                "coordinates": "37.52349995076656 13.44649993814528"
              },
              "id": "urn:yandex:fotki:alekna:photo:657353",
              "published": "2012-07-10T10:02:38Z"
            }
          ]
        }
      };
    },
    components: {
      photo: Photo
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
