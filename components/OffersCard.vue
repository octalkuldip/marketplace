<script setup>
import { StarIcon, HeartIcon } from '@heroicons/vue/24/solid'

const offers = ref([
    {
        img: 'images/offer01.png',
        offer_img: 'images/Rate-Discound.png',
        offer_discount: '14%',
        offer_title: 'Barnyard Millet',
        offer_sub_title: 'bestseller',
        offer_discription: 'Fresh Green Capsicum - Crisp and Flavorful',
        offerPrice: '150',
        offerDiscountPrice: '220',
    },
    {
        img: 'images/offer02.png',
        offer_img: 'images/Rate-Discound.png',
        offer_discount: '14%',
        offer_title: 'Barnyard Millet',
        offer_sub_title: 'bestseller',
        offer_discription: 'Fresh Organic Arbi (Taro Root) - Nutrient-Rich Delight',
        offerPrice: '120',
        offerDiscountPrice: '220',
    },
    {
        img: 'images/offer03.png',
        offer_img: 'images/Rate-Discound.png',
        offer_discount: '14%',
        offer_title: 'Barnyard Millet',
        offer_sub_title: 'bestseller',
        offer_discription: 'Fresh Green Peas Naturally Delicious and Nutritious',
        offerPrice: '130',
        offerDiscountPrice: '220',
    },
    {
        img: 'images/offer04.png',
        offer_img: 'images/Rate-Discound.png',
        offer_discount: '14%',
        offer_title: 'Barnyard Millet',
        offer_sub_title: 'bestseller',
        offer_discription: 'Fresh Kiwi Box - 800gm Premium Quality',
        offerPrice: '140',
        offerDiscountPrice: '220',
    },
])

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
</style>

<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2">
        <div v-for="offer in offers" :key="offer" class="bg-[#FFFFFF] max-w-[317px] w-full  p-4"
            style="box-shadow: 0px 4px 11px 0px #00000024;">
            <div>
                <div class="flex">
                    <div class="relative">
                        <img :src="offer.img" alt="" class="">
                        <div class="absolute -top-4 -left-1">
                            <div class="relative flex justify-center items-center">
                                <img :src="offer.offer_img" alt="offer-image">
                                <p class="text-white text-[12px] absolute left-2 top-0.5"> {{ offer.offer_discount
                                    }} <span>OFF</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#FFE6B2] max-w-[60px] w-full">
                        <div class="flex flex-col h-full pt-3 justify-around  items-center">
                            <div class="flex flex-col -rotate-90">
                                <p class="text-[#621E06] text-center text-nowrap"> {{ offer.offer_title }} </p>
                                <p class="text-[#DA5323] text-center"> {{ offer.offer_sub_title }} </p>
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
                    <p class="text-[#621E06] text-lg font-normal"> {{ offer.offer_discription }} </p>
                    <div class="flex items-center justify-between">
                        <p class="text-lg font-bold cursor-pointer">₹ {{ offer.offerPrice }} <span
                                class="text-[10px] font-normal cursor-pointer strok-price-line relative text-[#7D7B7B]">₹{{ offer.offerDiscountPrice }}</span>
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
                                <a href="#"><img src="../public/SVG/offer-heart.svg" alt=""></a>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 flex xl:flex-row lg:flex-col md:flex-col flex-col gap-5">
                        <button
                            class="bg-[#9BC05B] border-2 uppercase cursor-pointer font-semibold text-white max-w-[135px] w-full py-1 rounded text-sm">
                            Add to Card
                        </button>
                        <button
                            class="bg-[#9BC05B] border-2 cursor-pointer font-semibold text-white max-w-[135px] w-full py-1 rounded text-sm">
                            QUICK VIEW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>