import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap";

createApp(App).use(createPinia()).mount("#app");
