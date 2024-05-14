import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: [{ id: 1, value: "1" }],
    },
    mutations: {
        SET_DATA(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        setData({ commit, state }, data) {
            commit("SET_DATA", data);
        },
    },
});

export default store;
