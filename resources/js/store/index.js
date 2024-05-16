import Vue from "vue";
import Vuex from "vuex";

import { countBy, groupBy, chain } from "lodash";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: [{ id: 1, value: "1" }],
        initialFilterOptions: {
            product_type: [],
            grade: [],
            size: [],
            connection: [],
        },
        filterOptions: {
            product_type: [],
            grade: [],
            size: [],
            connection: [],
        },
    },
    mutations: {
        SET_DATA(state, payload) {
            state.data = payload;
        },
        SET_INITIAL_TYPES(state, payload) {
            state.initialFilterOptions.product_type = payload;
        },
        SET_INITIAL_GRADES(state, payload) {
            state.initialFilterOptions.grade = payload;
        },
        SET_INITIAL_SIZES(state, payload) {
            state.initialFilterOptions.size = payload;
        },
        SET_INITIAL_CONNECTIONS(state, payload) {
            state.initialFilterOptions.connection = payload;
        },
        SET_TYPES(state, payload) {
            state.filterOptions.product_type = payload;
        },
        SET_GRADES(state, payload) {
            state.filterOptions.grade = payload;
        },
        SET_SIZES(state, payload) {
            state.filterOptions.size = payload;
        },
        SET_CONNECTIONS(state, payload) {
            state.filterOptions.connection = payload;
        },
    },
    actions: {
        setInitialFilterOption({ commit, dispatch, state }, data) {
            // Count types count

            const types = chain(data)
                .groupBy("product_type")
                .map((items, name) => {
                    return {
                        name: name,
                        count: items.length,
                    };
                })
                .value();
            const grades = chain(data)
                .groupBy("grade")
                .map((items, name) => {
                    return {
                        name: name,
                        count: items.length,
                    };
                })
                .value();
            const sizes = chain(data)
                .groupBy("size")
                .map((items, name) => {
                    return {
                        name: name,
                        count: items.length,
                    };
                })
                .value();
            const connections = chain(data)
                .groupBy("connection")
                .map((items, name) => {
                    return {
                        name: name,
                        count: items.length,
                    };
                })
                .value();

            commit("SET_TYPES", types);
            commit("SET_GRADES", grades);
            commit("SET_SIZES", sizes);
            commit("SET_CONNECTIONS", connections);
        },
        setFilterOption({ commit, dispatch, state }, data) {
            const types = countBy(data.products, "product_type");
            const grades = countBy(data.products, "grade");
            const sizes = countBy(data.products, "size");
            const connections = countBy(data.products, "connection");
            Object.keys(state.filterOptions).forEach((filter) => {
                const typeCount = countBy(data.products, filter);
                state.filterOptions[filter] = state.filterOptions[filter].map(
                    (type, i) => {
                        // if (filter === data.type[data.type.length - 1].filter)
                        //     return { ...type };
                        if (!typeCount[type.name]) return { ...type, count: 0 };
                        return { ...type, count: typeCount[type.name] };
                    }
                );
            });
            // state.filterOptions.types = state.filterOptions.types.map(
            //     (type, i) => {
            //         // if(type.name ===)
            //         if (!types[type.name]) return { ...type, count: 0 };
            //         return { ...type, count: types[type.name] };
            //     }
            // );
            // state.filterOptions.grades = state.filterOptions.grades.map(
            //     (type, i) => {
            //         // if(type.name ===)
            //         if (!grades[type.name]) return { ...type, count: 0 };
            //         return { ...type, count: grades[type.name] };
            //     }
            // );
            // state.filterOptions.sizes = state.filterOptions.sizes.map(
            //     (type, i) => {
            //         // if(type.name ===)
            //         if (!sizes[type.name]) return { ...type, count: 0 };
            //         return { ...type, count: sizes[type.name] };
            //     }
            // );
            // state.filterOptions.connections =
            //     state.filterOptions.connections.map((type, i) => {
            //         // if(type.name ===)
            //         if (!connections[type.name]) return { ...type, count: 0 };
            //         return { ...type, count: connections[type.name] };
            //     });
        },
        setData({ commit, dispatch, state }, data) {
            commit("SET_DATA", data);
            dispatch("setInitialFilterOption", data);
        },
    },
});

export default store;
