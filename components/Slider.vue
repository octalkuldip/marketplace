<!-- components/ImageCarousel.vue -->
<template>
  <Carousel :autoplay="true" :autoplayTimeout="3000" :loop="true">
    <Slide v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" />
    </Slide>
  </Carousel>
</template>

<script setup>
//   import { Carousel, Slide } from 'vue3-carousel';
//   import 'vue3-carousel/dist/carousel.css';

const images = ref([
  { src: 'https://via.placeholder.com/600x400?text=Slide+1', alt: 'Slide 1' },
  { src: 'https://via.placeholder.com/600x400?text=Slide+2', alt: 'Slide 2' },
  { src: 'https://via.placeholder.com/600x400?text=Slide+3', alt: 'Slide 3' },
]);
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>