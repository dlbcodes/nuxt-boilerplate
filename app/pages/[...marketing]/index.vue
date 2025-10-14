<script setup lang="ts">
usePageMeta();

definePageMeta({
    layout: "marketing",
    middleware: "guest",
});
</script>

<template>
    <NuxtLayout>
        <Hero />
    </NuxtLayout>
</template>
