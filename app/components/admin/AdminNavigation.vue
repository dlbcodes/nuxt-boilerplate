<script setup lang="ts">
import {
    UserCircleIcon,
    LockClosedIcon,
    BellIcon,
    TrashIcon,
    LifebuoyIcon,
} from "@heroicons/vue/24/outline";

const showHelpkModal = ref(false);

const navigationItems = [
    {
        href: "/admin/account",
        label: "Orders",
        icon: UserCircleIcon,
    },
    {
        href: "/admin/account/password",
        label: "Users",
        icon: LockClosedIcon,
    },
    {
        href: "/admin/account/delete",
        label: "Schedulers",
        icon: TrashIcon,
    },
];

const handleHelpSubmitted = (data: any) => {};
</script>

<template>
    <Aside label="Account settings" :items="navigationItems">
        <template #bottom>
            <Button @click="showHelpkModal = true" variant="icon" size="icon">
                <LifebuoyIcon class="w-5" />
            </Button>
            <Popover>
                <template #button>Teste</template>

                <div>
                    <ul>
                        <li>Line 1</li>
                        <li>Line 1</li>
                        <li>Line 1</li>
                        <li>Line 1</li>
                        <li>Line 1</li>
                        <li>Line 1</li>
                        <li>Line 1</li>
                        <li>Line 1</li>
                    </ul>
                </div>
            </Popover>
        </template>
    </Aside>

    <HelpModal v-model="showHelpkModal" @submitted="handleHelpSubmitted" />
</template>
