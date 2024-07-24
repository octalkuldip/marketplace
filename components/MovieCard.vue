<script setup>
import { useStore } from 'vuex';
import { ShoppingCartIcon, StarIcon } from '@heroicons/vue/24/outline';

   const props =  defineProps(["datilds"]);
   const showStar = ref(false);
   const store = useStore();

  //  const emit = defineEmits(['addToCart']);


const addToCart = (product) => {
  console.error(store);
  store.dispatch('addToCart', { product, quantity: 1 });
};

const removeFromCart = (productId) => {
  store.dispatch('removeFromCart', productId);
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
    <div v-for="products in datilds" :key="products" class="bg-cyan-50 rounded-lg shadow-md overflow-hidden m-4 px-2">
      <div class="p-1 py-4">
        <div class="overflow-hidden mb-4">
          <img
            class="h-400 w-300 object-cover"
            alt="Placeholder Image"
            :src="products.poster"
          />
        </div>
        <h3 class="font-semibold text-lg mb-2 text-center">{{ products.title}}</h3>
        <p class="text-gray-500 text-sm mb-2 px-2 text-center">Price: {{ products.price }}</p>
        <div class="flex ml-2 cursor-pointer justify-center">
          <span @click="showStar = !showStar"><StarIcon :class="showStar ? 'fill-yellow-400 transition-all duration-300' : '' " class="text-yellow-400  w-5 h-5" /> </span>
        <span><StarIcon class="text-yellow-400 w-5 h-5" /> </span>
        <span><StarIcon class="text-yellow-400 w-5 h-5" /> </span>
        </div>
        <div class="mt-4 p-2 text-center">
          <!-- :to="`movie/${movieid}`" -->
          <button
            @click="addToCart(datilds)"
            class="bg-rose-950    text-white font-medium py-2 px-4 rounded"
            > 
            <ShoppingCartIcon class="w-5 h-5 inline-flex" /> 
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </template>
