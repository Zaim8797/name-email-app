<script setup>
const { data: users } = await useFetch('http://localhost:3000/users');
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center py-10">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Users List</h1>
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
          class="bg-gray-50 p-3 rounded-lg mb-2 shadow-sm flex justify-between items-center hover:bg-gray-100 transition"
        >
          <span class="text-gray-700 font-medium">{{ user.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
/* Tambahan kalau nak customize lebih */
</style>
