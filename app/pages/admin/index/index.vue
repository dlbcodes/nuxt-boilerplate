<script setup lang="ts">
import { buttonVariants } from "~/variants/ButtonVariants";
import {
    FolderIcon,
    FolderOpenIcon,
    EllipsisVerticalIcon,
} from "@heroicons/vue/24/outline";

const showModal = ref(false);
const showFeedbackModal = ref(false);
const showDeleteModal = ref(false);

const handleDeleteUser = () => {
    console.log("deleted");
};

const handleFeedbackSubmitted = (data: any) => {
    console.log("Suggestion submitted:", data);
    // Show success toast
    alert("Thank you for your suggestion!");
};

const getOptions = () => [
    { label: "Option 1", action: () => console.log("Option 1") },
    { label: "Option 2", action: () => console.log("Option 2") },
];
</script>

<template>
    <Button @click="showModal = true">Open Modal</Button>
    <Button @click="showFeedbackModal = true">Open Modal</Button>
    <Button @click="showDeleteModal = true">Open Modal</Button>

    <Modal v-model="showModal" title="My Modal">
        <p>Modal content goes here</p>
    </Modal>
    <FeedbackModal
        v-model="showFeedbackModal"
        @submitted="handleFeedbackSubmitted"
    />

    <DeleteModal
        v-model="showDeleteModal"
        title="Delete User"
        description="Are you sure you want to delete John Doe? This action cannot be undone."
        @confirm="handleDeleteUser"
        @cancel="showDeleteModal = false"
    />

    <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>⇧</Kbd>
        <span>+</span>
        <Kbd>⌥</Kbd>
        <span>+</span>
        <Kbd>⌃</Kbd>
    </KbdGroup>

    <Dropdown :options="getOptions()" @click.stop>
        <span :class="buttonVariants({ variant: 'icon', size: 'icon' })">
            <EllipsisVerticalIcon class="size-4 shrink-0" />
        </span>
    </Dropdown>

    <div>
        <p v-for="i in 100">Line number {{ i }}</p>
    </div>
</template>
