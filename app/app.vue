<template>
    <div>
        <NuxtPage />
        <ClientOnly>
            <ToastProvider />
            <CookieConsent />
        </ClientOnly>
    </div>
</template>
