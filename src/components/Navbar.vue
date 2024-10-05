<template>
  <nav
    class="display-flex justify-content-between position-fixed px-3 w-100 text-decoration-none"
  >
    <router-link to="/" class="py-1 color-white"> Max Lefebvre </router-link>
    <ul class="display-flex p-0 m-0 color-light-500">
      <li class="p-1">
        <router-link to="/work">Work</router-link>
      </li>
      <li class="p-1">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="p-1">
        <router-link to="/blog">Blog</router-link>
      </li>
      <li class="p-1">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>
<style scoped>
nav {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}
</style>
