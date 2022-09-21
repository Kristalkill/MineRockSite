import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faChevronDown  } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";

const emitter = mitt();

import "./assets/styles.scss";


library.add(faChevronDown);

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.component("font-awesome-icon", FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .mount("#app")
