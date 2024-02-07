<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <the-header />
  <main class="p-8 mx-auto max-w-screen-xl h-100 text-slate-300">
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
