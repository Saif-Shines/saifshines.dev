<script></script>

<template>
  <div class="main">
    <div class="intro">
      <h1>Saif Ali Shaik</h1>
      <p>
        Working closely with developers as end users for years, I have developed
        a clear understanding of their needs and possess the ability to
        collaborate across engineering, marketing, partnerships, and customer
        success teams to offer a greatly enhanced platform experience to our
        users. Having represented the platform externally as an evangelist,
        advocate, and trainer, I have learned to gather feedback from the user
        community, blend it with my own research, and distill it for internal
        stakeholders.
      </p>
      <p>
        I bring a combination of strong opinions backed by data and an open mind
        that is always curious to learn. I aspire to leverage these skills to
        create products that meet and exceed user expectations, ultimately
        making their lives easier.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@200&family=Nanum+Gothic+Coding&display=swap");

h1 {
  font-family: "Nanum Gothic Coding", cursive;
  font-size: 5rem;
  color: #352f44;

  @media (min-width: 300px) {
    font-size: 3rem;
  }
}

p {
  font-family: "M PLUS 1 Code", monospace;
  font-weight: 50;
  font-size: 1.3rem;
  width: 65%;
  color: #5c5470;
  @media (min-width: 300px) {
    display: none;
  }
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
