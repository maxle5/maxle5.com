<template>
  <Header />

  <main class="px-1">
    <RouterView />
  </main>

  <footer></footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<style lang="scss" scoped>
header {
  box-sizing: content-box;
  background-color: var(--colour-background-600);

  h1 {
    color: var(--colour-primary);
  }

  a {
    color: var(--colour-background-300);
    text-decoration: none;

    &:hover {
      color: var(--colour-secondary);
    }

    &.router-link-active {
      color: var(--colour-secondary);
    }
  }
}
</style>
