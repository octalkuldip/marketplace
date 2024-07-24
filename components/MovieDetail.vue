<script setup>
import { StarIcon } from '@heroicons/vue/24/outline';

defineProps(["title", "date", "poster", "revenue", "overview"]);
</script>

<template>
  <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-10">
    <!-- Column 1: Image -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        class="h-400 w-full"
        src="https://firstbase.in/phpfiles/2020/06/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india.jpg"
        alt="Placeholder Image"
      />
    </div>

    <!-- Column 2: Title, Overview, revenue, Buy Button -->
    <div class="sm:col-span-2 mx-6">
      <h1 class="font-bold text-2xl mb-5">{{ title }}</h1>
      <h3 class="font-semibold text-lg mb-5">Release Date: {{ date }}</h3>
      <p class="text-gray-500 text-md mb-8">
        {{ overview }}
      </p>
      <div class="flex">
        <span><StarIcon class="text-yellow-500 w-5 h-5" /> </span>
      <span><StarIcon class="text-yellow-500 w-5 h-5" /> </span>
      <span><StarIcon class="text-yellow-500 w-5 h-5" /> </span>
      </div>

      <p class="text-gray-500 text-md">Revenue: $ {{ revenue }}</p>

      <div class="mt-6">
        <NuxtLink
          to="/"
          class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded"
        >
          Back
        </NuxtLink>
        <button
          class="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded m-5"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
