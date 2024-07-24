<script setup>
import { StarIcon } from '@heroicons/vue/24/outline';

   const props =  defineProps(["datilds"]);

</script>
<style scoped>
.h-400 {
  height: 400px;
}
.w-300 {
  width: 300px;
}
</style>
<template>
    <div v-for="products in datilds" :key="products" class="bg-cyan-50 rounded-lg shadow-md overflow-hidden m-4 px-2">
      <div class="p-1 py-4">
        <h3 class="font-semibold text-lg mb-2 text-center">{{ products.title}}</h3>
        <div class="overflow-hidden mb-4">
          <img
            class="h-400 w-300 object-cover"
            alt="Placeholder Image"
            :src="products.poster"
          />
        </div>
        <p class="text-gray-500 text-sm mb-2 px-2">Price: {{ products.price }}</p>
        <div class="flex ml-2 cursor-pointer">
          <span><StarIcon class="text-yellow-500 fill-yellow-500 w-5 h-5" /> </span>
        <span><StarIcon class="text-yellow-500 w-5 h-5" /> </span>
        <span><StarIcon class="text-yellow-500 w-5 h-5" /> </span>
        </div>
        <div class="mt-4 p-2 text-center">
          <NuxtLink
            :to="`movie/${movieid}`"
            class="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded"
            >Buy Now</NuxtLink
          >
        </div>
      </div>
    </div>
  </template>
