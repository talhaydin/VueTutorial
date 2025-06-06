import { createApp } from "vue";
import App from "./App.vue";
import ContactUs from "./components/ContactUs.vue";
import ButtonCounter from "./components/ButtonCounter.vue";

createApp(App)
  .component("ContactUs", ContactUs)
  .component("ButtonCounter", ButtonCounter)
  .mount("#app");
