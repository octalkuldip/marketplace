<script setup>
import { ref } from 'vue';

// Define the cart items
const carts = ref([
    {
        image: `https://img.lovepik.com/free-png/20211110/lovepik-fashion-beauty-products-png-image_400718028_wh1200.png`,
        title: 'Blue Bottle',
        number: 0,
        price: 7.15 // Use numeric value for easier calculation
    }
]);

// Increment item count
const increment = (index) => {
    carts.value[index].number += 1;
};

// Decrement item count
const decrement = (index) => {
    if (carts.value[index].number > 0) {
        carts.value[index].number -= 1;
    }
};

// Remove item from cart
const removeItem = (index) => {
    carts.value.splice(index, 1);
};
</script>

<template>
    <section>
        <div v-for="(cart, index) in carts" :key="index" class="flex items-start">
            <div class="flex gap-2 p-5">
                <div>
                    <img :src="cart.image" alt="" class="w-28 h-28">
                </div>
                <div class="flex gap-1 flex-col">
                    <h2 class="font-semibold">{{ cart.title }}</h2>
                    <div class="flex gap-3 items-center ">
                        <button @click="decrement(index)" class="px-3 py-1 bg-rose-950 text-white rounded-sm"> - </button>
                        {{ cart.number }}
                        <button @click="increment(index)" class="px-3 py-1 bg-rose-950 text-white rounded-sm"> + </button>
                    </div>
                    <h4 class="font-semibold">{{ `$${(cart.number * cart.price).toFixed(2)}` }}</h4>
                </div>
            </div>
            <div>
                <button @click="removeItem(index)" class="px-4 bg-rose-950 py-1 text-white rounded-md">Remove</button>
            </div>
        </div>
    </section>
</template>
