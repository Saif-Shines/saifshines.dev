import Intro from "./components/Intro.vue";
import SocialLinksVue from "./components/SocialLinks.vue";
import Explainer from "./components/Explainer.vue";
import SocialLinksDB from "./components/db.vue";
import controlPanel from "./components/control-panel/controlPanel.vue";

export const routes = [
  { path: "/", component: Intro, name: "Home" },
  { path: "/social", component: SocialLinksVue, name: "Social" },
  { path: "/explain", component: Explainer, name: "Explain" },
  {
    path: "/db",
    component: SocialLinksDB,
    meta: { requiresAuth: true },
    name: "Db",
  },
  { path: "/control-panel", component: controlPanel, name: "ControlPanel" },
];
