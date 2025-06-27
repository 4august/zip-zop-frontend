import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import { createVuetify } from 'vuetify';
import { components, directives } from 'vuetify/dist/vuetify.js';


const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
})

app.use(vuetify)
app.use(router)
app.mount('#app')