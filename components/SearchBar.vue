<script setup>
import { ref, defineProps } from 'vue';
const searchInput = ref('');

</script>
<style></style>

<template>
  <section class="search-section py-16">
    <div class="md:px-40 px-5">
      <div class="flex">
        <input
          class="border-2 border-rose-950 py-2 px-4 w-full rounded-l-full focus:outline-none placeholder:text-rose-950 font-semibold"
          type="text" placeholder="Search Products..." v-model.lazy="searchInput" />
        <button class="bg-rose-950 animate-fade font-semibold text-white py-2.5 px-4 rounded-r-full" type="submit"
          @click="$emit('searchMovie', searchInput)">
          Search
        </button>
      </div>
    </div>
  </section>
</template>