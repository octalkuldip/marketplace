<script setup>
const announcements = ref([
    { text: 'All-NEW Soda and Savory Flavors are now Available!', link: '#' },
    { text: 'Try our new range of healthy snacks!', link: '#' },
    { text: 'Limited-time offer: 20% off on all products!', link: '#' },
]);

</script>
<style></style>

<template>
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
        :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
        }" :creative-effect="{
            prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }">
        <SwiperSlide v-for="announcement in announcements" :key="announcement" class="overflow-x-hidden">
            <a href="#" class="flex justify-center items-center gap-2 w-full bg-black text-white py-2 lg:text-xs">
                {{ announcement.text }}
                <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="right"
                    class="icon glyph">
                    <path class="fill-white"
                        d="M21.92,11.62a1.15,1.15,0,0,0-.21-.33h0l-7-7a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7-7h0a1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76Z"
                        style="fill:white">
                    </path>
                </svg>
            </a>
        </SwiperSlide>
    </Swiper>
</template>
