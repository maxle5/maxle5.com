<template>
  <nav class="display-flex justify-content-between position-fixed px-3 w-100">
    <ul class="display-flex p-0 m-0">
      <li class="p-1"><a href="/">About</a></li>
      <li class="p-1"><a href="#about">Work</a></li>
      <li class="p-1"><a href="#projects">Projects</a></li>
      <li class="p-1"><a href="/blog">Blog</a></li>
      <li class="p-1"><a href="#contact">Contact</a></li>
    </ul>

    <ul class="display-flex p-0 m-0">
      <li class="p-1">
        <a href="https://github.com/maxle5"> <mdi-github /> </a>
      </li>
      <li class="p-1">
        <a href=""><mdi-linkedin /></a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { MdiGithub, MdiLinkedin } from "@maxle5/mdi-vue3";
</script>
<style scoped>
nav {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}
</style>
