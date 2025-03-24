<template>
  <header class="display-flex justify-content-between align-items-center p-1">
    <h1 class="mt-0">Max Lefebvre</h1>
    <div class="display-flex gap-1_5-rem">
      <router-link class="display-flex align-items-center" to="/">
        <mdi-account-outline :size="32" class="mr-0_5" />
        <span>About</span>
      </router-link>
      <router-link class="display-flex align-items-center" to="/projects">
        <mdi-cube-outline :size="32" class="mr-0_5" />
        <span>Projects</span>
      </router-link>
      <router-link class="display-flex align-items-center" to="/blog">
        <mdi-newspaper-variant-outline :size="32" class="mr-0_5" />
        <span>Blog</span>
      </router-link>
      <router-link class="display-flex align-items-center" to="/contact">
        <mdi-email-outline :size="32" class="mr-0_5" />
        <span>Contact</span>
      </router-link>
    </div>
  </header>

  <main class="px-1">
    <RouterView />
  </main>

  <footer>

  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { MdiAccountOutline, MdiCubeOutline, MdiNewspaperVariantOutline, MdiEmailOutline } from '@maxle5/mdi-vue3';
</script>

<style lang="scss" scoped>
header {
  box-sizing: content-box;
  background-color: var(--colour-background-600);

  h1 {
    color: var(--colour-primary)
  }

  a {
    color: var(--colour-background-300);
    text-decoration: none;

    &:hover {
      color: var(--colour-secondary)
    }

    &.router-link-active {
      color: var(--colour-secondary)
    }
  }

}
</style>
