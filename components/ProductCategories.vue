<template>
    <section class="py-16">
        <div class="">
            <div class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 items-center justify-center">
                <div v-for="item in images" :key="item.id" class="">
                    <a :href="item.link" class="">
                            <img :src="item.src" class="w-full bg-gray p-2 h-full lg:min-h-[220px] sm:min-h-[200px] min-h-[130px] mx-auto rounded-[50%]  duration-300 transform hover:-translate-y-2 block" />
                        <h5 class="mt-2 text-center text-lg hover:text-orange-700 font-semibold">{{ item.title }}</h5>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Define an array of image objects
const images = ref([
    {
        id: 1,
        src: 'https://static.vecteezy.com/system/resources/previews/029/783/765/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg',
        title: 'Beuty Product',
        link: '#',
    },
    {
        id: 2,
        src: 'https://static.vecteezy.com/system/resources/previews/029/783/765/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg',
        title: 'Beuty Product',
        link: '#',
    },
    {
        id: 3,
        src: 'https://static.vecteezy.com/system/resources/previews/029/783/765/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg',
        title: 'Beuty Product',
        link: '#',
    },
    {
        id: 4,
        src: 'https://static.vecteezy.com/system/resources/previews/029/783/765/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg',
        title: 'Beuty Product',
        link: '#',
    },
    {
        id: 5,
        src: 'https://static.vecteezy.com/system/resources/previews/029/783/765/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg',
        title: 'Beuty Product',
        link: '#',
    },
    {
        id: 6,
        src: 'https://static.vecteezy.com/system/resources/previews/029/783/765/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg',
        title: 'Beuty Product',
        link: '#',
    },
]);
</script>

<style scoped></style>