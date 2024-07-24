<script setup>
import { ref } from 'vue';


const letters = 'Online' + ' ' + 'Product';

const getAnimationDelay = (index) => {
  return {
    animationDelay: `${index * 0.1}s`
  };
};
</script>
<style>
h1 {
  display: inline-block;
  opacity: 0;
  transform: translateY(50%);
  animation: dropDry 0.1s forwards, dry .1s forwards linear;
}
.img-btn{
  opacity: 0;
}
.image-view:hover .img-btn{
  opacity: 1;
  transition: all .33s ease-in-out;
}

@keyframes dropDry {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes dry {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}
</style>

<template>
  <section>
    <div class="container sm:mx-auto max-w-7xl px-8">
      <div
        class="flex items-center lg:flex-row sm:flex-col flex-col gap-109 justify-between mt-16 lg:pt-12 sm:pt-8 pt-0">
        <div
          class="flex flex-col gap-10 lg:items-start sm:items-center lg:text-start sm:text-center text-center lg:max-w-[525px] sm:max-w-full w-full">
          <div class="flex overflow-hidden">
            <h1 class="text-7xl font-bold text-rose-950" v-for="(letter, index) in letters" :key="index"
              :style="getAnimationDelay(index)">

              {{ index === 6 ? '&nbsp;' : letter }}
            </h1>
          </div>
          <h3 class="text-xl text-black">
            the price that people expect or deem to be reasonable for a certain type of product.
          </h3>
          <NuxtLink to="#"
            class="bg-rose-950 hover:bg-white animate-bounce hover:text-rose-950 border-2 duration-200 border-rose-950 text-white rounded-full font-medium py-2 pb-2.5 px-8">
            Buy Now
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="relative image-view cursor-pointer">
            <img src="https://img.freepik.com/premium-photo/skincare-beauty-product_946209-6411.jpg" alt=""
              class="rounded-xl brightness-50 max-w-72 w-full  drop-shadow shadow-rose-950">
              <a href="#" class="absolute top-[50%]  cursor-pointer img-btn left-[50%] bg-white p-2 px-4 text-sm font-bold rounded-xl" style="transform: translate(-50%, -50%);">View</a>
          </div>
          <div class="relative image-view cursor-pointer">
            <img src="https://img.freepik.com/premium-photo/skincare-beauty-product_946209-6411.jpg" alt=""
              class="rounded-xl brightness-50 max-w-72 w-full  drop-shadow shadow-rose-950">
              <a href="#" class="absolute top-[50%]  cursor-pointer img-btn left-[50%] bg-white p-2 px-4 text-sm font-bold rounded-xl" style="transform: translate(-50%, -50%);">View</a>
          </div>
          <div class="relative image-view cursor-pointer">
            <img src="https://img.freepik.com/premium-photo/skincare-beauty-product_946209-6411.jpg" alt=""
              class="rounded-xl brightness-50 max-w-72 w-full  drop-shadow shadow-rose-950">
              <a href="#" class="absolute top-[50%]  cursor-pointer img-btn left-[50%] bg-white p-2 px-4 text-sm font-bold rounded-xl" style="transform: translate(-50%, -50%);">View</a>
          </div>
          <div class="relative image-view cursor-pointer">
            <img src="https://img.freepik.com/premium-photo/skincare-beauty-product_946209-6411.jpg" alt=""
              class="rounded-xl brightness-50 max-w-72 w-full  drop-shadow shadow-rose-950">
              <a href="#" class="absolute top-[50%]  cursor-pointer img-btn left-[50%] bg-white p-2 px-4 text-sm font-bold rounded-xl" style="transform: translate(-50%, -50%);">View</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
