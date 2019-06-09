import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ben'
})


export default new Vuex.Store({
  state: {
    bugs: {}

  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    }

  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        console.log(res.data)
        commit('setBugs', res.data)

      } catch (error) {
        console.error(error)

      }
    }


  }
})
