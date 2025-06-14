<template>
  <div>Home Page</div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToContact() {
  router.push({ name: "contact" });
}
</script>
