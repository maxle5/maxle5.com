<template>
  <article>
    <h1 class="color-primary">Hello, I'm Max.</h1>
    <p>
      A software developer based in Halifax, Nova Scotia. I specialize in
      building enterprise web applications using modern technologies.
    </p>

    <button
      type="button"
      to="/projects"
      class="bg-primary cursor-pointer border-none display-inline-block py-0_5 px-1 border-radius-2 color-white"
      @click="$router.push('/projects')"
    >
      Projects
    </button>
  </article>
</template>

<script setup lang="ts"></script>
