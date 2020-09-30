import { createApp, component } from "vue";
import App from "./App.vue";
import './assets/css/main.scss';
import router from "./router";
import Default from './layouts/Default.vue'

component('default-layout', Default)

createApp(App).use(router).mount("#app");