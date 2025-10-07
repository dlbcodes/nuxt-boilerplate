<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        to?: string;
        class?: string;
    }>(),
    {
        to: "/",
    }
);
</script>

<template>
    <NuxtLink
        :to="to"
        :class="
            cn(
                'flex items-center gap-x-1 h-7 w-28 text-black dark:text-white',
                props.class
            )
        "
    >
        <h2 class="font-bold texl-2xl font-mono">Scheduler</h2>
    </NuxtLink>
</template>
