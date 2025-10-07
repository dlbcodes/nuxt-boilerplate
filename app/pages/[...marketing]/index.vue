<script setup lang="ts">
usePageMeta();

definePageMeta({
    layout: "marketing",
    middleware: "guest",
});
</script>

<template>
    <NuxtLayout>
        <section
            class="flex flex-col gap-y-2 justify-center text-center max-w-4xl mx-auto"
        >
            <h1 class="text-6xl font-bold font-mono tracking-tight">
                This is the homepage
            </h1>
            <p class="font-mono text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus facere excepturi commodi ab nostrum dolore porro,
                quam vel tenetur, ea cum magni velit illo incidunt sed eveniet.
                Ut, iure ullam!
            </p>
        </section>
    </NuxtLayout>
</template>
