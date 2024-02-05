<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import TheButton from '@/components/TheButton.vue';

const store = useCounterStore();
const { count } = storeToRefs(store)

</script>

<template>
    <h1 class="text-4xl font-bold underline">
      Home {{ count }}
    </h1>
    <the-button @click="store.increment">More</the-button>
</template>
