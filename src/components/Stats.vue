<template>

  <div class="login">
    <h1>Stats</h1>
  </div>

</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    name: 'Stats',
    props: {
      msg: String
    },
    data: () => ({
      username: '',
      password: ''
    }),
    mounted() {
      console.log("mounted stats component")
    },
    computed : {
    ...mapGetters(['getUsername', 'getEvents']),
      //Other computed properties
    },
    methods: {
      login() {
        console.log("login function", this.username, this.password);

        // hardcoded login screen
        if (this.username == 'menacing' && this.password == 'media') {
          console.log("password is correct");
          window.location.href = 'dashboard';
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
