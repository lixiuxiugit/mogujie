import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cartlist: []
  },
  mutations: {
    add (state, choose) {
      state.cartlist.push(choose)
    }
  },
  actions: {
    add (context, choose) {
      context.commit('add', choose)
    }
  },
  getters: {

  }
})
export default store
