import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App);
app.use(router);
app.mount("#app");
