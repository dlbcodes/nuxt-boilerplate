<script setup lang="ts">
interface Props {
    modelValue: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    "update:modelValue": [value: boolean];
    submitted: [data: any];
}>();

const form = ref({ message: "", rating: 5 });
const isLoading = ref(false);

const submit = async () => {
    isLoading.value = true;
    try {
        const result = await $fetch("/api/feedback", {
            method: "POST",
            body: form.value,
        });
        emit("submitted", result);
        emit("update:modelValue", false);
        form.value = { message: "", rating: 5 }; // Reset
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <Modal
        :model-value="modelValue"
        @update:model-value="emit('update:modelValue', $event)"
        title="Help modal"
    >
        <div class="space-y-4">
            <Field id="rating" label="Rating">
                <select v-model="form.rating" class="w-full">
                    <option :value="5">⭐⭐⭐⭐⭐ Excellent</option>
                    <option :value="4">⭐⭐⭐⭐ Good</option>
                    <option :value="3">⭐⭐⭐ Average</option>
                    <option :value="2">⭐⭐ Poor</option>
                    <option :value="1">⭐ Terrible</option>
                </select>
            </Field>

            <Field id="message" label="Message">
                <textarea
                    v-model="form.message"
                    rows="4"
                    placeholder="Tell us what you think..."
                    class="w-full"
                />
            </Field>
        </div>

        <template #footer="{ close }">
            <Button variant="ghost" @click="close">Cancel</Button>
            <Button :loading="isLoading" @click="submit">Send Feedback</Button>
        </template>
    </Modal>
</template>
