<script setup>

const bannerSliders = ref([
  { img: '/home1.png' },
  { img: '/home2.png' },
]);


</script>
<style></style>

<template>
  <section>
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
      <img :src="bannerSlider.img" alt="image" class="w-full lg:h-full sm:h-full h-[126px] bg-center lg:object-cover">
    </SwiperSlide>
  </Swiper>
  </section>
</template>
