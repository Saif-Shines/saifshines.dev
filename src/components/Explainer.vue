<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  components: {
    PrismEditor,
  },
  data: () => ({ code: "/*Use this space to explain by writing*/ \n\n\n\n\n" }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
  },
};
</script>

<template>
  <prism-editor
    class="my-editor"
    v-model="code"
    :highlight="highlighter"
    line-numbers
  ></prism-editor>
</template>

<style scoped>
/* required class */
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: ExplainMono;
  font-size: 1rem;
  line-height: 1.5;
  padding: 15px;
  height: 50rem;
  width: 50rem;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
