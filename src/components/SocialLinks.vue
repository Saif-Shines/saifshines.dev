<script setup>
import { reactive } from "vue";

const state = reactive({
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/saif-shines/" },
    { label: "GitHub", url: "https://github.com/Saif-Shines/" },
    { label: "Blog", url: "https://world.hey.com/saif.shines" },
    { label: "Email", url: "mailto:saif.shines@hey.com" },
  ],
});
</script>

<template>
  <ul>
    <li v-for="link in state.links" :key="link.label">
      <a :href="link.url">{{ link.label }}</a>
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
  justify-content: center;
  align-items: center;
  padding: 0;
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
</style>
