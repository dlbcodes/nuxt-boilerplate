<script setup lang="ts">
import { navigationVariants } from "~/variants/NavigationVariants";

interface NavItem {
    href: string;
    label: string;
    icon: Component;
}

const props = defineProps<{
    label?: string;
    items: NavItem[];
}>();
</script>

<template>
    <aside class="flex flex-col p-1 gap-y-8 min-h-0 h-full">
        <slot name="top"></slot>

        <nav class="flex flex-col flex-1 min-h-0 overflow-y-auto gap-y-1">
            <div
                v-if="props.label"
                class="text-xs font-medium text-stone-500 px-1 whitespace-nowrap"
            >
                {{ label }}
            </div>
            <NuxtLink
                v-for="item in props.items"
                :key="item.href"
                :to="item.href"
                :class="cn(navigationVariants({ variant: 'primary' }))"
            >
                <div class="flex items-center gap-x-2 min-w-0">
                    <!-- dynamic icon -->
                    <component :is="item.icon" class="size-5 shrink-0" />
                    <span class="truncate">{{ item.label }}</span>
                </div>
            </NuxtLink>
        </nav>
        <div class="p-2">
            <slot name="bottom"></slot>
        </div>
    </aside>
</template>
