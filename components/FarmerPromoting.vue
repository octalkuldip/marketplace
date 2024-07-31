<template>
    <section class="relative lg:py-[50px] py-[35px] bg-cover object-cover">
        <div class="absolute inset-0 lg:bg-[url('images/hill.png')] bg-cover opacity-15 z-0"></div>
        <img src="../public/images/rice2.png" alt="img" class="max-w-[701px] w-full absolute right-0 bottom-0">
        <img src="../public/images/rice1.png" alt="img"
            class="lg:max-w-[357px] w-full absolute left-0 lg:block hidden bottom-0">
        <div class="max-w-[73.188rem] mx-auto w-full px-4 relative">
            <div class="flex flex-col lg:gap-[54px] gap-8">
                <div class="flex flex-col gap-4 max-w-[743px] mx-auto w-full">
                    <h2 class="poppins-bold text-brown lg:text-[43px] leading-[67px] text-xl text-center">Creating
                        Healthier Families and Happy Farmers
                    </h2>
                    <p class="max-w-[711px] mx-auto w-full poppins lg:text-[17px] text-sm text-center text-brown">
                        Promoting
                        well-being for families while supporting sustainable farming practices for prosperous,
                        contented farmers.</p>
                </div>
                <div
                    class="lg:flex grid sm:grid-cols-2 grid-cols-2 gap-7 lg:justify-between justify-center items-center">
                    <div v-for="promoting in promotings" :key="promoting" id="count"
                        class="flex flex-col justify-center items-center gap-[11px] lg:py-4 py-3 lg:px-6 px-4 rounded-md bg-[#F4FFEF] lg:max-w-[223px] sm:max-w-full max-w-[152px] lg:ml-auto lg:mr-0 mx-auto w-full"
                        style="box-shadow: 0px 4px 7px 0px #00000040;">
                            <AnimatedCount :number="promoting.statistics" class="text-center poppins-bold lg:text-[33px] text-3xl text-[#DA5323]" />
                        <p class="text-center poppins lg:text-xl text-sm text-brown">{{ promoting.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AnimatedCount from '@/components/AnimatedCount.vue'
const promotings = [
    {
        statistics: 1000,
        text: 'Happy Families Served'
    },
    {
        statistics: 500,
        text: 'Acres of Organic Farmland'
    },
    {
        statistics: 200,
        text: 'Products Available'
    },
    {
        statistics: 400,
        text: 'Farmers Empowered'
    },
];
const dynamicNumber = ref(0);

const increaseNumber = () => {
    dynamicNumber.value += 10;
};
</script>

<style scoped></style>
