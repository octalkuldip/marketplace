<template>
    <div>
        <div class="mx-auto max-w-[91.63rem] w-full px-4">
            <div class="lg:pt-[50px] py-[30px] lg:pb-[60px] flex flex-col lg:gap-10 gap-[18px]">
                <h2
                    class="lg:max-w-[758px] max-w-full mx-auto text-center lg:text-[45px] sm:text-3xl lg:leading-[67px] poppins-bold text-[22px] text-[rgb(98,30,6)]">
                    6 Benefits Of Natural And Organic
                    Food For A Healthy Lifestyle!
                </h2>
                <div>
                    Blog ID: {{ id }}
                </div>
                <div
                    class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[63px] lg:gap-y-[40px] sm:justify-between gap-[18px]">
                    <OurBlog v-for="(blog, index) in blogs" :key="index" :blog="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const blogs = ref([
    {
        id: 121,
        image: '/images/blog-1.png',
        date: '1st jun 2023',
        title: '6 Benefits of Natural and organic food for a healthy lifestyle!',
    },
    {
        id: 122,
        image: '/images/blog-2.png',
        date: '3rd jun 2023',
        title: 'Benefits of Apple Cider Vinegar & How it should be consumed?',
    },
    {
        id: 123,
        image: '/images/blog-3.png',
        date: '12th jun 2023',
        title: 'Natural wonder Chamomile Flower Tea.',
    },
    {
        id: 124,
        image: '/images/blog-4.png',
        date: '1st Feb 2023',
        title: 'Secret recipe of Himachal Mash Dhuli Bari?',
    },
    {
        id: 125,
        image: '/images/blog-5.png',
        date: '21st july 2023',
        title: '6 Benefits of Natural and organic food for a healthy lifestyle!',
    },
    {
        id: 126,
        image: '/images/blog-6.png',
        date: '16th aug 2023',
        title: '6 Benefits of Natural and organic food for a healthy lifestyle!',
    },
]);

const route = useRoute();
const id = route.params.id;

</script>

<style scoped></style>