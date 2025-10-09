<script setup lang="ts">
import { ArrowDownLeftIcon } from "@heroicons/vue/24/outline";
import { buttonVariants } from "~/variants/ButtonVariants";

const isSidebarCollapsed = ref(false);

// Shortcut to toggle sidebar
useAppShortcut("Cmd+Shift+C", () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
});
</script>

<template>
    <div
        class="relative flex h-screen bg-stone-100 bg-[repeating-linear-gradient(135deg,theme(colors.stone.100)_0px,theme(colors.stone.100)_1px,transparent_1px,transparent_20px)] dark:bg-dark-950 dark:bg-[repeating-linear-gradient(135deg,#202020_0px,#202020_1px,transparent_1px,transparent_20px)]"
    >
        <!-- Sidebar -->
        <div
            class="flex flex-col border-r border-stone-200 bg-stone-100 dark:bg-dark-900 dark:border-black dark:shadow-[inset_-1px_1px_2px_0px_rgba(71,71,71,0.56)] transition-all duration-300 ease-in-out"
            :class="isSidebarCollapsed ? 'w-0 overflow-hidden' : 'w-[220px]'"
        >
            <!-- Sidebar Header -->
            <div class="h-12 shrink-0">
                <div
                    class="flex items-center justify-between h-full min-w-0 px-4"
                >
                    <Logo to="/admin" />
                </div>
            </div>

            <!-- Sidebar Content -->
            <div class="flex-1 overflow-y-auto">
                <slot name="leftPane"></slot>
            </div>
        </div>

        <!-- Toggle Button - Outside sidebar so it stays visible -->
        <button
            @click="isSidebarCollapsed = !isSidebarCollapsed"
            :class="
                cn(
                    buttonVariants({ variant: 'icon', size: 'icon' }),
                    'flex justify-center items-center absolute top-2 z-30 p-1 transition-all duration-300 ease-in-out'
                )
            "
            :style="{ left: isSidebarCollapsed ? '10px' : '230px' }"
        >
            <ArrowDownLeftIcon
                class="size-4 text-stone-950 dark:text-dark-300"
                :class="{ 'rotate-180': isSidebarCollapsed }"
            />
        </button>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col min-w-0">
            <!-- Header -->
            <div class="flex-shrink-0">
                <HeaderNavigation />
            </div>

            <!-- Scrollable Content -->
            <div
                class="flex-1 overflow-y-auto border-t border-stone-200 bg-stone-50 bg-[repeating-linear-gradient(135deg,theme(colors.stone.100)_0px,theme(colors.stone.100)_1px,transparent_1px,transparent_20px)] dark:bg-dark-950 dark:bg-[repeating-linear-gradient(135deg,#202020_0px,#202020_1px,transparent_1px,transparent_20px)]"
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>
