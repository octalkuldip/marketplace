<script setup>

const props = defineProps({
    blog: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="max-w-[435px] w-full flex flex-col border-[0.47px] border-[#A4F6BB] bg-[#F9FFEF] bg-opacity-[13%] rounded-md"
        style="box-shadow: 0px 4.66px 10.48px 0px #0000000D;">
        <div class="overflow-hidden">
            <NuxtLink :to="`/blogs/${blog.id}`">
                <img :src="blog.image" alt="blog-image" class="w-full hover:scale-105 duration-200 ease-in">
            </NuxtLink>
        </div>
        <div class="pt-[16px] pb-[21px] flex flex-col gap-[11px]">
            <p class="poppins text-lg text-brown text-center">{{ blog.date }}</p>
            <div class="lg:max-w-[384px] max-w-[352px] mx-auto w-full text-center">
                <NuxtLink :to="`/blogs/${blog.id}`"
                    class="lg:text-[21px] outer-img text-brown hover:tracking-wide duration-300 leading-6 text-[19px] poppins text-center hover:underline">
                    {{ blog.title }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>