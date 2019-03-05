import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'mr kappi'
  },
  mutations: {

  },
  action: {

  },
  getters: {
    getUsername: state => state.username
  }
})
