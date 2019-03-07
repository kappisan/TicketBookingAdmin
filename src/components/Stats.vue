<template>

  <div class="login">
    <h1>Stats</h1>
    <hr>

    <h2>Ticket sales</h2>
    <table>
      <tr>
        <th>Event</th>
        <th>Sold</th>
        <th>Remaining</th>
        <th>Total</th>
      </tr>
      <tr v-for="event of getEvents">
        <td>{{ event.location }}, {{ event.city }}</td>
        <td>{{ event.tickets.length }}</td>
        <td>{{ event.tickets.length }}</td>
        <td>{{ totalTickets(event.tickets) }}</td>
      </tr>
    </table>

    <hr>

    <h2>BTC Wallet</h2>
    <div>
        <div class="btc-balance">
          <p>BTC Address: &nbsp; &nbsp; {{ getBTCAddress }}</p><br>
          <p>BTC in: <i class="fa fa-btc"></i> {{ getBTCIn }}</p>
        </div>
    </div>
  </div>

</template>

<script>

  import {mapGetters} from 'vuex'

  import * as d3 from 'd3';
  import * as moment from 'moment'

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
      console.log("mounted stats component", this.getEvents);

    },
    computed : {
    ...mapGetters([
        'getUsername',
        'getEvents',
        'getBTCIn',
        'getBTCAddress'
      ]),
      //Other computed properties
    },
    methods: {
      totalTickets(tickets) {
        console.log("reduce tickets", tickets);
        return tickets.reduce((memo, t) => t ? t.available : 0, 0);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  table {
    margin: auto;
    td,
    th {
      text-align: right;
      padding: 2px 10px;
    }
  }

</style>
