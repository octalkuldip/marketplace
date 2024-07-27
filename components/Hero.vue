<script setup>

const BannerSliders = ref([
  { img: 'https://static.vecteezy.com/system/resources/thumbnails/012/865/505/small/idyllic-mountain-panoramic-landscape-fresh-green-meadows-and-blooming-wildflowers-sun-ray-beautiful-nature-countryside-view-rural-sunny-outdoor-natural-bright-banner-nature-spring-summer-panorama-photo.jpg' },
  { img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/nature-cosmetic-product-sale-poster-banner-design-template-28a3a3450d5df1deba865cf54a27a3a6_screen.jpg?ts=1688007268' },
  { img: 'https://i.pngimg.me/thumb/f/720/3b9ce75a08db47f29d61.jpg' },
  { img: 'https://img.freepik.com/free-photo/serum-bottle-with-yellow-background_23-2148549080.jpg' },
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
    <SwiperSlide v-for="BannerSlider in BannerSliders" :key="BannerSlider">
      <img :src="BannerSlider.img" alt="image" class="w-full lg:h-[50vh] sm:h-[50vh] h-[25vh] object-cover">
    </SwiperSlide>
  </Swiper>
  </section>
</template>
