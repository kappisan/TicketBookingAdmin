<template>

  <div class="login">
    <h1>events</h1>
    <p v-for="(event, index) in getEvents">{{ index }}  {{ event }}</p>
  </div>

</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    name: 'Events',
    props: {
      msg: String
    },
    data: () => ({
      username: '',
      password: ''
    }),
    mounted() {
      console.log("mounted orb scape component")
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
