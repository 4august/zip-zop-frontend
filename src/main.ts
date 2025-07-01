import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import { createVuetify } from 'vuetify';
import "@mdi/font/css/materialdesignicons.css";

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App);
const vuetify = createVuetify({
    icons:{
         defaultSet: "mdi",
    },
    components,
    directives,
})

app.use(vuetify)
app.use(router)
app.mount('#app')