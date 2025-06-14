<template>
  <div class="container">
    <div v-if="route.params.id">
      <h1>Product Detail</h1>
      <p>Product ID: {{ route.params.id }}</p>
    </div>
    <div v-else>
      <h1>No Product Found</h1>
      <p>No Product Id found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params);
</script>
