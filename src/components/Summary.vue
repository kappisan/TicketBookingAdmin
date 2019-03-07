<template>

  <div class="summary">
    <h1>Dashboard</h1>
    <hr>

    <h2>Events</h2>

    <p v-for="(event, index) in getEvents">{{ index }}  {{ event.location }}</p>

    <hr>

    <h2>BTC Wallet</h2>
    <div>
        <div class="btc-balance">
          <p>BTC Address: &nbsp; &nbsp; {{ getBTCAddress }}</p><br>
          <p>BTC in: <i class="fa fa-btc"></i> {{ getBTCIn }}</p>
        </div>
    </div>
  </div>
    
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
    ...mapGetters([
        'getBTCIn',
        'getBTCAddress',
        'getUsername',
        'getEvents'
      ]),
      //Other computed properties
    },
    methods: {
      login() {
        console.log("summary function", this.username, this.password);

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

.summary {
  p {
    text-align: center;
  }
}

</style>
