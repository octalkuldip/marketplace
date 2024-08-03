<script setup>

const offers = [
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
];

const FoodDescs = [
    {
        img: 'images/wheat-2.png',
        img1: 'images/rice3.png',
        img2: 'images/women2.png',
        title: 'Himalayan Heritage Crafts Handcrafted Treasures for Daily Use',
        description: 'Him-ira crafts a diverse range of handmade products deeply rooted in Himalayan culture. From everyday necessities to unique artisanal pieces, their creations blend traditional craftsmanship with contemporary utility, reflecting the rich cultural heritage of the region in every item.',
        description1: 'Him-ira offers handcrafted products blending Himalayan culture with modern utility, reflecting rich heritage.',
        lastTitle: ' “ Celebrating Tradition Through Artisanal Excellence Handcrafted Himalayan Creations for Everyday Life “',
    }
];

const imageMaxWidth = {
    lg: "lg:max-w-[134px]",
    sm: "sm:max-w-[130px]",
    base: "max-w-[62px]",

};
const brightness = ref('brightness-50');
</script>

<template>
    <div>
        <Hero />
        <div class="mx-auto max-w-[92rem] w-full px-4 brightness-50">
            <div class="lg:pt-[50px] py-[30px] lg:pb-[60px] ">
                <div class="flex flex-col gap-2 mb-[40px]">
                    <h2 class="font-bold lg:text-5xl poppins-extraBold text-2xl text-[rgb(98,30,6)]">Explore the Him-Ira
                        Collection</h2>
                    <p class="text-xl poppins-bold">Timeless Beauty</p>
                </div>
                <div
                    class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-3  lg:gap-[57px] gap-x-[10px] gap-y-6">
                    <OffersCard v-for="(offer, index) in offers" :key="index" :offer="offer" />
                </div>
                <div class="text-center">
                    <button class="mt-[40px] py-[5px] px-5 bg-[#809B51] text-white text-xl font-semibold poppins">
                        Check All Bestseller
                    </button>
                </div>
            </div>
        </div>
        <FoodDescription v-for="(FoodDesc, index) in FoodDescs" :key="index" :FoodDesc="FoodDesc"
            :maxWidth="imageMaxWidth" :brightness="brightness" />
    </div>
</template>

<style scoped></style>