<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const products = ref([
    {
        title: 'Green Chili Pickle',
        price: '123',
        poster: '/images/card01.png',
        offerDiscountPrice: '220',

    },
    {
        title: 'Batman movie city',
        price: '122',
        poster: '/images/card02.png',
        offerDiscountPrice: '220',

    },
    {
        title: 'Batman movie city',
        price: '169',
        poster: '/images/card03.png',
        offerDiscountPrice: '220',

    },
    {
        title: 'Batman movie city',
        price: '175',
        poster: '/images/card04.png',
        offerDiscountPrice: '220',

    },
    {
        title: 'Batman movie city',
        price: '142',
        poster: '/images/card01.png',
        offerDiscountPrice: '220',

    },
    {
        title: 'Batman movie city',
        price: '115',
        poster: '/images/card02.png',
        offerDiscountPrice: '220',

    },
]);

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
const blogId = Number(route.params.id);

const blogDetails = ref({});

const fetchBlogDetails = () => {
    blogDetails.value = blogs.value.find(blog => blog.id === blogId);
};

onMounted(() => {
    if (blogId) {
        fetchBlogDetails();
    }
});

</script>

<template>
    <div>
        <div class="mx-auto max-w-[91.63rem] w-full px-4">
            <div class="lg:pt-[50px] py-[30px] lg:pb-[60px] flex flex-col lg:gap-10 gap-[18px]">
                <h2
                    class="font-bold lg:max-w-[753px] max-w-full mx-auto text-center lg:text-[45px] sm:text-3xl lg:leading-[67px] poppins-bold text-[22px] text-[rgb(98,30,6)]">
                    From Farm to Home
                    The Journey of Organic Products</h2>
                <div
                    class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[63px] lg:gap-y-[40px] sm:justify-between gap-[18px]">
                    <OurBlog v-for="(blog, index) in blogs" :key="index" :blog="blog" />
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-[92rem] w-full px-4">
            <div class="lg:pt-[50px] py-[30px] lg:pb-[60px]">
                <div class="flex flex-col gap-2 lg:mb-[40px] mb-6">
                    <h2 class="lg:text-5xl poppins-extraBold text-2xl text-brown">Farm to Home Natural
                        Transformation</h2>
                    <p class="text-xl poppins-bold">Offers You Can't Refuse</p>
                </div>
                <Swiper :modules="[SwiperAutoplay]" :loop="true" :autoplay="{
                    delay: 2000,
                    disableOnInteraction: true,
                }" :breakpoints="{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }">
                    <SwiperSlide v-for="(product, index) in products" :key="index">
                        <ProductCard :product="product" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<style scoped></style>