<template>
  <b-navbar toggleable="md" type="dark" variant="info" class="sticky-top row">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand href="#/home">Фотогалерея</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
          <b-nav-item to="home">
            Главная
          </b-nav-item>
          <b-nav-item to="album_create" v-if="isAuthorized">
            Создать альбом
          </b-nav-item>
          <b-nav-item to="about">
            О сайте
          </b-nav-item>
      </b-nav>

      <!-- Right aligned nav items -->
      <b-nav is-nav-bar class="ml-auto">

        <b-nav-item-dropdown right v-if="isAuthenticated">
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>{{userInfo.realName}}</em>
          </template>
          <b-dropdown-item href="#" @click="logOff">Выход</b-dropdown-item>
        </b-nav-item-dropdown>
        <a :href="yandexLink" v-if="!isAuthenticated" class="login-btn"></a>
      </b-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'navbar',
    methods: {
      logOff() {
        this.$store.dispatch('logOff');
      }
    },
    computed: {
      ...mapGetters([
        'isAuthenticated',
        'isAuthorized',
        'userInfo'
      ])
    },
    data() {
      return {
        yandexLink: 'https://oauth.yandex.ru/authorize?response_type=token&client_id=b1d50c86d151454a95f8d83d76f45d7a&device_id=123456&display'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-btn {
    width: 122px;
    height: 21px;
    background: url('../assets/yandex_btn.png');
  }
</style>
