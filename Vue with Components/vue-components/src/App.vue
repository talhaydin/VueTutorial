<template>
  <div>{{ message }}</div>

  <span> global imported components:</span>
  <contact-us />
  <button-counter />
  <br />
  <br />

  <span> local imported components:</span>
  <ContactUs />
  <ButtonCounter />
</template>

<script setup>
import { ref, onMounted } from "vue";

const message = ref("Hello Vue!");

onMounted(() => {
  console.log(message.value);
});
</script>
<script>
import ContactUs from "./components/ContactUs.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
</script>

<style>
div {
  color: blue;
  font-weight: bold;
}
span {
  color: green;
  font-weight: bold;
}
</style>
