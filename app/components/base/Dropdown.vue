<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Float } from "@headlessui-float/vue";
import { navigationVariants } from "~/variants/NavigationVariants";
import { popoverVariants } from "~/variants/InputVariants";

const props = defineProps({
    options: {
        type: Array as () => { label: string; action: () => void }[],
        required: true,
    },
    buttonLabel: {
        type: String,
        default: "Options",
    },
    class: {
        type: [String, Array] as PropType<string | string[]>,
        default: "",
    },
});

const handleOptionClick = (action: () => void, close: Function) => {
    action();
    close();
};
</script>

<template>
    <Menu as="div" :class="cn('relative inline-block text-left', props.class)">
        <Float
            placement="bottom-end"
            :offset="8"
            flip
            shift
            :z-index="99999"
            portal
        >
            <!-- Button (Reference Element) -->
            <MenuButton v-slot="{ open }">
                <div
                    :class="[
                        open
                            ? '[&>*:first-child]:bg-gray-950/5 [&>*:first-child]:dark:bg-white/10'
                            : '',
                    ]"
                >
                    <slot></slot>
                </div>
            </MenuButton>

            <!-- Dropdown (Floating Element) -->
            <Transition
                enter="transition ease-out duration-200"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
            >
                <MenuItems
                    :class="
                        cn(
                            popoverVariants({
                                popoverVariant: 'contrast',
                            })
                        )
                    "
                >
                    <div class="py-1">
                        <MenuItem
                            v-for="(option, index) in options"
                            :key="index"
                            class="w-full"
                            v-slot="{ active, close }"
                        >
                            <button
                                @click.prevent="
                                    handleOptionClick(option.action, close)
                                "
                                :class="
                                    cn(
                                        navigationVariants({
                                            variant: 'contrast',
                                        })
                                    )
                                "
                            >
                                {{ option.label }}
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Transition>
        </Float>
    </Menu>
</template>
