<script setup>
// import { ShoppingCartIcon, StarIcon } from '@heroicons/vue/24/outline';
const props = defineProps(["product"]);


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
  <div v-for="products in product" :key="products" class="rounded-lg overflow-hidden px-2 max-w-[400px]">
    <div class="py-4 border border-[#A4F6BB] p-[15px]">
      <div class="overflow-hidden mb-4">
        <img class="w-full object-cover" alt="Placeholder Image" src="../public/img/card01.png" />
      </div>
      <div class="flex flex-col gap-[10px]">
        <div>
          <h3 class="font-normal leading-5 py-2 text-sm text-center poppins">{{ products.title }}</h3>
          <p class="text-black lg:text-[23px] text-sm px-2 poppins-extraBold text-center">₹{{ products.price }}</p>
        </div>
        <div class="p-2 text-center">
          <button
            class="bg-[#9BC05B] border-2 cursor-pointer font-semibold poppins-bold duration-200 text-white py-2 xl:px-16 px-4  rounded-[4px]">
            QUICK VIEW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
