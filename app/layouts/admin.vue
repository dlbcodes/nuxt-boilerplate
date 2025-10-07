<script setup lang="ts">
// import { ArrowDownLeftIcon } from "@heroicons/vue/24/outline";
import { buttonVariants } from "~/variants/ButtonVariants";

// useAppShortcut("Cmd+Shift+C", () => {
//     isSidebarCollapsed.value = !isSidebarCollapsed.value;
// });

const isSidebarCollapsed = ref(false); // Sidebar state

// Dynamic grid layout
const gridClasses = computed(() =>
    isSidebarCollapsed.value
        ? "[grid-template-columns:0px_minmax(0,1fr)]"
        : "[grid-template-columns:220px_minmax(0,1fr)]"
);
</script>

<template>
    <div
        class="grid h-screen overflow-hidden transition-all duration-300 ease-in-out bg-stone-50 bg-[repeating-linear-gradient(135deg,theme(colors.stone.100)_0px,theme(colors.stone.100)_1px,transparent_1px,transparent_20px)] dark:bg-dark-950 dark:bg-[repeating-linear-gradient(135deg,#202020_0px,#202020_1px,transparent_1px,transparent_20px)]"
        :class="gridClasses"
    >
        <div
            class="relative h-full bg-stone-100 border-r border-stone-200 dark:bg-dark-900 dark:border-black dark:shadow-[inset_-1px_1px_2px_0px_rgba(71,71,71,0.56)] overflow-visible"
        >
            <!-- Header -->
            <div class="relative h-14">
                <div
                    class="flex items-center justify-between h-full min-w-0 px-4"
                >
                    <Logo to="/admin" />
                </div>

                <button
                    @click="isSidebarCollapsed = !isSidebarCollapsed"
                    :class="
                        cn(
                            buttonVariants({ variant: 'icon', size: 'icon' }),
                            'absolute top-4 -right-8 z-30 p-1 transition-transform duration-300 ease-in-out'
                        )
                    "
                >
                    Close
                    <!-- <ArrowDownLeftIcon
                        class="size-4 text-stone-950 dark:text-dark-300"
                        :class="{ 'rotate-180': isSidebarCollapsed }"
                    /> -->
                </button>
            </div>

            <!-- Sidebar Content - with custom scrollable area -->
            <div class="h-[calc(100vh-3.5rem)] relative">
                <!-- Scrollable wrapper -->
                <div
                    class="absolute inset-0 overflow-y-auto overflow-x-visible min-w-0"
                >
                    <slot name="leftPane"></slot>
                </div>
            </div>
        </div>

        <div class="z-20">
            <slot></slot>
        </div>
    </div>
</template>
