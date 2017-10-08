<template>
  <b-navbar toggleable="md" type="dark" variant="info" class="sticky-top">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand href="#/home">Фотогалерея</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item href="#/home">
          Главная
        </b-nav-item>
        <b-nav-item href="#/album_create">
          Создать альбом
        </b-nav-item>
        <b-nav-item href="#/about">
          О сайте
        </b-nav-item>
      </b-nav>

      <!-- Right aligned nav items -->
      <b-nav is-nav-bar class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>Светлана</em>
          </template>
          <b-dropdown-item href="#">Выход</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>

  export default {
    name: 'navbar'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
