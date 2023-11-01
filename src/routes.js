import Intro from "./components/Intro.vue";
import SocialLinksVue from "./components/SocialLinks.vue";
import Explainer from "./components/Explainer.vue";
import SocialLinksDB from "./components/db.vue";

export const routes = [
  { path: "/", component: Intro },
  { path: "/social", component: SocialLinksVue },
  { path: "/explain", component: Explainer },
  { path: "/db", component: SocialLinksDB },
];
