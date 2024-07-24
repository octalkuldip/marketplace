<script setup>
import { ref } from 'vue';
   const searchMovie  = (searchInput) => {
    if(searchInput === ''){
        searchError.value = true
    }
    if(searchInput !== ''){
        searchError.value = false
    }
   }
   const datilds = ref([
    {
        movieid:123,
        title: 'Oil Product',
        price: `1000$`,
        poster: `https://static.wixstatic.com/media/624bc4_6fc0bc41d1a64fc4a14340a62041a40d~mv2.jpg/v1/fill/w_280,h_374,q_90/624bc4_6fc0bc41d1a64fc4a14340a62041a40d~mv2.jpg`
    },
    {
        movieid:123,
        title: 'Batman movie city',
        price: `2000$`,
        poster: `https://st5.depositphotos.com/1961351/65562/i/450/depositphotos_655623950-stock-photo-shower-gel-natural-fiber-sponge.jpg`
    }
   ])
   const searchError = ref(false);
</script>
<style>
    
</style>

<template>
    <div>
       <SearchBar 
        @search-movie="searchMovie"
        :searchError="searchError"
         />
        <div  class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-cyan-50">
            <div v-for="n in 8">
                <MovieCard
                  :datilds="datilds"
                />
              </div>
        </div> 
    </div>
</template>