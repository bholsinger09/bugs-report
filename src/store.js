import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SSL_OP_NETSCAPE_CA_DN_BUG } from 'constants';

Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ben'
})


export default new Vuex.Store({
  state: {
    bugs: [],
    bug:{}

  },
  mutations: {
    //results is the data from api
    //this updates state with data from api 
    setBugs(state, results) {
      state.bugs = results
    },
    setBug(state, id) {
      state.bug = id
    }
    
    

  },
  actions: {
    async getBugs({ commit}) {
      try {
        let res = await _api.get('bugs')
        console.log(res.data.results)
        commit('setBugs', res.data.results)
        //commit calls to mutations 

      } catch (error) {
        console.error(error)

      }
    },
    
    async getBug({ commit}, id) {
      try {
        let res = await _api.get('id')
        console.log(res.data.results)
        commit('setBugs', res.data.results)
        //commit calls to mutations 

      } catch (error) {
        console.error(error)

      }
    },

    

    createPost({ dispatch }, payload) {
      _api.post('bugs', payload)
        .then(res => {
          dispatch('getBugs')
          //dispatch actions when called to $store
        })
        .catch(err => console.error(err))
    },
  }

})
