<template>
  <nav
    class="display-flex justify-content-between position-fixed px-3 w-100 text-decoration-none position-relative"
  >
    <router-link
      to="/"
      id="home"
      class="py-1 color-primary hover:color-primary-300"
    >
      Max Lefebvre
    </router-link>

    <button
      class="sm:display-none border-none bg-none"
      @click="menuOpen = !menuOpen"
    >
      <mdi-menu
        :size="32"
        class="color-light-500 hover:color-light"
        v-if="!menuOpen"
      />
      <mdi-close :size="32" class="color-light-500 hover:color-light" v-else />
    </button>

    <ul
      class="display-none sm:display-flex p-0 py-0_5 m-0 color-light-500"
      :class="{
        'display-flex flex-direction-column position-absolute mt-5 border-light border-bottom-1 border-top-1 border-solid left-0 top-0 right-0 bg-dark':
          menuOpen,
      }"
    >
      <li class="p-1">
        <router-link
          to="/work"
          active-class="color-white"
          class="color-light-500 hover:color-light display-flex align-items-center"
        >
          <mdi-briefcase-outline class="mr-0_5" />
          Work
        </router-link>
      </li>
      <li class="p-1">
        <router-link
          to="/projects"
          active-class="color-white"
          class="color-light-500 hover:color-light display-flex align-items-center"
        >
          <mdi-account-hard-hat-outline class="mr-0_5" />
          Projects
        </router-link>
      </li>
      <li class="p-1">
        <router-link
          to="/blog"
          active-class="color-white"
          class="color-light-500 hover:color-light display-flex align-items-center"
        >
          <mdi-notebook-outline class="mr-0_5" />
          Blog
        </router-link>
      </li>
      <li class="p-1">
        <router-link
          to="/contact"
          active-class="color-white"
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
import { ref } from "vue";
import { useRouter } from "vue-router";

import {
  MdiBriefcaseOutline,
  MdiAccountHardHatOutline,
  MdiNotebookOutline,
  MdiEmailOutline,
  MdiMenu,
  MdiClose,
} from "@maxle5/mdi-vue3";

// menu stuff
const menuOpen = ref(false);
const router = useRouter();
router.beforeEach((_to, _from, next) => {
  // close the menu when navigating to a new route
  menuOpen.value = false;
  next();
});
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
