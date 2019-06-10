import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ben'
})


export default new Vuex.Store({
  state: {
    bugs: [],
    bug:{},
    notes:{}

  },
  mutations: {
    //results is the data from api
    //this updates state with data from api 
    setBugs(state, results) {
      state.bugs = results
    },
    setBug(state, id) {
      state.bug = id
    },
    //set notes is where the details of the bug get edited 
    setNotes(state,results){
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
    
    async getBugById({ commit}, id) {
      try {
        let res = await _api.get('bugs/:id')
        console.log(res.data.results)
        commit('setBugs', res.data.results)
        //commit calls to mutations  when promise is finished

      } catch (error) {
        console.error(error)

      }
    },

    async getBugByIdNotes({ commit}, id) {
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
         let res = await _api.post('bugs')
         commit('setBugs')
         
       } catch (error) {
         console.error(error)
         
       }
      
    },

    async createNotesbyId({ dispatch }, payload) {
      try {
        let res = await _api.post('bugs/:id/notes')
        dispatch('getBugs')
        
      } catch (error) {
        console.error(error)
        
      }
     
   },

   async createPost({ dispatch }, payload) {
    try {
      let res = await _api.post('bugs')
      dispatch('getBugs')
      
    } catch (error) {
      console.error(error)
      
    }
   
 },

 async editPost({ commit}, payload) {
  try {
    let res = await _api.put('bugs/'+ payload.id, payload)
    commit('setNotes', res.data.results)
    
  } catch (error) {
    console.error(error)
    
  }
 
},











  }

})
