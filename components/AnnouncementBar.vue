<script setup>
const announcements = ref([
    { text: 'SWITCH TO PURITY, SWITCH TO ORGANIC ', link: '#' },
    { text: 'FARM TO HOME ACROSS INDIA.', link: '#' },
    { text: '05 CHARGES ON CREDIT CARDS.', link: '#' },
    { text: 'ESSENTIAL FOR HEALTHY LIFESTYLE', link: '#' },

]);

</script>
<style></style>

<template>
    <Swiper class="w-full bg-orange-600 text-white" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }" :creative-effect="{
            prev: {
                shadow: true,
                translate: ['-100%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }">
        <SwiperSlide v-for="announcement in announcements" :key="announcement" class="ease-linear">
            <a href="#" class="flex justify-center items-center gap-2 w-full lg:text-base text-xs p-1">
                {{ announcement.text }}
            </a>
        </SwiperSlide>
    </Swiper>
</template>
