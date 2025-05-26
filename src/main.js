import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap";
import "./assets/global.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
