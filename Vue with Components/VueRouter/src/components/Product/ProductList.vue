<template>
  <div>
    <h1>Product List</h1>
    <p>Here are some products:</p>
    <div>
      <!-- usage one -->
      usage one with path params
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="`/productDetail/${product.id}`">{{
            product.name
          }}</router-link>
        </li>
      </ul>
      <!-- usage two -->
      usage two with named routes
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link
            :to="{ name: 'productDetail', params: { id: product.id } }"
          >
            {{ product.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
  <div>
    <button @click="$router.go(-1)">Go Back</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const products = ref([
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
]);
</script>
