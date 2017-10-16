<template>
  <div class="about-page">
    <div class="row">
      <div class="col is-loading-text">
        <h2>Осуществляем вход...</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    created() {
      this.$store.dispatch('changeLoadingState', true);
      this.$store.dispatch('setToken', this.$route.query.access_token);
      this.$store.dispatch('getUserInfo').then(() => {
        this.$store.dispatch('changeLoadingState', false);
        this.$router.push('home');
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .is-loading-text {
    text-align: center;
    margin-top: 100px;
  }
</style>
