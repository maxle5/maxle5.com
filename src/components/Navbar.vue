<template>
  <nav
    class="display-flex justify-content-between position-fixed px-3 w-100 text-decoration-none"
  >
    <router-link to="/" id="home" class="py-1 color-white">
      Max Lefebvre
    </router-link>
    <ul class="display-flex p-0 py-0_5 m-0 color-light-500">
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
#home {
  font-size: 2.5rem;
  font-family: "Teko", sans-serif;
}
nav {
  box-sizing: border-box;
}

a {
  color: var(--color-light500);
  text-decoration: none;
}

ul {
  list-style-type: none;
}
</style>
