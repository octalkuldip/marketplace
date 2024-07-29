<template>
    <div class="flex justify-center">
        <div class="lg:grid lg:grid-cols-4 grid-cols-1">
            <div class="bg-[#FFFFFF] max-w-[371px] w-full  p-4" style="box-shadow: 0px 4px 11px 0px #00000024;">
                <div>
                    <div class="flex">
                        <div class="relative">
                            <img src="/public/images/offer01.png" alt="" class="">
                            <div class="absolute -top-4 -left-1">
                                <div class="relative flex justify-center items-center">
                                    <img src="/public/images/Rate-Discound.png" alt="offer-image">
                                    <p class="text-white text-[12px] absolute left-2 top-0.5">14% <span>OFF</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#FFE6B2] max-w-[60px] w-full">
                            <div class="flex flex-col h-full pt-3 justify-around  items-center">
                                <div class="flex flex-col -rotate-90">
                                    <p class="text-[#621E06] text-center text-nowrap">Barnyard Millet</p>
                                    <p class="text-[#DA5323] text-center">bestseller</p>
                                </div>
                                <div>
                                    <button
                                        class="bg-[#D6A760] -rotate-90 max-w-[75px] font-semibold w-full px-2 h-[36px]  lg:text-xl leading-7 text-white">1
                                        Kg</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 w-full p-1">
                        <p class="text-[#621E06] text-lg font-normal">Fresh Green Capsicum - Crisp and Flavorful</p>
                        <div class="flex items-center justify-between">
                            <p class="text-lg font-bold cursor-pointer">₹150 <span
                                    class="text-[10px] font-normal cursor-pointer strok-price-line relative text-[#7D7B7B]">₹220</span>
                            </p>
                            <div class="flex justify-between gap-3 cursor-pointer">
                                <div class="flex">
                                    <a href="#"><img src="../public/SVG/offer-star.svg" alt="" class="bg-transparent"></a>
                                    <a href="#"><img src="../public/SVG/offer-star.svg" alt=""></a>
                                    <a href="#"><img src="../public/SVG/offer-star.svg" alt=""></a>
                                    <a href="#"><img src="../public/SVG/offer-star.svg" alt=""></a>
                                    <a href="#"><img src="../public/SVG/offer-half-start.svg" alt=""></a>
                                </div>
                                <div>
                                    <a href=""><img src="../public/SVG/offer-heart.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 text-center">
                            <NuxtLink
                                class="bg-[#9BC05B] border-2 cursor-pointer font-semibold hover:font-bold duration-200 text-white py-2 xl:px-16 px-4  rounded-[4px]">
                                Add to Card
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- contain -->
            <div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { StarIcon, HeartIcon } from '@heroicons/vue/24/solid'

</script>
<style scoped>
.strok-price-line::after{
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