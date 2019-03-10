<template>

  <div class="login">
    <h1>Sales</h1>
    <hr>

    <h2>SUMMARY</h2>

    <table>
      <tr>
        <th>GBP</th>
        <th><i class="fa fa-gbp"></i></th>
        <th>{{ totalInSales }}</th>
      </tr>
      <tr>
        <th>BTC</th>
        <th><i class="fa fa-btc"></i></th>
        <th>{{ getBTCIn }}</th>
      </tr>
    </table>

    <hr>

    <h2>Ticket sales</h2>

    <div class="btc-balance">
      <p>GBP in: <i class="fa fa-gbp"></i> {{ totalInSales }}</p>
    </div>

    <table>
      <tr>
        <th>Date</th>
        <th>Email</th>
        <th>Price</th>
      </tr>
      <tr v-for="ticket of salesData">
        <td>{{ ticket.date }}</td>
        <td>{{ ticket.email }}</td>
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
  import * as _ from 'lodash'

  export default {
    name: 'Sales',
    props: {
      msg: String
    },
    data: () => ({
      username: '',
      password: '',
      salesData: []
    }),
    mounted() {
        console.log("this.fetchSalesData", this.fetchSalesData);
        this.salesData = _.orderBy(this.fetchSalesData, 'date').reverse();
    },
    computed : {
    ...mapGetters([
        'getUsername',
        'getEvents',
        'getBTCIn',
        'getBTCAddress',
        'fetchSalesData',
        'totalInSales'
      ])
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


</style>
