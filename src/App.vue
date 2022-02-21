
<template>
  <header class="fixed top-0 left-0 right-0 flex container mx-auto">    
    <ul class="flex my-6 text-slate-400 w-full items-center">
      <li class="px-4 font-bold hover:text-slate-50">
        <router-link to="/" class="flex">
          <img src="./assets/avatar.png" width="48" />
        </router-link>
      </li>
      <li class="px-4 font-bold ml-auto hover:text-slate-50">
        <router-link to="/">About</router-link>
      </li>
      <li class="px-4 font-bold hover:text-slate-50">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="px-2 font-bold hover:text-slate-50">
        <router-link to="/blog">Blog</router-link>
      </li>
      <li class="px-4 font-bold hover:text-slate-50">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </header>

  <main class="container mx-auto text-white">
    <section id="about" class="h-screen flex items-center">
      <router-view></router-view>
    </section>
  </main>

  <footer>
    
  </footer>
</template>

<script setup lang="ts">
</script>

<style>
@import "./assets/base.css";

body{
  background-color: #1C1D25;
}
</style>
