<script setup>
import { useStore } from 'vuex';
import { ShoppingCartIcon, StarIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue'

const rating = ref(3);

const rate = (value) => {
  rating.value = value;
};

const props = defineProps(["product"]);
const showStar = ref(false);
const store = useStore();

const addToCart = (product) => {
  console.log(product ,'hello');
 
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
  <div v-for="products in product" :key="products" class="rounded-lg overflow-hidden m-4 px-2 max-w-[400px]">
    <div class="py-4 border border-[#A4F6BB] p-[15px]">
      <div class="overflow-hidden mb-4">
        <img class="w-full object-cover" alt="Placeholder Image" src="../public/img/card01.png" />
      </div>
      <div class="flex flex-col gap-[10px]">
        <div>
          <h3 class="font-normal leading-5 py-2 text-sm text-center">{{ products.title }}</h3>
          <p class="text-black lg:text-[23px] text-sm px-2 font-bold text-center">₹{{ products.price }}</p>
        </div>
        <div class="p-2 text-center">
          <NuxtLink
            class="bg-[#9BC05B] border-2 cursor-pointer font-semibold hover:font-bold duration-200 text-white py-2 lg:px-16 px-8 rounded-[4px]">
            QUICK VIEW
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
