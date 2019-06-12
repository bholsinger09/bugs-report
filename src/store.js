import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { notEqual } from 'assert';


Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ben'
})


export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {},
    notes: [],
    note: {}

  },
  mutations: {
    //results is the data from api
    //this updates state with data from api 
    setBugs(state, results) {
      state.bugs = results
    },
    setBug(state, bug) {
      state.bug = bug
    },

    //set notes is where the details of the bug get edited 
    setNotes(state, results) {
      state.notes = results
    }




  },
  actions: {

    //vuex note
    //actions use commit to call on mutations
    //note they are done once the promise has gotten the data

    //dispatch is used on asyc requests such as calling on another action
    //all actions are called from components 

    //get request below: 

    async getBugs({ commit }) {
      try {
        let res = await _api.get('bugs')
        console.log(res.data.results)
        commit('setBugs', res.data.results)
        //commit calls to mutations 

      } catch (error) {
        console.error(error)

      }
    },





    async getBugById({ commit }, id) {
      try {
        let res = await _api.get('bugs/:id')
        console.log(res.data.results)
        commit('setBugs', res.data.results)
        //commit calls to mutations  when promise is finished

      } catch (error) {
        console.error(error)

      }
    },

    async getBugByIdNotes({ commit }, id) {
      try {
        let res = await _api.get('bugs/:id/notes')
        console.log(res.data.results)
        commit('setBugs', res.data.results)
        //commit calls to mutations 

      } catch (error) {
        console.error(error)

      }
    },



    //post request below: 
    //payload is data pasted from components

    async createPost({ commit }, payload) {
      try {
        let res = await _api.post('bugs', payload)
        commit('setBugs')

      } catch (error) {
        console.error(error)

      }

    },




    async editPost({ commit }, payload) {
      try {
        let res = await _api.put('bugs/' + payload.id, payload)
        commit('setNotes', res.data.results)

      } catch (error) {
        console.error(error)

      }

    },

    setBugById({ commit, dispatch }, id) {
      console.log(id)
      commit("setBug", id)
    },

    async getSelectedBugById({ commit, dispatch }, id) {
      let res = await _api.get('bugs/' + id)
      console.log(id)
      commit('setBug', res.data.results)
    },

    //actions for notes below:
    async getNotes({ commit }, payload) {
      try {
        let res = await _api.get('bugs/' + payload + '/notes')
        console.log(payload)
        commit('setNotes', res.data.results)
        //commit calls to mutations 

      } catch (error) {
        console.error(error)

      }
    },

    async createNote({ dispatch }, payload) {
      try {
        let res = await _api.post('bugs/' + payload.bug + "/notes", payload)
        dispatch('getNotes', payload.bug)

      } catch (error) {
        console.error(error)

      }

    },

    async deleteNote({ dispatch }, note) {
      try {
        let res = await _api.delete('bugs/' + note.bug + '/notes/' + note._id)
        dispatch('getNotes', note.bug)

      } catch (error) {
        console.error(error)

      }

    }












  }

})
