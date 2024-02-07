<template>
  <header class="flex justify-between items-stretch h-16 text-slate-200">
    <div class="bg-sky-600 w-16"></div>
    <div class="flex">
      <router-link to="/" class="block mr-4 flex justify-center items-center hover:text-sky-500">
        <span class="text-sky-500 mr-2">01.</span>About
      </router-link>
      <router-link
        to="/projects"
        class="block mr-4 flex justify-center items-center hover:text-sky-500"
      >
        <span class="text-sky-500 mr-2">02.</span>Projects
      </router-link>
      <router-link
        to="/contact"
        class="block mr-4 flex justify-center items-center hover:text-sky-500"
      >
        <span class="text-sky-500 mr-2">03.</span>Contact
      </router-link>
      <a
        href="https://github.com/maxle5"
        class="block mr-4 flex justify-center items-center hover:text-sky-500"
      >
        <span class="text-sky-500 mr-2">04.</span>Resume
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import GithubIcon from 'vue-material-design-icons/Github.vue'
</script>
