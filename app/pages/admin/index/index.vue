<script setup lang="ts">
const showModal = ref(false);
const showFeedbackModal = ref(false);

const handleFeedbackSubmitted = (data: any) => {
    console.log("Suggestion submitted:", data);
    // Show success toast
    alert("Thank you for your suggestion!");
};
</script>

<template>
    <Button @click="showModal = true">Open Modal</Button>
    <Button @click="showFeedbackModal = true">Open Modal</Button>

    <Modal v-model="showModal" title="My Modal">
        <p>Modal content goes here</p>
    </Modal>
    <FeedbackModal
        v-model="showFeedbackModal"
        @submitted="handleFeedbackSubmitted"
    />
    <div>
        <p v-for="i in 100">Line number {{ i }}</p>
    </div>
</template>
