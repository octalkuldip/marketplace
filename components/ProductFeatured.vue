<template>
  <section class="relative lg:bg-transparent bg-[#fdf6f2]">
    <div
      class="absolute bottom-0  opacity-30 w-full"> 
      <img src="../public/images/cow.png" alt="cow" class=" lg:h-full h-full  w-full object-cover">
    </div>
    <div class="relative lg:py-[35px] py-[30px]">
      <div
        class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 px-[12px] lg:py-[20px] items-center lg:gap-[33px] gap-[15px] max-w-[1363px] mx-auto w-full">
        <div v-for="(item, index) in featuredItems" :key="index" class="flex lg:py-0 py-[10px] flex-col lg:gap-3 sm:gap-2 gap-1">
          <a href="#">
            <img :src="item.imgSrc" :alt="item.alt" class="w-full lg:max-w-[120px] sm:max-w-[80px] max-w-[50px] mx-auto hover:translate-x-3 hover:-translate-y-3 duration-300">
          </a>
          <a href="#">
            <h2 class="text-center lg:text-2xl sm:text-xl text-sm poppins-bold font-bold text-brown">{{ item.title }}</h2>
          </a>
          <p class="text-center font-normal lg:text-sm text-xs poppins">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredItems = [
  {
    imgSrc: '/images/featured1.png',
    alt: 'Authenticity',
    title: 'Authenticity',
    description: 'Ensuring purity and quality, our organic products are authentically sourced for your health and well-being.'
  },
  {
    imgSrc: '/images/featured2.png',
    alt: 'Tradition',
    title: 'Tradition',
    description: 'Ensuring purity and quality, our organic products are authentically sourced for your health and well-being.'
  },
  {
    imgSrc: '/images/featured3.png',
    alt: 'Brutal Honesty',
    title: 'Brutal Honesty',
    description: 'Ensuring purity and quality, our organic products are authentically sourced for your health and well-being.'
  },
  {
    imgSrc: '/images/featured4.png',
    alt: 'Purpose',
    title: 'Purpose',
    description: 'Ensuring purity and quality, our organic products are authentically sourced for your health and well-being.'
  }
];
</script>

<style scoped></style>
