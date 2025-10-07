<script setup lang="ts">
definePageMeta({ layout: "admin" });

const { register, error, loading, signOut } = useAuth();
</script>

<template>
    <NuxtLayout>
        <template #leftPane>
            <ul>
                <li>Orders</li>
                <li>Users</li>
                <li>Schedulers</li>
            </ul>
            <Button @click="signOut">Signout</Button>
            <AvatarDropdown />
        </template>

        <div class="h-full overflow-hidden">
            <NuxtPage />
        </div>
    </NuxtLayout>
</template>
