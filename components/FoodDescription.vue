<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
    FoodDesc: {
        type: Object,
        required: true,
    },
    maxWidth: {
        type: String,
        required: true
    },
    brightness: {
        type: String,
        required: true
    }
});
const computedClass = computed(() => {
    return [
        props.maxWidth.lg,
        props.maxWidth.sm,
        props.maxWidth.base,
    ].join(' ');
});
</script>
<template>
    <section class="lg:py-[50px] py-[30px]  relative">
        <img :src="FoodDesc.img" alt="img"
            class="max-w-[556px] w-full absolute right-0 bottom-0 opacity-40" :class="brightness">
        <img :src="FoodDesc.img1" alt="img"
            class="lg:max-w-[276px] max-w-[150px] w-full absolute lg:left-0 sm:left-0 -left-12 lg:-bottom-12 -bottom-7">
        <div class="max-w-[77rem] mx-auto px-4">
            <div class="flex flex-col gap-[18px]">
                <div :class="computedClass" class="mx-auto w-full">
                    <img :src="FoodDesc.img2" alt="img" class="w-full">
                </div>
                <h4 class="max-w-[625px] mx-auto w-full poppins-bold text-brown lg:text-3xl text-xl text-center">{{
                    FoodDesc.title }}</h4>
                <div class="flex flex-col gap-7">
                    <p class="lg:block sm:hidden hidden helvetica text-center text-xl text-brown capitalize">{{
                        FoodDesc.description }}</p>
                    <p
                        class="lg:hidden sm:block block helvetica text-center sm:text-base text-sm text-brown capitalize ">
                        {{ FoodDesc.description1 }}
                    </p>
                    <h5 class="max-w-[650px] mx-auto w-full poppins-bold lg:text-[17px] text-sm text-center text-brown">
                        {{ FoodDesc.lastTitle }}</h5>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped></style>