<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    offer: {
        type: Object,
        required: true,
    }
});
</script>

<style scoped>
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

.quick-view-button:hover .quick-view-text {
    opacity: 0;
}

.quick-view-button:hover .eye-icon {
    bottom: 6px;
}
</style>
<template>

    <div class="bg-[#FFFFFF] flex flex-col h-full w-full p-4 overflow-hidden"
        style="box-shadow: 0px 4px 11px 0px #00000024;">
        <div class="w-full relative">
            <img :src="offer.img" alt="" class="w-full lg:max-w-[276px] max-full  object-cover">
            <div
                class="absolute -rotate-90 top-full lg:left-[13.5rem] left-14rem transform origin-top-left  w-full max-full">
                <div class="bg-[#FFE6B2] py-[11px] px-[22px] flex flex-row-reverse gap-10 items-center">
                    <div>
                        <p class="text-brown helvetica font-semibold text-center text-nowrap">{{
                            offer.offer_title
                        }}</p>
                        <p class="text-[#DA5323] helvetica font-semibold text-center">{{
                            offer.offer_sub_title }}
                        </p>
                    </div>
                    <button class="bg-[#D6A760] w-full helvetica font-semibold py-1 px-3 lg:text-xl text-white mt-2">1
                        Kg</button>
                </div>
            </div>
            <div class="absolute -top-4 -left-1.5">
                <div class="flex justify-center items-center">
                    <img :src="offer.offer_img" alt="offer-image">
                    <p class="text-white helvetica text-[12px] absolute left-2.5 top-0.5">{{
                        offer.offer_discount }}
                        <span>OFF</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-3 w-full p-1">
            <p class="text-brown text-lg font-normal poppins">{{ offer.offer_discription }}</p>
            <div class="flex items-center justify-between">
                <p class="text-lg font-bold poppins-extraBold cursor-pointer">₹ {{ offer.offerPrice }}
                    <span
                        class="text-[10px] font-normal poppins cursor-pointer strok-price-line relative text-[#7D7B7B]">₹{{
                            offer.offerDiscountPrice }}</span>
                </p>
                <div class="flex justify-between gap-3 cursor-pointer">
                    <div class="flex">
                        <button><img src="../public/svg/offer-star.svg" alt="" class="bg-transparent"></button>
                        <button><img src="../public/svg/offer-star.svg" alt=""></button>
                        <button><img src="../public/svg/offer-star.svg" alt=""></button>
                        <button><img src="../public/svg/offer-star.svg" alt=""></button>
                        <button><img src="../public/svg/offer-half-start.svg" alt=""></button>
                    </div>
                    <div>
                        <button><img src="../public/svg/offer-heart.svg" alt=""></button>
                    </div>
                </div>
            </div>

        </div>
        <div class="flex mt gap-3 relative justify-center w-full items-center">
            <button
                class="bg-[#9BC05B] quick-view-button poppins-bold flex items-center justify-center uppercase cursor-pointer font-semibold text-white w-full py-2 px-[18px]  rounded text-sm">
                <span class="quick-view-text text-sm poppins transition-opacity duration-[.44s] ease-in-out">
                    Add to Cart</span>
                <img class="eye-icon absolute bottom-[-40px] transition-bottom duration-[.44s] ease-in-out max-w-[36px] w-full"
                    alt="Eye Icon" src="../public/svg/cart-btn.svg" />
            </button>
            <button
                class="w-full quick-view-button flex items-center justify-center bg-[#9BC05B] cursor-pointer font-semibold duration-200 text-white py-2 rounded">
                <span class="quick-view-text text-sm poppins transition-opacity duration-200 ease-in-out">QUICK
                    VIEW</span>
                <img class="eye-icon absolute bottom-[-40px] transition-bottom duration-300 ease-in-out max-w-[30px] w-full"
                    alt="Eye Icon" src="../public/svg/eye.svg" />
            </button>
        </div>
    </div>
</template>
