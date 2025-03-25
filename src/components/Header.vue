<template>
  <header class="display-flex justify-content-between align-items-center p-1">
    <h1 class="mt-0">
      <router-link to="/"> Max Lefebvre </router-link>
    </h1>

    <div class="links display-none md:display-flex gap-1_5-rem">
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
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MdiAccountOutline from '@maxle5/mdi-vue3/MdiAccountOutline.vue';
import MdiCubeOutline from '@maxle5/mdi-vue3/MdiCubeOutline.vue';
import MdiNewspaperVariantOutline from '@maxle5/mdi-vue3/MdiNewspaperVariantOutline.vue';
import MdiEmailOutline from '@maxle5/mdi-vue3/MdiEmailOutline.vue';

</script>

<style lang="scss" scoped>
header {
  box-sizing: content-box;
  background-color: var(--color-background-600);

  a {
    text-decoration: none;
    color: var(--color-primary);
  }

  .links {
    a {
      color: var(--color-background-300);

      &:hover {
        color: var(--color-secondary);
      }

      &.router-link-active {
        color: var(--color-secondary);
      }
    }
  }
}
</style>
