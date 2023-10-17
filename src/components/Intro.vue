<script async>
import SocialLinks from "./SocialLinks.vue";
import squid from "../utils/squid";

try {
  const portfolioCollection = squid.collection("portfolio");
  const name = await portfolioCollection.query().snapshot();
  console.table(name);
} catch (error) {
  console.error("problem accessing db", error);
}

export default { components: { SocialLinks } };
</script>

<template>
  <div>
    <h1>Saif Ali Shaik</h1>
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
    <SocialLinks />
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
