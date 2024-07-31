<script setup>

</script>
<style></style>

<template>
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
            <OffersCard />
            <div class="text-center">
                <button class="mt-[40px] py-[5px] px-5 bg-[#809B51] text-white text-xl font-semibold poppins">Check All
                    Bestseller</button>
            </div>
        </div>
    </div>
    <FoodDescription/>
    <FarmerPromoting/>
    <Footer />
</template>