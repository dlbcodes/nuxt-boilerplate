<script setup lang="ts"></script>

<template>
    <header class="flex items-center justify-between">
        <Logo class="h-8 w-auto" />

        <!-- Navigation -->
        <nav>
            <ul class="flex gap-x-6">
                <li>
                    <NuxtLink to="/"> Home </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/pricing"> Pricing </NuxtLink>
                </li>
            </ul>
        </nav>

        <!-- Auth buttons -->
        <div class="flex gap-x-4">
            <Button to="/login" variant="secondary">Login</Button>
            <Button to="/register" class="whitespace-nowrap">
                Create Account
            </Button>
        </div>
    </header>
</template>
