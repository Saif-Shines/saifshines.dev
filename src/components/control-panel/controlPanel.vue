<script setup>
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";

const router = useRouter();

const authByGoogle = (response) => {
  const decodedToken = jwtDecode(response.credential);
  console.log("Decoded token", decodedToken);
  if (decodedToken.email == "saifshine7@gmail.com") {
    sessionStorage.setItem("token", JSON.stringify(decodedToken));
    sessionStorage.setItem("isAuth", true);
    router.push("/db");
  }
};
</script>

<template>
  <h1>Control Panel</h1>
  <GoogleLogin :callback="authByGoogle" />
</template>

<style></style>
