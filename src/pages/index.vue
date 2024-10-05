<template>
  <article class="display-grid md:grid-cols-2 gap-2">
    <div class="display-flex flex-direction-column justify-content-center pb-8">
      <h1 class="color-white mb-1">Hello, I'm Max.</h1>
      <p>
        A software developer based in Halifax, Nova Scotia. I specialize in
        building enterprise web applications using modern technologies.
      </p>
      <p>
        I have over 10 years experience in the industry and have worked with
        .NET and JavaScript technologies.
      </p>
    </div>
    <aside class="display-flex justify-content-center align-items-center">
      <img src="/avatar.png" alt="Max Lefebvre" class="w-32-rem h-32-rem" />
    </aside>
  </article>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
h1 {
  font-size: 3rem;
}

p {
  font-size: 1.25rem;
  line-height: 1.65rem;
}
</style>
