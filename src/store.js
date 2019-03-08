import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    username: '',
    satoshisIn: 0,
    btcAddress: '3QaQ33KSoPVYmZtfTNe6mXt5R3jGgRTjXZ',
    events: [
      {
        eid: 'brixton',
        location: 'Brixton',
        city: 'London',
        date: '20190420',
        time: '10pm',
        tickets: [
          {
            name: 'Front Row',
            price: 59.99,
            available: 100,
            tid: 'adult0'
          },
          {
            name: 'Middle Auditorium',
            price: 39.99,
            available: 200,
            tid: 'adult1'
          },
          {
            name: 'Balcony',
            price: 89.99,
            available: 20,
            tid: 'adult2'
          }
        ],
        img: 'https://cdn.venuescanner.com/photos/658e286008d6340dc8ed00431ff2efc2.jpg',
        desc: 'The award-winning Academy Theatre was built in 1929 as the flagship of the Astoria Group’s chain of atmospheric variety theatres. The main auditorium contains Europe’s largest fixed stage, framed by an elaborate proscenium arch based on the design of the Rialto Bridge. The venue boasts a magnificent Art Deco interior, with a grand entrance hall and sweeping double stairway in the foyer.'
      },
      {
        eid: 'cambridge',
        location: 'Cambridge Junction',
        city: 'Cambridge',
        date: '20190421',
        time: '9pm',
        tickets: [
          {
            name: 'Front Row',
            price: 59.99,
            available: 100,
            tid: 'adult1'
          },
          {
            name: 'Middle Auditorium',
            price: 39.99,
            available: 200,
            tid: 'adult2'
          }
        ],
        img: 'https://s3-media3.fl.yelpcdn.com/bphoto/Jz9OdzMlznwjyPQZiwO8sA/o.jpg',
        desc: 'At Cambridge Junction, audiences and artists experience and explore contemporary performance, popular culture, creative learning, and the rich territories in-between. We are committed to art and entertainment that is up-and-coming, youthful and cutting-edge.  We seek to be relevant and meaningful to the lives of audiences, and informed by our location in Cambridge.'
      },
      {
        eid: 'glasgow',
        location: 'The Stand Comedy Club',
        city: 'Glasgow',
        date: '20190422',
        time: '9:30pm',
        tickets: [
          {
            name: 'Front Row',
            price: 39.99,
            available: 50,
            tid: 'adult1'
          },
          {
            name: 'Regular',
            price: 19.99,
            available: 100,
            tid: 'adult2'
          }
        ],
        img: 'http://www.eharmony.co.uk/relationship-advice/wp-content/uploads/2014/01/The-Stand-Comedy-Club.jpg',
        desc: 'With solo shows from better known performers and prime stand-up every weekend, there’s always something going on at The Stand Comedy Club Glasgow!'
      }
    ]
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
    getBTCIn (state) {
      return 24832729
    },
    fetchWalletData (state) {
      axios
        .get('https://blockchain.info/q/getreceivedbyaddress/' + state.btcAddress + '?confirmations=6')
        .then(response => {
          state.satoshisIn = response.data
          console.log('THIS IS BTC IN', this.satoshisIn)
        })
    },
    eventData (state) {
      axios
        .get('https://m25hqax3sj.execute-api.us-east-1.amazonaws.com/default/contact')
        .then(response => {
          // state.events = response.data
          console.log('THIS EVENT DATA FROM API GATEWAY', response)
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
    getEvents: state => state.username ? state.events : []
  }
})
