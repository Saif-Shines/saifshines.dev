<script>
import Intro from "./components/Intro.vue";
import SocialLinks from "./components/SocialLinks.vue";

export default {
  components: {
    Intro,
    SocialLinks,
  },
};
</script>

<template>
  <div class="main">
    <div class="intro">
      <h1>Saif Ali Shaik</h1>

      <Intro />
      <SocialLinks />
    </div>
    <div class="socialLinks">
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "BadScript";
  src: url("./assets/fonts/Bad_Script/BadScript-Regular.ttf");
}

h1 {
  font-family: "BadScript";
  font-size: 5rem;
  color: #352f44;
}

div .main {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: auto;
  column-gap: 2rem;
  row-gap: 2rem;
  place-items: center;
}

.intro {
  grid-column: 2 / 5;
  grid-row: 1 / 3;
  place-self: center;
}

.socialLinks {
  grid-column: 3 / 5;
  grid-row: 1 / 3;
}
</style>
