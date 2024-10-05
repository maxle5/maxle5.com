<template>
  <nav
    class="display-flex justify-content-between position-fixed px-3 w-100 text-decoration-none"
  >
    <router-link
      to="/"
      id="home"
      class="py-1 color-primary hover:color-primary-300"
    >
      Max Lefebvre
    </router-link>
    <ul class="display-flex p-0 py-0_5 m-0 color-light-500">
      <li class="p-1">
        <router-link
          to="/work"
          class="color-light-500 hover:color-light display-flex align-items-center"
        >
          <mdi-briefcase-outline class="mr-0_5" />
          Work
        </router-link>
      </li>
      <li class="p-1">
        <router-link
          to="/projects"
          class="color-light-500 hover:color-light display-flex align-items-center"
        >
          <mdi-account-hard-hat-outline class="mr-0_5" />
          Projects
        </router-link>
      </li>
      <li class="p-1">
        <router-link
          to="/blog"
          class="color-light-500 hover:color-light display-flex align-items-center"
        >
          <mdi-notebook-outline class="mr-0_5" />
          Blog
        </router-link>
      </li>
      <li class="p-1">
        <router-link
          to="/contact"
          class="color-light-500 hover:color-light display-flex align-items-center"
        >
          <mdi-email-outline class="mr-0_5" />
          Contact
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {
  MdiBriefcaseOutline,
  MdiAccountHardHatOutline,
  MdiNotebookOutline,
  MdiEmailOutline,
} from "@maxle5/mdi-vue3";
</script>

<style scoped>
#home {
  font-size: 2.5rem;
  font-family: "Teko", sans-serif;
}
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
