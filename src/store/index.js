import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: ''
    },
    mutations: {
        //city
        setCity(state, city) { state.city = city },
    },
    actions: {
        // city
        setCityAction(context, city) { context.commit('setCity', city) },
    },
    getters: {
        //clients
        getCity(state) { return state.city },
    },
});