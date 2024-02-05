<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import TheButton from '@/components/TheButton.vue';

const store = useCounterStore();
const { count } = storeToRefs(store)

</script>

<template>
  <h1 class="text-8xl font-bold text-slate-700">
    Max Lefebvre
  </h1>
  <h2 class="text-4xl font-bold text-cyan-700">
    Developer
  </h2>
  <p class="max-w-96">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem voluptatem saepe tenetur, repellendus dolorum quas
    esse molestias a necessitatibus aperiam eaque iure deserunt quia illum cumque quam velit voluptatum ipsa?
  </p>
</template>
