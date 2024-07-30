<script setup>

const bannerSliders = ref([
  { img: '/home1.png' },
  { img: '/home2.png' },
  { img: '/home3.png' },
  { img: '/home7.png' },
]);
const mobileBanners = ref([
  { img: '/home5.png' },
  { img: '/home6.png' },
  { img: '/home8.png' },

]);


</script>
<style>
@media (max-width:1024px) {
  .height-full {
    height: 300px;
  }
}
</style>

<template>
  <section class="lg:block sm:block hidden">
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
      :autoplay="{
        delay: 3000,
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

      <SwiperSlide v-for="bannerSlider in bannerSliders" :key="bannerSlider">
        <img :src="bannerSlider.img" alt="image"
          class="w-full lg:h-[400px] sm:!h-[230px] height-full bg-center lg:object-cover">
      </SwiperSlide>
    </Swiper>
  </section>
  <section class="lg:hidden sm:hidden block">
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
      :autoplay="{
        delay: 3000,
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

      <SwiperSlide v-for="mobileBanner in mobileBanners" :key="mobileBanner">
        <img :src="mobileBanner.img" alt="image" class="w-full lg:h-full sm:h-full h-[338px] bg-center lg:object-cover">
      </SwiperSlide>
    </Swiper>
  </section>
</template>
