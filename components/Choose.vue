<script setup>
// const chooses = ref{[
//     {
//         img: 'images/choose-r-01.png',
//     }
// ]}

const chooses = [
    {
        img: 'images/choose-r-01.png',
        title: '100% Natural & Organic',
        details: 'Ensuring purity and quality, our organic products are authentically sourced for your health and well-being.'
    },
    {
        img: 'images/choose-r-01.png',
        title: 'Pesticides Free',
        details: 'Ensuring purity and quality, our organic products are authentically sourced for your health and well-being.'
    },
    {
        img: 'images/choose-r-01.png',
        title: 'Chemical Free',
        details: 'Ensuring purity and quality, our organic products are authentically sourced for your health and well-being.'
    },
    {
        img: 'images/choose-r-01.png',
        title: 'Farm To Home',
        details: 'Ensuring purity and quality, our organic products are authentically sourced for your health and well-being.'
    },
]
</script>
<style>
.custom-shadow-md {
    box-shadow: 0px 4px 20px 0px #0000000F !important;
}
</style>

<template>
    <section class="bg-[#F4F6F6]">
        <h1 class="lg:text-[45px] text-2xl lg:text-center text-start px-4 w-full   font-bold text-[#621E06] lg:absolute lg:py-14 py-2">Why Choose
            eDehati
        </h1>
        <div class="lg:flex flex-col justify-center lg:items-center py-7 px-3.5">
            <div class="w-full lg:block hidden">
                <img src="../public/images/choose01.png" alt="" class="h-full lg:max-w-[1287px] lg:w-full">
            </div>
            <div class="lg:max-w-[640px] lg:absolute lg:w-full lg:right-[12rem] right-0 space-y-4">
                <div v-for="(choose,index) in chooses" :key="index">
                    <div  class="py-2.5 px-4 flex flex-col gap-1.5" :class="index % 2 === 0 ? 'custom-shadow-md' : '' ">
                        <div class="flex items-center gap-2.5">
                            <img :src="choose.img" alt="" class="md:max-w-[60px] max-w-[37px]">
                            <h2 class="font-bold lg:text-3xl md:text-2xl text-sm text-[#621E06]"> {{ choose.title }} </h2>
                        </div>
                        <div>
                            <p class="lg:text-lg md:text-base text-xs">{{ choose.details }} </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
