<script setup>
import { ref } from "vue";

const localStoredDB = ref(JSON.parse(localStorage.getItem("cacheResponse")));
</script>

<template>
  <div class="playground">
    <h3>Playground</h3>
    <code>
      <pre>
        {{ localStoredDB }}
        <hr />
      </pre>
    </code>
  </div>
</template>
