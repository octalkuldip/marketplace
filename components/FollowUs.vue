<script setup>
import { ref } from 'vue';
const follows = ref([
    { img: 'images/followUs01.png', numberFirst: '10.2', numberSecound: '98' },
    { img: 'images/followUs02.png', numberFirst: '10.2', numberSecound: '98' },
    { img: 'images/followUs03.png', numberFirst: '10.2', numberSecound: '98' },
    { img: 'images/natural-fruit.png', numberFirst: '10.2', numberSecound: '98' }
]);
</script>

<template>
    <section>
        <div class="max-w-[1606px] w-full mx-auto pt-10">
            <div class="flex flex-col gap-10">
                <h1 class="font-bold lg:text-5xl poppins-extraBold text-xl text-brown text-center">
                    Follow Us on Instagram for Updates
                </h1>
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-3 grid-cols-1 px-[17px]">
                        <div v-for="(follow, index) in follows" :key="index"
                            class="relative flex justify-center items-center group">
                            <img :src="follow.img" alt="Description"
                                class="transition-opacity duration-700 group-hover:opacity-50 max-w-[348px] w-full h-full object-cover bg-center" />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex justify-center items-center opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
                                <div class="text-center text-white flex flex-col gap-8">
                                    <div class="text-2xl flex items-center justify-between">
                                        <div class="flex">
                                            <div>
                                                <img src="../public/SVG/heart-follow.svg" alt=""
                                                    class="max-w-[27px] w-full">
                                            </div>
                                            <span class="font-light"> {{ follow.numberFirst }} K</span>
                                        </div>
                                        <span class="font-light"> {{ follow.numberFirst }} K</span>
                                    </div>
                                    <div class="flex">
                                        <div>
                                            <img src="../public/SVG/message-follow.svg" alt=""
                                                class="max-w-[27px] w-full">
                                        </div>
                                        <span class="font-light"> {{ follow.numberSecound }} K</span>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="text-2xl font-light text-gray-200">EDehati Brings</h2>
                                    <p class="text-2xl font-light text-gray-200">
                                        You #Natural #Fresh <br /> #Organic #Groceries
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.group-hover\:bg-opacity-75:hover {
    --tw-bg-opacity: 0.75;
}

.group-hover\:opacity-100:hover {
    opacity: 1;
}
</style>
