<template>

  <div class="login">
    <h1>Stats</h1>
    <hr>

    <h2>Ticket sales</h2>
    <table>
      <tr>
        <th>Email</th>
        <th>event</th>
        <th>Price</th>
      </tr>
      <tr v-for="ticket of fetchSalesData">
        <td>{{ ticket.email }}</td>
        <td>{{ ticket.event }}</td>
        <td>£{{ ticket.amount }}</td>
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
        'getBTCAddress',
        'fetchSalesData'
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
