<script setup>
import { onMounted, ref } from "vue";
import { portfolioCollection, squid } from "../utils/squid";

const name = ref(null);

onMounted(async () => {
  let data = await portfolioCollection.doc("name").snapshot();
  name.value = data.name;
});
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <p>
      Working closely with developers as end users for years, I have developed a
      clear understanding of their needs and possess the ability to collaborate
      across engineering, marketing, partnerships, and customer success teams to
      offer a greatly enhanced platform experience to our users. Having
      represented the platform externally as an evangelist, advocate, and
      trainer, I have learned to gather feedback from the user community, blend
      it with my own research, and distill it for internal stakeholders.
    </p>
    <p>
      I bring a combination of strong opinions backed by data and an open mind
      that is always curious to learn. I aspire to leverage these skills to
      create products that meet and exceed user expectations, ultimately making
      their lives easier.
    </p>
  </div>
</template>

<style>
h1 {
  font-family: "BadScript";
  font-size: 5rem;
  color: #352f44;
}

p {
  font-family: Urbanist;
  font-weight: 50;
  letter-spacing: 0.05em;
  font-size: 1.3rem;
  width: 85%;
  color: #5c5470;
}
</style>
