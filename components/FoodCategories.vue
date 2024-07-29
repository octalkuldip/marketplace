<template>
    <section class="py-4">
        <div class="container max-w-[67rem] mx-auto">
            <div class="flex w-full overflow-hidden">
                <div class="flex lg:gap-11 sm:gap-9 gap-4 animate-scroll">
                    <div v-for="item in images" :key="item.id" class="lg:w-20 w-[5rem]  flex-shrink-0">
                        <a :href="item.link">
                            <img :src="item.src"
                                class="w-full lg:max-w-[36px] sm:max-w-[30px] max-w-[20px] block mx-auto" />
                            <h5
                                class="mt-[10px] text-center uppercase lg:text-xs sm:text-xs text-[9px] hover:text-brown helvetica font-normal">
                                {{ item.title }}</h5>
                        </a>
                    </div>
                    <!-- Duplicate slides for seamless infinite scrolling -->
                    <div v-for="item in images" :key="item.id + '-duplicate'" class="lg:w-20 w-[5rem]  flex-shrink-1">
                        <a :href="item.link">
                            <img :src="item.src"
                                class="w-full lg:max-w-[36px] sm:max-w-[30px] max-w-[20px] block mx-auto" />
                            <h5
                                class="mt-[10px] text-center uppercase lg:text-xs sm:text-xs text-[9px] hover:text-brown helvetica font-normal">
                                {{ item.title }}</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
    { id: 1, src: '/svg/Mask group.svg', title: 'Flours & Suji', link: '#' },
    { id: 2, src: '/svg/Mask group (1).svg', title: 'Oil & Ghee', link: '#' },
    { id: 3, src: '/svg/Mask group (8).svg', title: 'Pulses', link: '#' },
    { id: 4, src: '/svg/Mask group (2).svg', title: 'Spices', link: '#' },
    { id: 5, src: '/svg/Mask group (3).svg', title: 'Herbal Care', link: '#' },
    { id: 6, src: '/svg/Mask group (4).svg', title: 'Fruits & Vegetables', link: '#' },
    { id: 7, src: '/svg/Mask group (5).svg', title: 'Dry Fruits & HONEY', link: '#' },
    { id: 8, src: '/svg/Mask group (7).svg', title: 'Pickle & Jam', link: '#' },
    { id: 9, src: '/svg/Mask group (6).svg', title: 'Sugar & Jaggery', link: '#' },
]);
</script>

<style scoped>
.animate-scroll {
    animation: scroll 16s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>