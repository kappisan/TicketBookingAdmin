import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import * as $ from 'jquery'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    username: '',
    satoshisIn: 0,
    sales: null,
    btcAddress: '3QaQ33KSoPVYmZtfTNe6mXt5R3jGgRTjXZ',
    events: null,
    sales: null
  },
  mutations: {
    saveUser (state, username) {
      console.log('saveUser mutation', username)
      state.username = username
    },
    logout (state) {
      console.log('logout mutation')
      state.username = ''
      window.location.href = '/'
    },
    createEvent (state, event) {
      console.log('create event mutation', event)
      state.events.push(event)
    },
    fetchWalletData (state) {
      axios
        .get('https://blockchain.info/q/getreceivedbyaddress/' + state.btcAddress + '?confirmations=6')
        .then(response => {
          state.satoshisIn = response.data
          console.log('THIS IS BTC IN', this.satoshisIn)
        })
    }
  },
  action: {

  },
  getters: {
    getUsername: state => state.username,
    getSatoshisIn: state => state.satoshisIn,
    getBTCIn: state => state.satoshisIn / 100000000,
    getBTCAddress: state => state.btcAddress,
    getEvents: state => {
      if (!state.username) return [];
      if (!state.events) {

        axios
          .get('https://m25hqax3sj.execute-api.us-east-1.amazonaws.com/default/events')
          .then(response => {
            if (response && response.data) {
              const rows = response.data.Items;
              console.log("axios has provided events", rows)
              state.events = rows
            }
          })

          return state.events
      } else {
        console.log("recalling events from localstorage, no api call necessary")
        return state.events;
      }
    },
    totalInSales: state => {
      if (!state.sales || state.sales.length < 1) return 0;
      return state.sales.reduce((accumulator, sale) => {
        return accumulator + parseFloat(sale.amount);
      }, 0)
    },
    fetchSalesData: state => {
      console.log("fetch sales data precheck", state.sales);
      if (!state.username) return [];
      if (!state.sales) {

        axios
          .post('https://m25hqax3sj.execute-api.us-east-1.amazonaws.com/default/sales', {})
          .then(response => {
            if (response && response.data) {
              const rows = response.data.Items;
              console.log("axios has provided sales", rows)
              state.sales = rows
            }
          })

          return state.sales
      } else {
        console.log("recalling sales from localstorage, no api call necessary")
        return state.sales;
      }
    }
  }
})
