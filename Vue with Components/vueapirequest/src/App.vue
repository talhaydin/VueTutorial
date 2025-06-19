<template>
  hello world

  <div>
    <h1>User List</h1>
    <div v-if="userData.loading">Loading...</div>
    <div v-else-if="userData.error">Error: {{ userData.error.message }}</div>
    <ul v-else>
      <li v-for="user in userData.users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>

  <table class="table table-striped table-light table-bordered">
    <thead>
      <tr>
        <th>Destination ID</th>
        <th>Destination Name</th>
        <th>Destination Description</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="table-light"
        v-for="destination in destinationObj"
        :key="destination.id"
      >
        <td>{{ destination.id }}</td>
        <td>{{ destination.name }}</td>
        <td>{{ destination.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

const destinationObj = ref({});

onMounted(() => {
  loadDestinations();
});

const loadDestinations = () => {
  axios
    .get("http://localhost:3000/destination")
    .then((response) => {
      destinationObj.value = response.data;
      console.log(destinationObj.value);
    })
    .catch((error) => {
      console.error("Error loading destinations:", error);
    });
};

onMounted(async () => {
  try {
    userData.loading = true;
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => (userData.users = res.data));
  } catch (error) {
    userData.error = error;
  } finally {
    userData.loading = false;
  }
});

const userData = reactive({
  users: [],
  loading: true,
  error: null,
});
</script>
