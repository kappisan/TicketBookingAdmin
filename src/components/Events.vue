<template>

  <div class="login">
    <h1>Events</h1>
    <hr>
    <div class="event" v-for="(event, index) in getEvents">
      <div class="thumbnail-container">
        <img class="thumbnail" :src="event.img">
      </div>
      <div>
        <h3>Details</h3>
        <table>
          <tr>
            <td>Index</td>
            <td>{{ index }}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{{ event.location }}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{{ event.city }}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{{ event.date }}</td>
          </tr>
        </table>
      </div>
      <div>
        <h3>Tickets</h3>
        <table>
          <tr class="ticket" v-for="(ticket, index) in event.tickets">
            <td>{{ ticket.name }}</td>
            <td>£{{ ticket.price }}</td>
          </tr>
        </table>
      </div>
    </div>
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

  .event {
    margin: 20px 10px;
    padding: 20px 10px;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #333;
    .thumbnail-container {
      background-color: #333;
      width: 300px;
      overflow: hidden;
      img {
        margin: auto;
        border-style: solid;
        border-width: 2px;
        border-color: #333;
      }
    }
    div {
      width: 30%;
      display: inline-block;
      vertical-align: top;
      padding: 0 20px;
    }
    h3 {
      margin: 0 auto 10px;
    }
    table {
      width: 100%;
      tr {
        td {
          text-align: left;
          padding: 2px 20px;  
        }
      }
    }

    .thumbnail {
      height: 200px; 
    }
  }

</style>
