import { createRouter, createWebHistory } from "vue-router";
import Default from "./views/Default.vue";
import Home from "./views/Home.vue";
import Login from "./views/Logar.vue"

const routes = [
    { path: '/', component: Default },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;