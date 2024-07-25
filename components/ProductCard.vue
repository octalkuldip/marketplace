<script setup>
import { useStore } from 'vuex';
import { ShoppingCartIcon, StarIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue'

const rating = ref(3);

const rate = (value) => {
  rating.value = value;
};

const props = defineProps(["datilds"]);
const showStar = ref(false);
const store = useStore();

const addToCart = (product) => {
  console.error(store);
  store.dispatch('addToCart', { product, quantity: 1 });
};

const removeFromCart = () => {
  store.dispatch('removeFromCart', );
};


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
  <div v-for="products in datilds" :key="products" class="rounded-lg overflow-hidden m-4 px-2 max-w-[400px]">
    <div class="py-4">
      <div class="overflow-hidden mb-4">
        <img class="w-full h-400 object-cover" alt="Placeholder Image" :src="products.poster" />
      </div>
      <h3 class="font-bold text-lg mb-2 text-center">{{ products.title }}</h3>
      <p class="text-black text-sm mb-4 px-2 font-bold text-center">Price : {{ products.price }}</p>
      <div class="flex ml-2 justify-center cursor-pointer">
        <span v-for="(star, index) in 5" :key="index">
          <StarIcon @click="rate(index + 1)" :class="index < rating ? 'fill-rose-950 transition-all duration-300' : ''"
            class="text-rose-950 w-5 h-5" />
        </span>
      </div>
      <div class="mt-8 p-2 text-center">
        <NuxtLink @click="addToCart(datilds)"
          class="bg-rose-950 hover:bg-white border-2 font-semibold hover:font-bold border-rose-950 hover:text-rose-950 duration-200 text-white py-2 px-16 rounded">
          Add to Cart</NuxtLink>
      </div>
    </div>
  </div>
</template>
