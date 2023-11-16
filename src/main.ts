import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";
import "./style.css";
import vue3GoogleLogin from "vue3-google-login";
import App from "./App.vue";

const app = createApp(App);
const clientId =
  "969705003951-r86fe4fqmnpgie7nkal5ht8nudi6iec5.apps.googleusercontent.com";
app.use(vue3GoogleLogin, {
  clientId,
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  if (to.name == "Db") {
    if (Boolean(sessionStorage.getItem("isAuth"))) {
      return true;
    } else {
      return { name: "ControlPanel" };
    }
  }
});

app.use(router);
app.mount("#app");
