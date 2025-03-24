<template>
  <header>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>

  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>