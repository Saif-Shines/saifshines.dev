<script setup>
import { reactive } from "vue";
import {
  profile,
  thoughts,
  work,
  pushInPath,
  updateLocalStorageAndRead,
} from "../utils/db";

const form = reactive({
  name: "",
  description: "",
  cacheDoc: JSON.parse(localStorage.getItem("cacheResponse")),
});

const dbProps = {
  docRefName: "name",
  collectionName: "portfolio",
};

async function save(docProp) {
  switch (String(docProp)) {
    case "name":
      pushInPath({
        docProp: "name",
        valueToPush: form.name,
        ...dbProps,
      });
      console.info("saving name");
      break;
    case "desc":
      pushInPath({
        docProp: "name",
        valueToPush: form.description,
        ...dbProps,
      });
      break;
    case "socialProfiles":
      console.info("saving social profiles...");
      pushInPath({
        docProp: "socialProfiles",
        valueToPush: profile,
        ...dbProps,
      });
      break;
    case "thoughts":
      console.info("saving thoughts");
      pushInPath({
        docProp: "thoughts",
        valueToPush: thoughts,
        ...dbProps,
      });
      break;
    case "works":
      console.info("saving works");
      pushInPath({
        docProp: "works",
        valueToPush: work,
        ...dbProps,
      });
      break;
    default:
      console.error(`Please give ${docProp} properly in the fields`);
  }
}
</script>

<template>
  <h1>Control Panel</h1>
  <div class="secret">
    <div class="form">
      <form @submit.prevent="submitForm">
        <fieldset>
          <legend>Introduction</legend>
          <label for="name"> Name </label>
          <input type="text" id="name" v-model="form.name" />
          <label for="desc">Description</label>
          <textarea type="text" id="desc" v-model="form.description"></textarea>
          <button @click="save('name')">Save Name</button>
          <button @click="save('desc')">Save Description</button>
        </fieldset>

        <fieldset>
          <legend>Social Profiles</legend>
          <label for="profile">Profile</label>
          <input id="profile" type="text" v-model="profile.platform" />
          <label for="profile-url">Profile Link</label>
          <input type="url" id="profile-url" v-model="profile.url" />
          <button @click="save('socialProfiles')">Save</button>
        </fieldset>

        <fieldset>
          <legend>Thoughts</legend>
          <label for="thought-platform">Thought Platform</label>
          <input id="thought-platform" v-model="thoughts.platform" />
          <label for="thought-id">Thought ID</label>
          <input type="number" id="thought-id" v-model="thoughts.thought_id" />
          <button @click="save('thoughts')">Save</button>
        </fieldset>

        <fieldset>
          <label for="work-title">Sentence of Work</label>
          <input type="text" id="work-title" v-model="work.title" />
          <legend>Works</legend>
          <label for="work-url">Work URL</label>
          <input type="url" id="work-url" v-model="work.work_url" />
          <button @click="save('works')">Save</button>
        </fieldset>

        <button
          @click="updateLocalStorageAndRead({ refresh: true, ...dbProps })"
        >
          Try Web Storage
        </button>
      </form>
    </div>
    <div class="playground">
      <h3>Playground</h3>
      <code>
        <pre>
{{ JSON.stringify(form, null, 2) }}
<hr />
{{ JSON.stringify(form.cacheDoc, null, 4) }}
      </pre>
      </code>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin: 0em;
}
.secret {
  display: flex;
  justify-content: space-between;
}

form {
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 45rem;
}

fieldset {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.playground {
  flex: 1;
}
button {
  background-color: #b9b4c7; /* Green */
  border: none;
  color: whitesmoke;
  padding: 0.3rem;
  text-align: center;
  font-size: 16px;
  transition-duration: 0.4s;
}

button:hover {
  background-color: #5c5470;
}
</style>
