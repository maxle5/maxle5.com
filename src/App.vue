<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheSidebar from './components/TheSidebar.vue';
</script>

<template>
  <the-sidebar />
  <main class="p-8">
    <router-view />
  </main>
</template>

<style>
/* reset default browser styles */
* {
  margin: 0;
  padding: 0;
}
</style>