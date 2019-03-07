<template>

  <div class="login">
    <h1>Dashboard</h1>
    <hr>

    <p v-for="(event, index) in getEvents">{{ index }}  {{ event.location }}</p>
  </div>

</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    name: 'Summary',
    props: {
      msg: String
    },
    data: () => ({
      username: '',
      password: ''
    }),
    mounted() {
      console.log("mounted events component")
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
