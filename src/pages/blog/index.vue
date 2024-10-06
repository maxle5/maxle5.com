<template>
  <article>
    <h1 class="color-primary">Blog</h1>
    <p>My thoughts on software development and a look at my personal life.</p>
    <ul>
      <li v-for="post in blogPosts">
        <router-link :to="post">{{ post.path }}</router-link>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { RouteRecordRaw, useRoute } from "vue-router";
import { routes } from "vue-router/auto-routes";

const $route = useRoute();
const nestedRoutes = (routes.find((r) => r.path === $route.path)?.children ??
  []) as RouteRecordRaw[];
const blogPosts = nestedRoutes.filter((c) => c.path !== "") ?? [];
</script>
