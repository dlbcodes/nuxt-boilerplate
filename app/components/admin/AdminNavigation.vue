<script setup lang="ts">
import {
    UserCircleIcon,
    LockClosedIcon,
    BellIcon,
    TrashIcon,
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

const handleHelpSubmitted = (data: any) => {
    console.log("Suggestion submitted:", data);
    // Show success toast
    alert("Thank you for your suggestion!");
};
</script>

<template>
    <Aside label="Account settings" :items="navigationItems">
        <template #bottom>
            <button @click="showHelpkModal = true">Feedback</button>
            <!-- <AvatarDropdown /> -->
        </template>
    </Aside>

    <HelpModal v-model="showHelpkModal" @submitted="handleHelpSubmitted" />
</template>
