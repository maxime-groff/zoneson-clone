import { createApp} from "vue";
import App from "./App.vue";
import './assets/css/main.scss';
import router from "./router";

import Default from './layouts/Default.vue'

const app = createApp(App)

app.component('DefaultLayout', Default)

app.use(router)

app.mount('#app')
