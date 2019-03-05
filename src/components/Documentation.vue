<template>

  <div class="login">
    <h1>Documentation</h1>
    <p>12 I turned around to see the voice that was speaking to me. And when I turned I saw seven golden lampstands, 13 and among the lampstands was someone like a son of man,[d] dressed in a robe reaching down to his feet and with a golden sash around his chest. 14 The hair on his head was white like wool, as white as snow, and his eyes were like blazing fire. 15 His feet were like bronze glowing in a furnace, and his voice was like the sound of rushing waters. 16 In his right hand he held seven stars, and coming out of his mouth was a sharp, double-edged sword. His face was like the sun shining in all its brilliance.</p>

    <p>17 When I saw him, I fell at his feet as though dead. Then he placed his right hand on me and said: “Do not be afraid. I am the First and the Last. 18 I am the Living One; I was dead, and now look, I am alive for ever and ever! And I hold the keys of death and Hades.</p>
  </div>

</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    name: 'Documentation',
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
