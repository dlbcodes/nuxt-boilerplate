<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
    modelValue: boolean; // v-model binding for open/close state
    title?: string; // Modal title
    description?: string; // Modal description
    size?: "sm" | "md" | "lg" | "xl"; // Size of the modal
    closeOnBackdrop?: boolean; // Close when clicking the backdrop
    teleportTo?: string; // Teleport target selector
}>();

const emit = defineEmits(["update:modelValue", "close"]);

// Internal computed state for two-way binding
const isOpen = computed({
    get: () => props.modelValue,
    set: (val: boolean) => emit("update:modelValue", val),
});

// Close modal function
const closeModal = () => {
    isOpen.value = false;
    emit("close");
};

// Prevent scrolling when modal is open
watch(isOpen, (newVal) => {
    if (newVal) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
});
</script>

<template>
    <teleport :to="teleportTo || 'body'">
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog
                as="div"
                class="relative z-50"
                @close="closeOnBackdrop ? closeModal() : null"
                @keydown.escape="closeModal"
            >
                <!-- Backdrop -->
                <div class="fixed inset-0 bg-black/60" />
                <!-- Modal Wrapper -->

                <div
                    class="fixed bottom-0 right-0 left-0 md:inset-0 flex items-center justify-center md:p-4"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-200 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-0 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            :class="{
                                'w-full md:w-1/4 rounded-t-3xl md:rounded-3xl':
                                    size === 'sm',
                                'w-full md:w-1/3 rounded-t-3xl md:rounded-3xl':
                                    size === 'md',
                                'w-full md:w-1/2 rounded-t-3xl md:rounded-3xl':
                                    size === 'lg',
                                'w-full md:w-3/4 rounded-t-4xl md:rounded-4xl':
                                    size === 'xl',
                            }"
                        >
                            <Panel class="pt-6">
                                <template #header>
                                    <div class="flex justify-end p-2">
                                        <div
                                            class="flex flex-col items-center space-y-1 z-10"
                                        >
                                            <button
                                                @click="closeModal"
                                                class="cursor-pointer text-stone-600 dark:text-dark-300 dark:hover:text-dark-200"
                                            >
                                                <XMarkIcon class="size-5" />
                                            </button>
                                        </div>
                                    </div>
                                </template>
                                <div class="flex flex-col justify-between">
                                    <!-- <div
                                    class="absolute top-3 right-3 flex flex-col items-center space-y-1 z-10"
                                >
                                    <button
                                        @click="closeModal"
                                        class="p-2 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800"
                                    >
                                        <XMarkIcon class="h-5 w-5" />
                                    </button>
                                    <Kbd>Esc</Kbd>
                                </div> -->
                                    <!-- Body -->
                                    <div
                                        class="pb-4 overflow-y-auto max-h-[60vh] text-base text-stone-700 px-10 dark:text-stone-400"
                                    >
                                        <slot></slot>
                                    </div>
                                    <!-- Footer -->
                                    <div
                                        v-if="$slots.footer"
                                        class="flex w-full justify-end gap-2 py-4 px-10"
                                    >
                                        <slot name="footer"></slot>
                                    </div>
                                </div>
                            </Panel>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>
    </teleport>
</template>
