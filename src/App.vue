<script>
import Intro from "./components/Intro.vue";
import SocialLinks from "./components/SocialLinks.vue";
import Explainer from "./components/Explainer.vue";

export default {
  components: {
    Intro,
    SocialLinks,
    Explainer,
  },
};
</script>

<template>
  <div class="main">
    <div class="intro">
      <router-view />
    </div>
    <div class="social">
      <SocialLinks />
    </div>
  </div>
</template>

<style scoped>
div .main {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: auto;
  column-gap: 2rem;
  row-gap: 2rem;
  place-items: center;
}

.intro {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  place-self: center;
}

.socialLinks {
  grid-column: 3 / 5;
  grid-row: 2 / 3;
}
</style>
