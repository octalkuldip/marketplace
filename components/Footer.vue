<script setup>
const links = [
    {
        icon: 'footer-svg/f-icon1.png',
        text: 'Processed Food',
        link: '#'
    },
    {
        icon: 'footer-svg/f-icon2.png',
        text: 'Millets, Grains & Atta',
        link: '#'
    },
    {
        icon: 'footer-svg/f-icon3.png',
        text: 'Dry Fruits & Honey',
        link: '#'
    },
    {
        icon: 'footer-svg/f-icon4.png',
        text: 'Fruits & Vegetables',
        link: '#'
    },
    {
        icon: 'footer-svg/f-icon5.png',
        text: 'Pulses',
        link: '#'
    }
];

const linkdups = [
    {
        icon: 'footer-svg/f-icon6.png',
        text: 'Spices',
        link: '#'
    },
    {
        icon: 'footer-svg/f-icon7.png',
        text: 'Herbal Care',
        link: '#'
    },
    {
        icon: 'footer-svg/f-icon8.png',
        text: 'sugar & jaggery',
        link: '#'
    },
    {
        icon: 'footer-svg/f-icon9.png',
        text: 'Pickle & Jam',
        link: '#'
    }
];
const policies = [
    {
        text: 'Privacy Policy',
        link: '#'
    },
    {
        text: 'Shipping Policy',
        link: '#'
    },
    {
        text: 'Refund Policy',
        link: '#'
    },
    {
        text: 'Terms of service',
        link: '#'
    }
];

const logos = [
    {
        src: 'svg/fssai.svg',
        link: '#'
    },
    {
        src: 'svg/fda.svg',
        link: '#'
    },
    {
        src: 'svg/haccp.svg',
        link: '#'
    },
    {
        src: 'svg/gmp.svg',
        link: '#'
    }
];
const socials = [
    {
        icon: 'footer-svg/facebook.svg',
        link: 'https://www.facebook.com'
    },
    {
        icon: 'footer-svg/instagram.svg',
        link: 'https://www.instagram.com'
    },
    {
        icon: 'footer-svg/youtube.svg',
        link: 'https://www.youtube.com'
    },
    {
        icon: 'footer-svg/twitter.svg',
        link: 'https://www.twitter.com'
    },
    {
        icon: 'footer-svg/linkedin.svg',
        link: 'https://www.linkedin.com'
    }
];
</script>
<style>
@media (max-width: 1024px) {
    .flexWrap {
        flex-wrap: wrap;
    }
}
</style>

<template>
    <footer>
        <div>
            <img src="../public/footer-img.png" alt="footer-img" class="w-full object-cover">
        </div>
        <section class="bg-brown -mt-[1px] text-white">
            <div class="max-w-[92rem] mx-auto px-5">
                <div class="pt-[20px] lg:pb-[50px] pb-[30px]">
                    <div class="flex flex-col gap-[13px]">
                        <div class="flex items-center gap-3 lg:flex-row sm:flex-col flex-col justify-between">
                            <a href="#" class="">
                                <img src="../public/footer-logo.png" alt="" class="lg:max-w-[250px] max-w-[125px] w-full">
                            </a>
                            <div class="flex items-center gap-[27px]">
                                <div v-for="logo in logos" :key="logo.alt">
                                    <a :href="logo.link">
                                        <img :src="logo.src" alt="logo" class="w-full lg:max-w-[88px] max-w-[55px]">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex lg:justify-start w-full justify-center lg:items-start items-center lg:flex-row flex-col lg:flex-nowrap flexWrap lg:gap-[68px] gap-3">
                            <div
                                class="pt-[55px] pb-[17px] flex-col gap-[15px] max-w-[389px] w-full lg:flex sm:hidden hidden">
                                <p class="poppins-bold text-xl">Corporate Office -
                                    <span class="poppins font-normal">Emerging Dehati, Kalka Shimla Rd, Boiluganj,
                                        Shimla, Boiluganj, Shimla ,
                                        Himachal Pradesh, 171005</span>
                                </p>
                                <div class="">
                                    <a href="mailto:edehatifpc@gmail.com"
                                        class="flex items-center gap-[15px] hover:underline">
                                        <img src="../public/svg/email-icon.svg" alt="" class="w-full max-w-[30px]">
                                        <span class="poppins-bold text-[21px]">edehatifpc@gmail.com</span>
                                    </a>
                                </div>
                                <div class="">
                                    <a href="#" class="flex items-center gap-[15px] hover:underline">
                                        <img src="../public/svg/tel-icon.svg" alt="" class="w-full max-w-[30px]">
                                        <span class="poppins-bold text-[21px]">7304303222</span>
                                    </a>
                                </div>
                            </div>
                            <div class="lg:block sm:hidden hidden max-w-[476px] w-full">
                                <div class="flex flex-col gap-[25px]">
                                    <h4 class="text-3xl poppins-bold">SHOP</h4>
                                    <div class="flex gap-[40px]">
                                        <ul class="poppins text-[19px] flex flex-col gap-[15px]">
                                            <li v-for="link in links" :key="link.text">
                                                <a :href="link.link"
                                                    class="flex items-center gap-[15px] hover:underline">
                                                    <img :src="link.icon" alt="icon" class="w-full max-w-[25px]">
                                                    <span>{{ link.text }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="poppins text-[19px] font-normal flex flex-col gap-[15px]">
                                            <li v-for="linkdup in linkdups" :key="linkdup.text">
                                                <a :href="linkdup.link"
                                                    class="flex items-center gap-[15px] hover:underline">
                                                    <img :src="linkdup.icon" alt="icon" class="w-full max-w-[25px]">
                                                    <span>{{ linkdup.text }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-[25px] lg:max-w-[163px] max-w-full w-full">
                                <h4 class="text-3xl poppins-bold lg:block sm:hidden hidden">POLICIES</h4>
                                <div class="flex gap-[40px]">
                                    <ul class="poppins lg:text-[19px] text-[15px] font-normal lg:flex lg:flex-col grid grid-cols-2 w-full gap-[15px]">
                                        <li v-for="policyItem in policies" :key="policyItem.text">
                                            <a :href="policyItem.link"
                                                class="flex items-center lg:justify-start justify-center gap-[15px] hover:underline">
                                                {{ policyItem.text }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lg:max-w-[207px] max-w-full items-center w-full flex flex-col lg:gap-[25px] gap-3">
                                <button
                                    class="bg-orange-600 w-full py-[6px] text-xl px-[42px] poppins-bold border border-orange-600  hover:bg-transparent hover:border-white duration-200 rounded-[4px]">
                                    Need Help ?
                                </button>
                                <div class="flex items-center gap-[10px]">
                                    <div v-for="social in socials" :key="social.link">
                                        <a :href="social.link">
                                            <img :src="social.icon" alt="social"
                                                class="w-full max-w-[33px] hover:-translate-y-1 duration-300 hover:fill-white">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p class="poppins-bold text-base text-center lg:hidden sm:block block">Corporate Office -
                                <span class="poppins font-normal">Emerging Dehati, Kalka Shimla Rd, Boiluganj,
                                    Shimla, Boiluganj, Shimla ,
                                    Himachal Pradesh, 171005</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>
