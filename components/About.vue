<template>
    <section class="relative">
        <div v-for="farmar in farmers" :key="farmar" class="max-w-[1232px] w-full mx-auto py-[50px]">
            <div>
                <img :src="farmar.img02" alt="" class="max-w-[436px] w-full absolute bottom-0 left-0 opacity-50">
                <img :src="farmar.img02" alt="" class="max-w-[436px] w-full absolute bottom-0 right-0 opacity-50">
            </div>
            <div class="my-3">
                <h2 class="lg:text-[38px] text-base poppins-bold leading-[57px] lg:py-0 py-[30px] lg:px-0 px-[23px] text-center text-[#DA5323]"> {{ farmar.header }} </h2>
            </div>
                <img src="" alt="" class="lg:max-w-[376px] max-w-[165px] mx-auto w-full">
            <p class="text-base text-center leading-[30px] text-[#621E06]">
                {{ farmar.detail }}
            </p>
        </div>
    </section>
</template>
<script setup>
    const farmers = ref([
        {
            img01: 'images/about02.png',
            img02: 'images/about03.png',
            header:'“eDehati Is A Connection Between Of The Farmers , By The Farmers & For The Consumer “',
            img03: 'images/about.png',
            detail: `
                eDehati.com is an online venture that provides sales and marketing support to small and marginal farmers.
                We are into the production of processed and unprocessed farm products by practicing agro-ecological
                farming and sustainable livelihood practices, which are in accordance with Subhash Palekar Natural
                Farming (SPNF) techniques. We work with small AND marginal farmers in Himachal Pradesh. Our farmers have
                registered a Framers Producer Company (FPC) under Companies Act 2013, namely Emerging Dehati Producer
                Company Ltd. Our goal is to support the farmers and bring change into their lives.
            `
        }
    ])
</script>
<style>
    
</style>