<script setup>
import { ref } from 'vue';
const searchMovie = (searchInput) => {
    if (searchInput === '') {
        searchError.value = true
    }
    if (searchInput !== '') {
        searchError.value = false
    }
}
const product = ref([
    {
        ProductId: 123,
        title: 'Green Chili Pickle',
        price: `29`,
        poster: `https://assets.vogue.in/photos/601911c54b87ce1c74b421f5/master/w_1600%2Cc_limit/L%25E2%2580%2599Ore%25CC%2581al-Paris-1.5%2525-Hyaluronic-Acid-Serum-1-.png`
    },
    {
        ProductId: 123,
        title: 'Batman movie city',
        price: `20`,
        poster: `https://st5.depositphotos.com/1961351/65562/i/450/depositphotos_655623950-stock-photo-shower-gel-natural-fiber-sponge.jpg`
    },
   
]);
const shoppingCard =  ref([]);
const searchError = ref(false);
</script>
<style></style>

<template>
    <div class="mx-auto max-w-[92rem] w-full px-4 pt-[50px] pb-[60px]">
    <!-- <ProductCategories/> -->
    <div class="flex flex-col gap-2 mb-[40px]">
        <h2 class="font-bold lg:text-5xl poppins-extraBold text-2xl text-[#621E06]">Farm to Home Natural Transformation</h2>
        <p class="text-xl poppins-bold">Offers You Can't Refuse</p>
    </div>
        <!-- <div class="flex"> -->
            <!-- <ProductCollection /> -->
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-cente">
                <div v-for="n in 4">
                    <ProductCard :product="product" />
                </div>
            </div>
        <!-- </div> -->
    </div>
    <OffersCard />
    <ProductFeatured />
    <Footer />
</template>