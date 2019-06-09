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
    //this updates state with data from api 
    getBugs(state, results) {
      state.results = results
    }

  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        console.log(res.data)
        commit('getBugs', res.data)
        //commit calls to mutations 

      } catch (error) {
        console.error(error)

      }
    },

    createPost({ commit, dispatch }, payload) {
      _api.post('bugs', payload)
        .then(res => {
          dispatch('getBugs')
        })
        .catch(err => console.error(err))
    },
  }

})
