import { createRouter, createWebHistory } from "vue-router";
import Default from "./views/Default.vue";
import Home from "./views/Home.vue";

const routes = [
    { path: '/', component: Default },
    { path: '/home', component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;