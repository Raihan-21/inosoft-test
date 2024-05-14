// import './bootstrap';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

import Vue from "vue";

import App from "./App.vue";
import store from "./store";

const app = new Vue({
    el: "#app",
    components: {
        App,
    },
    store,
});
