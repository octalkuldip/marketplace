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
const datilds = ref([
    {
        ProductId: 123,
        title: 'Hyaluronic Acid Serum',
        price: `100$`,
        poster: `https://assets.vogue.in/photos/601911c54b87ce1c74b421f5/master/w_1600%2Cc_limit/L%25E2%2580%2599Ore%25CC%2581al-Paris-1.5%2525-Hyaluronic-Acid-Serum-1-.png`
    },
    {
        ProductId: 123,
        title: 'Batman movie city',
        price: `20$`,
        poster: `https://st5.depositphotos.com/1961351/65562/i/450/depositphotos_655623950-stock-photo-shower-gel-natural-fiber-sponge.jpg`
    },
    {
        ProductId: 123,
        title: 'Ravion Red Lipstick',
        price: `500$`,
        poster: `https://www.prophotostudio.net/wp-content/uploads/2022/04/Lipstick_Photography.webp`
    }
])
const searchError = ref(false);
</script>
<style></style>

<template>
    <ProductFeatured />
    <div class="mx-auto max-w-[100rem] w-full px-4">
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-cente">
            <div v-for="n in 4">
                <ProductCard :datilds="datilds" />
            </div>
        </div>
    </div>
    <Footer />
</template>