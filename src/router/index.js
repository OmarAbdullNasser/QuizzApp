import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "../views/Main.vue";
import popup from "../views/popup.vue";

const routes = [{
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/popup",
        name: "popup",
        component: popup,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;