<script setup>
import { ref } from 'vue';

const customors = ref([
  {
    img: 'images/user.png',
    title: 'Kabir Ravat',
    detail: '"The quality of the organic produce from this site is outstanding. My family and I have never felt healthier!"'
  },
  {
    img: 'images/user-1.png',
    title: 'Rudar Handa',
    detail: '"The variety of products available is fantastic, and everything is always delivered promptly and in perfect condition."'
  },
  {
    img: 'images/user-2.png',
    title: 'Rudar Handa',
    detail: '"The variety of products available is fantastic, and everything is always delivered promptly and in perfect condition."'
  },
  {
    img: 'images/user.png',
    title: 'Rudar Handa',
    detail: '"The variety of products available is fantastic, and everything is always delivered promptly and in perfect condition."'
  },
  {
    img: 'images/user-2.png',
    title: 'Hari Handa',
    detail: '"The quality of the organic produce from this site is outstanding. My family and I have never felt healthier!"'
  }
]);
</script>

<style scoped>
.custom-customor-shadow {
  box-shadow: 0px 4px 9px 0px #0000002E;
  background: linear-gradient(116.24deg, #F4F6F6 7.78%, #EBFFF1 51.18%, #F3F8F8 129.34%);
}
</style>

<template>
  <section>
    <div class="lg:max-w-[91rem] w-full mx-auto">
      <div class="py-10 max-w-[81rem] mx-auto w-full">
        <h2
          class="text-brown lg:text-[45px] md:text-2xl text-sm text-center poppins-bold lg:mb-10 md:mb-5 mb-2 font-bold">
          What Do Our
          Customers Say
        </h2>
        <!-- cart section -->
        <Swiper :modules="[SwiperAutoplay]" :loop="true" :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }" :breakpoints="{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }">
          <SwiperSlide v-for="(customor, index) in customors" :key="index" class="p-4">
            <div class="lg:max-w-[389px] w-full custom-customor-shadow py-5 px-6">
              <div class="flex flex-col gap-3.5">
                <h3 class="text-[#DA5323] text-xl font-bold text-center">
                  <span class="border-b border-[#DA5323]">{{ customor.title }}</span>
                </h3>
                <p class="lg:text-base text-xs font-normal text-center">
                  {{ customor.detail }}
                </p>
                <div class="max-w-[68px] w-full mx-auto">
                  <img :src="customor.img" alt="">
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
