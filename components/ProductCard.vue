<script setup>
const products = ref([
  {
    title: 'Green Chili Pickle',
    price: '29',
    poster: 'https://st5.depositphotos.com/1961351/65562/i/450/depositphotos_655623950-stock-photo-shower-gel-natural-fiber-sponge.jpg',
    offerDiscountPrice: '220',

  },
  {
    title: 'Batman movie city',
    price: '20',
    poster: 'https://st5.depositphotos.com/1961351/65562/i/450/depositphotos_655623950-stock-photo-shower-gel-natural-fiber-sponge.jpg',
    offerDiscountPrice: '220',

  },
  {
    title: 'Batman movie city',
    price: '20',
    poster: 'https://st5.depositphotos.com/1961351/65562/i/450/depositphotos_655623950-stock-photo-shower-gel-natural-fiber-sponge.jpg',
    offerDiscountPrice: '220',

  },
  {
    title: 'Batman movie city',
    price: '20',
    poster: 'https://st5.depositphotos.com/1961351/65562/i/450/depositphotos_655623950-stock-photo-shower-gel-natural-fiber-sponge.jpg',
    offerDiscountPrice: '220',

  },
]);
</script>

<style scoped>
.quick-view-button:hover .quick-view-text {
  opacity: 0;
}

.quick-view-button:hover .eye-icon {
  bottom: 10px;
}

.strok-price-line::after {
  content: '';
  width: 100%;
  height: 1px;
  background-color: gray;
  position: absolute;
  top: 50%;
  left: 0;
  transform: rotate(20deg);
}
</style>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[82px]">
    <div v-for="product in products" :key="product.title"
      class="border border-[#A4F6BB] p-4 max-w-[400px] w-full mx-auto">
      <div class="mb-4">
        <img class="w-full object-cover rounded-lg h-auto" alt="Product Image" :src="product.poster" />
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <h3 class="font-normal leading-5 py-2 text-sm text-center poppins">{{ product.title }}</h3>
          <p class="lg:text-[23px] flex items-center justify-center gap-1.5 text-sm px-2 poppins-extraBold text-center">₹{{ product.price }}
            <span class="lg:text-sm text-xs font-normal poppins cursor-pointer strok-price-line relative text-[#7D7B7B]">₹{{
              product.offerDiscountPrice }}</span>
          </p>
        </div>
        <div class="text-center">
          <div class="relative w-full">
            <button
              class="w-full quick-view-button flex items-center justify-center bg-[#9BC05B] cursor-pointer font-semibold duration-200 text-white py-2 xl:px-16 px-4 rounded-[4px]">
              <span class="quick-view-text poppins transition-opacity duration-200 ease-in-out">QUICK VIEW</span>
              <img
                class="eye-icon absolute bottom-[-40px] transition-bottom duration-300 ease-in-out max-w-[30px] w-full"
                alt="Eye Icon" src="../public/svg/eye.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
