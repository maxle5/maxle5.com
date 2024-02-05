<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { count } = storeToRefs(store)

</script>

<template>
  <main>
    <h1>Home {{ count }}</h1>
    <button @click="store.increment">More</button>
  </main>
</template>
