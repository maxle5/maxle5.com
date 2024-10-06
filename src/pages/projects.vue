<template>
  <article class="display-grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <div>
      <h1>My Projects</h1>
      <p>
        Here, you'll find a selection of personal projects that I've developed
        and published over the years. Each project showcases my ability to take
        an idea from conception to delivery, demonstrating my knowledge of
        modern development practices and commitment to quality.
      </p>
      <p>
        I take pride in not only building functional and user-friendly
        applications but also in ensuring they meet the highest standards
        throughout the development process.
      </p>
    </div>
    <div class="display-grid gap-1 grid-cols-1 md:grid-cols-2 md:col-span-2">
      <div
        v-for="project in projects"
        :key="project.repoUrl"
        class="border-solid border-1 border-light border-radius-1 p-1 display-flex flex-direction-column"
      >
        <h2 class="color-secondary-500 mt-0 text-center">
          {{ project.title }}
        </h2>
        <p class="flex-grow-1">{{ project.description }}</p>
        <div class="display-flex justify-content-end">
          <a :href="project.repoUrl" class="display-flex align-items-center">
            <MdiGithub :size="24" class="mr-0_5" />
            GitHub
          </a>
          <!-- <a :href="project.packageUrl" class="color-primary">NPM</a> -->
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { MdiGithub } from "@maxle5/mdi-vue3";

const projects = [
  {
    title: "@maxle5/mdi-vue3",
    description:
      "A Vue 3 component library for Material Design Icons, automatically maintained with GitHub Actions and published to npm whenever changes to @mdi/js are detected. The package offers full TypeScript support and is tree-shakable for optimized performance.",
    repoUrl: "https://github.com/maxle5/mdi-vue3",
    packageUrl: "https://www.npmjs.com/package/@maxle5/mdi-vue3",
  },
  {
    title: "FinderGenerator",
    description:
      "A .NET source code generator that locates all instances of a nested type without using reflection, resulting in significantly improved performance.",
    repoUrl: "https://github.com/maxle5/finder-generator",
    packageUrl: "https://nuget.org/packages/FinderGenerator",
  },
  {
    title: "ProseMirror",
    description:
      "A WYSIWYG conversion library for .NET, enabling seamless conversion between HTML and ProseMirror JSON.",
    repoUrl: "https://github.com/maxle5/prosemirror",
    packageUrl: "https://nuget.org/packages/ProseMirror",
  },
  {
    title: "@maxle5/css-kit",
    description:
      "A collection of CSS utilities, similar to Tailwind CSS but opinionated to greatly simplify my development process.",
    repoUrl: "https://github.com/maxle5/css-kit",
    packageUrl: "https://www.npmjs.com/package/@maxle5/css-kit",
  },
];
</script>
