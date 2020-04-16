<template>
  <div id="app">
    <div id="nav" class="container-fullwidth">
        <b-navbar type="dark" variant="dark">
          <b-navbar-brand tag="h1" class="mb-0"> Bootstrap Login </b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>
                Logout</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        authenticated: false,
        fackAccount: {
          username: "kamal",
          password: "12345",
        },
      };
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.replace({
          name: "login",
        });
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false;
      },
    },
  };
</script>

<style>
  #app {
    margin: auto;
}
</style>