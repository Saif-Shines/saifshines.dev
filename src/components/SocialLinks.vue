<script setup>
import { reactive } from "vue";

const state = reactive({
  links: [
    { label: "Journal", url: "https://world.hey.com/saif.shines" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/saif-shines/" },
    { label: "GitHub", url: "https://github.com/Saif-Shines/" },
    { label: "Email", url: "mailto:saif.shines@hey.com" },
    { label: "Blog", url: "https://saifshines.medium.com/" },
    {
      label: "Skills",
      url: "https://frontendmasters.com/u/Saif_Shines/",
    },
    {
      label: "Mastodon",
      url: "https://mastodon.world/@saif_shines",
    },
  ],
});
</script>

<template>
  <ul>
    <li v-for="link in state.links" :key="link.label">
      <a :href="link.url" target="_blank" rel="noopener noreferrer">{{
        link.label
      }}</a>
    </li>
    <li>
      <router-link class="nav" to="/">Home</router-link>
    </li>
    <li>
      <router-link class="nav" to="/explain">Explain</router-link>
    </li>
    <li>
      <router-link class="nav" to="/db"></router-link>
    </li>
  </ul>
</template>

<style scoped>
@font-face {
  font-family: "Urbanist";
  src: url("../assets/fonts/Urbanist/Urbanist-VariableFont_wght.ttf");
}

ul {
  display: flex;
  justify-content: space-around;
  flex-flow: column wrap;
  align-items: center;
  width: 65%;
}

li {
  font-family: Urbanist;
  font-weight: 50;
  letter-spacing: 0.05em;
  font-size: 1.3rem;
  width: 65%;
  color: #5c5470;
  list-style: none;
  padding: 1rem;
}

a {
  color: #5c5470;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease-in-out;
}

a:hover {
  border-color: #5c5470;
}

.nav:hover {
  border-color: #f9d5a3;
}
</style>
