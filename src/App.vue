<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="p-4">
    <router-view />
  </main>
</template>

<style scoped>
article {
  min-height: 100%;
}
</style>
