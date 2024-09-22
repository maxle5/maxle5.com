<script setup lang="ts">
import ArticleAbout from './components/ArticleAbout.vue';
import ArticleContact from './components/ArticleContact.vue';
import ArticleProjects from './components/ArticleProjects.vue';
import ArticleWork from './components/ArticleWork.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="p-4">
    <ArticleAbout id="about" />
    <ArticleWork id="work" />
    <ArticleProjects id="projects" />
    <ArticleContact id="contact" />
  </main>
</template>

<style scoped>
article {
  min-height: 100%;
}
</style>
