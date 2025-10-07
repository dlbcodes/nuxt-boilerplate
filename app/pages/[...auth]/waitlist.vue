<script setup lang="ts">
import { waitlistSchema, type waitlistSchemaType } from "~/types/auth";
import { buttonVariants } from "~/variants/ButtonVariants";

useHead({
    title: "Join the Waitlist | Graphio",
    meta: [
        {
            name: "description",
            content:
                "Be the first to try new features. Join the Graphio waitlist and get early access.",
        },
        { property: "og:title", content: "Join the Waitlist | Graphio" },
        {
            property: "og:description",
            content:
                "Be the first to try new features. Join the Graphio waitlist and get early access.",
        },
        { property: "og:url", content: "https://yourdomain.com/waitlist" },
        { property: "og:type", content: "website" },
    ],
});

definePageMeta({
    layout: "auth",
    middleware: "guest",
});

const { error, loading, joinWaitlist } = useWaitlist();
const { errors, validate, resetErrors } = useValidation(waitlistSchema);
const success = ref(false);
const form = reactive<waitlistSchemaType>({
    name: "",
    email: "",
});

const handleWaitlist = async () => {
    resetErrors();

    const isValid = validate(form);
    if (!isValid) return;
    console.log("valid");

    const res = await joinWaitlist(form);
    if (res) success.value = true;
};
</script>

<template>
    <NuxtLayout>
        <div v-if="!success" class="flex flex-col gap-y-12">
            <AuthHeader
                tagline="You're almost there"
                title="Join the waitlist"
                message="We'll notify you when it's ready."
            />

            <!-- Login Error -->
            <AuthError :error="error" />
            <!-- End Login Error -->

            <!-- form -->
            <form
                @submit.prevent="handleWaitlist"
                class="flex flex-col gap-y-4 w-full"
            >
                <!-- Name -->
                <Field
                    id="name"
                    class="flex-1"
                    label="Name"
                    placeholder="Name"
                    type="text"
                    :error="errors?.name"
                >
                    <Input v-model="form.name" />
                </Field>
                <!-- End Name -->

                <!-- Email -->
                <Field
                    id="email"
                    class="flex-1"
                    label="Email"
                    placeholder="Email"
                    :error="errors?.email"
                >
                    <Input type="text" v-model="form.email" />
                </Field>
                <!-- End Email -->

                <!-- Button Sign up -->
                <Button
                    variant="primary"
                    :loading="loading"
                    @click="handleWaitlist"
                >
                    Join waitlist
                    <AnimatedArrow />
                </Button>
                <!-- End Button Sign up -->

                <!-- Forgot password -->
                <div
                    class="text-sm/6 text-gray-600 dark:text-gray-400 mt-4 text-center"
                >
                    <p>
                        <NuxtLink
                            to="/"
                            :class="
                                cn(
                                    buttonVariants({
                                        variant: 'link',
                                        size: 'none',
                                    })
                                )
                            "
                        >
                            Go back to homepage.
                        </NuxtLink>
                    </p>
                </div>
                <!-- End Forgot password -->
            </form>
            <!-- End form -->
        </div>
        <!-- Sucess -->
        <div v-else class="text-center space-y-4">
            <AuthHeader
                title="🎉 You're on the list!"
                message="We'll reach out when everything is ready. Thanks for
                    joining!"
                to="/"
                label="Go back to homepage."
            />
        </div>
        <!-- End Sucess -->
    </NuxtLayout>
</template>
