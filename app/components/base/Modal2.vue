<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { watch, onUnmounted } from "vue";

interface Props {
    modelValue: boolean;
    title?: string;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    closeOnBackdrop?: boolean;
    showClose?: boolean;
    persistent?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    size: "md",
    closeOnBackdrop: true,
    showClose: true,
    persistent: false,
});

const emit = defineEmits<{
    "update:modelValue": [value: boolean];
    close: [];
}>();

// Size variants
const sizeClasses = {
    sm: "md:max-w-sm",
    md: "md:max-w-md",
    lg: "md:max-w-lg",
    xl: "md:max-w-xl",
    full: "md:max-w-full mx-4",
};

const close = () => {
    if (!props.persistent) {
        emit("update:modelValue", false);
        emit("close");
    }
};

const handleBackdropClick = () => {
    if (props.closeOnBackdrop && !props.persistent) {
        close();
    }
};

// Handle escape key - define outside watch to maintain reference
const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && !props.persistent) {
        close();
    }
};

// Lock body scroll when modal is open
watch(
    () => props.modelValue,
    (isOpen) => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEscape);
        }
    }
);

// Cleanup on unmount
onUnmounted(() => {
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleEscape);
});
</script>

<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition-opacity duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="modelValue">
                <div
                    class="fixed inset-0 bg-black/60"
                    @click.self="handleBackdropClick"
                ></div>
                <div
                    class="fixed bottom-0 right-0 left-0 md:inset-0 z-50 flex items-center justify-center md:p-4"
                >
                    <Transition
                        enter-active-class="transition-all duration-200"
                        enter-from-class="opacity-0 scale-95"
                        enter-to-class="opacity-100 scale-100"
                        leave-active-class="transition-all duration-200"
                        leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95"
                    >
                        <div
                            :class="[
                                'w-full bg-white dark:bg-gray-800 rounded-t-2xl md:rounded-2xl shadow-xl backdrop-blur-xl',
                                sizeClasses[size],
                            ]"
                            v-if="modelValue"
                            role="dialog"
                            aria-modal="true"
                            :aria-labelledby="title ? 'modal-title' : undefined"
                        >
                            <!-- Header with close button always on right -->
                            <div
                                v-if="title || showClose || $slots.header"
                                class="flex items-start justify-between px-6 py-4"
                            >
                                <!-- Title/Header content (flexible) -->
                                <div class="flex-1 pr-4">
                                    <slot name="header">
                                        <h2
                                            v-if="title"
                                            id="modal-title"
                                            class="text-lg font-semibold text-gray-900 dark:text-white"
                                        >
                                            {{ title }}
                                        </h2>
                                    </slot>
                                </div>

                                <!-- Close button always on right -->
                                <button
                                    v-if="showClose"
                                    type="button"
                                    @click="close"
                                    class="flex-shrink-0 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <XMarkIcon
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    />
                                </button>
                            </div>

                            <!-- Body -->
                            <div class="px-6 py-4">
                                <slot :close="close" />
                            </div>

                            <!-- Footer -->
                            <div
                                v-if="$slots.footer"
                                class="flex items-center justify-end gap-3 px-6 py-4"
                            >
                                <slot name="footer" :close="close" />
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
