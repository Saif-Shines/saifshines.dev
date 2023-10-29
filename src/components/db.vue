<script setup>
import { Squid } from "@squidcloud/client";
import { reactive } from "vue";

const squid = new Squid({
  appId: "tjg7td8ufquwauqdbm",
  region: "us-east-1.aws",
});

let collectionRef = squid.collection("portfolio");
let docRef = collectionRef.doc();
let data = docRef.insert({ name: "Saif" });
console.log("data", data);
// let collection
</script>

<template>
  <h1>Hello</h1>
  <pre>
    <code>
      {{ collectionRef }}
    </code>
  </pre>
</template>
