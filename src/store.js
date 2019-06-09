import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ben'
})


export default new Vuex.Store({
  state: {
    results: []

  },
  mutations: {
    //results is the data from api
    setBugs(state, results) {
      state.results = results
    }

  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        console.log(res.data)
        commit('setBugs', res.data)
        //commit calls to mutations 

      } catch (error) {
        console.error(error)

      }
    }
 }

})
