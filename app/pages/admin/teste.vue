<script setup lang="ts">
definePageMeta({ layout: "base" });

const user = ref({
    name: "Daniel",
    email: "daniellobosilv@gmail.com",
    id: "faa6a281-73c0-4bcd-bfe1-a1e13886e25a",
});
const message = ref(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti illo doloremque molestiae quisquam. At voluptatem corrupti nostrum, eos alias, doloremque error tempore asperiores minus, magnam sint non nam obcaecati libero?"
);
</script>

<template>
    <NuxtLayout>
        <div
            style="
                font-family: Arial, sans-serif;
                padding: 24px;
                background: #f9fafb;
                color: #111;
            "
        >
            <div
                style="
                    max-width: 600px;
                    margin: auto;
                    background: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
                "
            >
                <div
                    style="
                        padding: 24px;
                        text-align: center;
                        border-bottom: 1px solid #eee;
                    "
                >
                    <img
                        src="https://d2czu5iz2w7c42.cloudfront.net/Graphiqo.png"
                        alt="Graphiqo Logo"
                        style="height: 28px; display: block; margin: 0 auto"
                    />
                </div>

                <div style="padding: 24px">
                    <h2
                        style="
                            margin: 0 0 16px;
                            font-weight: 600;
                            font-size: 24px;
                        "
                    >
                        New feedback:
                    </h2>
                    <div style="margin: 0 0 40px">
                        <p
                            style="
                                margin: 0 0 12px;
                                font-size: 14px;
                                font-weight: 600;
                            "
                        >
                            Message:
                        </p>
                        <p
                            style="
                                padding: 10px;
                                border-radius: 10px;
                                background-color: #f5f5f4;
                            "
                        >
                            {{ message }}
                        </p>
                    </div>
                    <div style="margin: 0 0 40px">
                        <p
                            style="
                                margin: 0 0 12px;
                                font-size: 14px;
                                font-weight: 600;
                            "
                        >
                            From:
                        </p>
                        <ul>
                            <li>
                                Name: <strong>{{ user.name }}</strong>
                            </li>
                            <li>
                                Email: <strong>{{ user.email }}</strong>
                            </li>
                            <li>
                                id: <strong>{{ user.id }}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
