<template>
    <header class="bg-slate-800">
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>