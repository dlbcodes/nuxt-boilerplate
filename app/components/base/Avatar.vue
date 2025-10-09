<script setup lang="ts">
import { avatarVariants, type AvatarProps } from "~/variants/AvatarVariants";

const props = withDefaults(
    defineProps<{
        size?: AvatarProps["size"];
        src?: string | null;
        name?: string | null;
        id?: string | number | null;
        class?: string;
    }>(),
    {
        size: "base",
        name: "",
    }
);

const runtimeConfig = useRuntimeConfig();
const bucketName = runtimeConfig.public.AWS_BUCKET_NAME;
const region = runtimeConfig.public.AWS_BUCKET_REGION;

const initialLetter = computed(() => {
    return props.name !== null ? props.name.slice(0, 1) : "X";
});

const imageUrl = computed(() => {
    if (props.src && props.id) {
        return `${props.id}/avatar/${props.src}`;
    }
    return null; // No URL if src is not provided
});
</script>

<template>
    <div :class="cn(avatarVariants({ size }), props.class)">
        <!-- <img v-if="props.src" class="" :src="props.src" alt="Avatar" /> -->
        <NuxtImg
            v-if="props.src"
            provider="cloudfront"
            :src="imageUrl"
            alt="Avatar"
            class="object-cover w-full h-full"
        />
        <div
            v-else
            class="flex justify-center items-center aspect-square h-full w-full"
        >
            {{ initialLetter }}
        </div>
    </div>
</template>
