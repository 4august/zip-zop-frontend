import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Logar.vue"
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    { path: '/', meta: { authAccess: true }, component: HelloWorld, name: "i" },
    { path: '/home', meta: { authAccess: true }, component: Home, name: "Home" },
    { path: '/login', meta: { authAccess: false }, component: Login, name: "Login" },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    //com flag de autenticaçao igual true e sem token de autenticaçao cai no login
    if (to.meta.authAccess && !sessionStorage.getItem("token")) {

        next({ name: "Login" });
        return false
    }
    //com flag de autenticaçao igual false so segue
    else if (!to.meta.authAccess)
        next()
    //so segue
    else
        next()
})

export default router;