<script setup>
import SocialLinks from "./components/SocialLinks.vue";
import GoogleSignIn from "./components/googleSignIn.vue";
</script>

<template>
  <div class="main">
    <div class="intro">
      <router-view />
      <GoogleSignIn />
    </div>
    <div class="social">
      <SocialLinks />
    </div>
    <div class="google-signin">
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
  overflow: auto;
}

.social {
  grid-column: 3 / 5;
  grid-row: 2 / 3;
  overflow: auto;
}

.google-signin {
  grid-column: 4 / 5;
  grid-row: 0 / 1;
}
</style>
