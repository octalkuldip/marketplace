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
        img: 'images/wheat.png',
        img1: 'images/windmill.png',
        img2: 'images/women.png',
        title: 'Natural foods for your holistic wellness,from organically grown crops.',
        description: 'For thousands of years we humans thrived upon natural foods. We ate foods that had been naturally cultivated and offered by Mother Nature herself. Ever since the inception of industrialization, the way the crops were cultivated has changed. As a result, the quality of our food has become a great concern. eDehati comes forward to address this concern by offering you authentic natural food products grown by certified organic farming practices. We change the notion of commercial farming through sustainable farming practices to not only preserve your health but also the environment. After all, the earth is our only home.',
        description1: 'eDehati ensures the highest quality natural foods by adhering to certified organic farming practices. Choose eDehati for authentic, sustainable, and organic food products that prioritize your health and the environment',
        lastTitle: '“The integrity and credibility we have gained in the market is thetestimony to the authenticity of our products.”',
    }
];

const imageMaxWidth2 = {
    lg: "370px",
    sm: "340px",
    base: "218px"
};
</script>

<template>
    <Hero />
    <div class="mx-auto max-w-[92rem] w-full px-4">
        <div class="lg:pt-[50px] py-[30px] lg:pb-[60px]">
            <div class="flex flex-col gap-2 mb-[40px]">
                <h2 class="font-bold lg:text-5xl poppins-extraBold text-2xl text-[#621E06]">Farm to Home Natural
                    Transformation</h2>
                <p class="text-xl poppins-bold">Offers You Can't Refuse</p>
            </div>
            <ProductCard />
        </div>
    </div>
    <ProductFeatured />
    <div class="mx-auto max-w-[92rem] w-full px-4">
        <div class="lg:pt-[50px] py-[30px] lg:pb-[60px] ">
            <div class="flex flex-col gap-2 mb-[40px]">
                <h2 class="font-bold lg:text-5xl poppins-extraBold text-2xl text-[#621E06]">Fresh Vegetables for Your
                    Table</h2>
                <p class="text-xl poppins-bold">Offers You Can't Refuse</p>
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
        :maxWidth="imageMaxWidth2" />

    <div class="mx-auto max-w-[92rem] w-full px-4">
        <div class="lg:pt-[50px] py-[30px] lg:pb-[60px] ">
            <div class="flex flex-col gap-2 mb-[40px]">
                <h2 class="font-bold lg:text-5xl poppins-extraBold text-2xl text-[rgb(98,30,6)]">eDehati Top Picks</h2>
                <p class="text-xl poppins-bold">Offers You Can't Refuse</p>
            </div>
            <div
                class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-3  lg:gap-[57px] gap-x-[10px] gap-y-6">
                <OffersCard v-for="(offer, index) in offers" :key="index" :offer="offer" />
            </div>
            <div class="text-center">
                <button class="mt-[40px] py-[5px]  px-5 bg-[#809B51] text-white text-xl font-semibold poppins">
                    Check All Bestseller
                </button>
            </div>
        </div>
    </div>
    <Choose />
    <FarmerPromoting />
    <FollowUs />
    <OurCustomor />
</template>

