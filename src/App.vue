<script>
import Intro from "./components/Intro.vue";

export default {
  components: {
    Intro,
  },
};
</script>

<template>
  <div class="main">
    <div class="intro">
      <h1>Saif Ali Shaik</h1>
      <Intro />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
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
</style>
