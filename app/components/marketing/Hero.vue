<script setup lang="ts"></script>

<template>
    <!-- Hero -->
    <section class="flex flex-col items-center gap-y-6 pt-10 pb-10">
        <!-- Eyebrow -->
        <div
            class="flex items-center font-mono text-sm tracking-tight bg-white border border-stone-200 px-4 py-1 rounded-full dark:bg-dark-900 dark:border-black dark:text-dark-100 dark:shadow-[inset_-1px_1px_2px_0px_rgba(71,71,71,0.56)]"
        >
            <span
                class="font-mono tracking-tight bg-linear-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-amber-500 bg-clip-text text-sm font-extrabold text-transparent"
            >
                Discover. Remix. Create.
            </span>
        </div>
        <!-- End Eyebrow -->

        <!-- Title -->
        <div class="flex flex-col justify-between items-center gap-y-4">
            <h1
                class="text-center text-5xl tracking-tighter md:text-6xl lg:text-7xl font-bold text-stone-950 dark:text-dark-100"
            >
                Kickstart your next MVP <br />
                with Nuxt + Supabase
            </h1>
            <p
                class="text-center text-balance text-stone-600 dark:text-dark-400"
            >
                A lightweight boilerplate packed with the essentials — auth,
                database, UI components, and ready-to-ship setup. Build faster,
                focus on what matters.
            </p>
        </div>
        <!-- End Title -->

        <!-- Cta buttons -->
        <div class="flex items-center justify-center gap-x-6">
            <Button to="/register" size="lg" class="whitespace-nowrap">
                See in action
                <AnimatedArrow />
            </Button>
            <Button to="/waitlist" size="lg" variant="secondary">
                View on GitHub
            </Button>
        </div>
        <!-- End Cta buttons -->
    </section>
    <!-- End Hero -->
</template>
