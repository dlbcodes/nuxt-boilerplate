<script setup lang="ts">
import { emailApiService } from "~/services/EmailApiService";

interface Props {
    modelValue: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    "update:modelValue": [value: boolean];
    submitted: [data: any];
}>();

const { addToast } = useToast();
const form = ref({ question: "", message: "" });
const isLoading = ref(false);

const submit = async () => {
    isLoading.value = true;

    try {
        const result = await emailApiService.sendHtml(
            "daniellobosilva@gmail.com",
            "[HELP] New message",
            "help",
            form.value
        );

        addToast("Help request submitted successfully!", {
            type: "success",
        });
        emit("submitted", result);
        emit("update:modelValue", false);
    } catch (error) {
        addToast("Failed to submit help request. Please try again.", {
            type: "error",
        });
        console.error("Failed to send email:", error);
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
        <div class="flex flex-col gap-y-2 text-center">
            <h3
                class="max-w-sm w-full overflow-hidden whitespace-nowrap truncate text-2xl tracking-tight text-balance font-semibold max-sm:px-4 sm:text-2xl lg:text-2xl xl:text-2xl text-stone-950 dark:text-dark-200"
            >
                Need a hand?
            </h3>
            <p class="text-sm text-stone-500">
                Ask us anything — we’ll do our best to point you in the right
                direction.
            </p>
        </div>
        <div class="space-y-4">
            <Field id="question" label="Question">
                <Input
                    type="text"
                    v-model="form.question"
                    placeholder="What’s your question?"
                />
            </Field>

            <Field id="message" label="Message">
                <Textarea
                    v-model="form.message"
                    placeholder="Tell us a bit more about what you need help with..."
                    class="h-32 px-1"
                />
            </Field>
        </div>

        <template #footer="{ close }">
            <Button variant="ghost" @click="close">Cancel</Button>
            <Button :loading="isLoading" @click="submit" class="w-fit">
                Ask for help
            </Button>
        </template>
    </Modal>
</template>
