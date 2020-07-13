<template>
  <div>
    <header
      class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2"
    >
      <div class="flex-1 flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center justify-start">
          <img
            class="rounded-full lg:w- w-10 h-10"
            src="~/assets/images/avatar.png"
            alt="Max Lefebvre"
          />
          <span class="ml-2">Max Lefebvre</span>
        </NuxtLink>
      </div>

      <label for="menu-toggle" class="pointer-cursor lg:hidden block">
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input id="menu-toggle" class="hidden" type="checkbox" />

      <div id="menu" class="hidden lg:flex lg:items-center lg:w-auto w-full">
        <nav>
          <ul
            class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
          >
            <li>
              <NuxtLink
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                to="/"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                to="/about"
                >About</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <Nuxt />
  </div>
</template>

<style>
html {
  @apply bg-gray-400;
}

.nuxt-link-exact-active {
  @apply border-indigo-300;
}

#menu-toggle:checked + #menu {
  display: block;
}
</style>
