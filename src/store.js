import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/bentest'
})
//http://bcw-sandbox.herokuapp.com/api/jake/logs
//https://bcw-sandbox.herokuapp.com/api/bentest

export default new Vuex.Store({
  state: {
    bugs: []

  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    }

  },
  actions: {
    async getBugs({ commit, dispatch }, payload) {
      try {
        let res = await _api.get('payload')
        console.log(res.data)
        commit('setBugs', res.data)

      } catch (error) {
        console.error(error)

      }
    }


  }
})
