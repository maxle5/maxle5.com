<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <the-header></the-header>
  <main class="bg-slate-200 grow overflow-auto">
    <RouterView />
  </main>
  <the-footer></the-footer>
</template>

<style>
/* reset default browser styles */
* {
  margin: 0;
  padding: 0;
}

</style>