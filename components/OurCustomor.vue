<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination,Autoplay } from 'swiper/modules';

const customors = ref([
  {
    img: 'images/customor01.png',
    title: 'Kabir Ravat',
    detail: '"The quality of the organic produce from this site is outstanding. My family and I have never felt healthier!"'
  },
  {
    img: 'images/customor02.png',
    title: 'Rudar Handa',
    detail: '"The variety of products available is fantastic, and everything is always delivered promptly and in perfect condition."'
  },
  {
    img: 'images/customor02.png',
    title: 'Rudar Handa',
    detail: '"The variety of products available is fantastic, and everything is always delivered promptly and in perfect condition."'
  },
  {
    img: 'images/customor02.png',
    title: 'Rudar Handa',
    detail: '"The variety of products available is fantastic, and everything is always delivered promptly and in perfect condition."'
  },
  {
    img: 'images/customor03.png',
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

::v-deep(.swiper-slide) {
  margin: 0 !important;
  padding: 0 !important;
  max-width: 389px;
  width: 100%;

}

::v-deep(.swiper-wrapper) {
  justify-content: center;
  gap: 45px;
}
</style>

<template>
  <section>
    <div class="lg:max-w-[91rem] w-full mx-auto">
      <div class="py-10 max-w-[81rem] mx-auto w-full">
        <h2
          class="text-[#621E06] lg:text-[45px] md:text-2xl text-sm text-center poppins-bold lg:mb-10 md:mb-5 mb-2 font-bold">
          What Do Our
          Customers Say
        </h2>
        <!-- cart section -->
        <Swiper :modules="[Pagination,Autoplay]"
        :pagination="false"  
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
         :centeredSlides="true" :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }" class="mySwiper">
          <swiper-slide v-for="(customor, index) in customors" :key="index" class="p-4">
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
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
