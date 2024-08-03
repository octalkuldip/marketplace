<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, XMarkIcon, } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Brand', href: '#', current: true },
  { name: 'Shop', href: '#', current: false },
  { name: 'About Edehati', href: '/about', current: false },
  { name: 'Our Blogs', href: '#', current: false },
]
const megamenuIcons = [
  { image: 'menu-logo.png', text: 'Him-Ira', link: '/himira' },
  { image: 'menu-logo.png', text: 'Him-Ira', link: '#' }
];

const megamenuSliders = [
  { image: 'menu-slide1.png', link: '#' },
  { image: 'menu-slide1.png', link: '#' },
  { image: 'menu-slide1.png', link: '#' }

];

const isSidebarOpen = ref(false);
const dropdownOpen = ref(false);
const searchInput = ref('');
const dropdownContainer = ref(null);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}
const closeDropdown = () => {
  dropdownOpen.value = false;
};
const handleClickOutside = (event) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target)) {
    dropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
const openSidebarShopindPenel = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
const handleAddToCart = (product) => {
  console.log(product, 'this emit log')
}
</script>

<template>
  <Disclosure as="nav" class="bg-white z-10 shadow-lg sticky top-0" v-slot="{ open }">
    <div class="flex items-center relative px-4 lg:gap-6 gap-2 lg:py-0 py-1">
      <nav class="mx-auto max-w-[90rem] w-full">
        <div class="flex justify-between items-center">
          <div class="items-center lg:hidden flex">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white max-w-[45px] w-full">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <div v-if="!open">
                <img src="../public/svg/bars.svg" alt="">
              </div>
              <XMarkIcon v-else class="block h-6 w-6 text-[#DA5323]" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="lg:block hidden">
            <div class="flex items-start gap-[10px]">
              <div class="static" ref="dropdownContainer">
                <NuxtLink :to="navigation[0].href" @click="toggleDropdown"
                  class="rounded-md flex items-center gap-1 px-[9px] pt-[4px] poppins pb-[7px] text-sm font-normal text-[#A8370E] uppercase">
                  {{ navigation[0].name }}
                  <ChevronDownIcon class="inline-block h-4 w-4 text-[#A8370E]" />
                </NuxtLink>
                <div v-if="dropdownOpen" class="absolute left-0 top-full -mt-[1px] w-full bg-white"
                  style="box-shadow: 0px 5px 7px 0px #0000001F;">
                  <div class="max-w-[92rem] mx-auto px-4">
                    <div class="lg:py-[50px] flex justify-between">
                      <div class="flex max-w-[263px] w-full justify-between h-full">
                        <div class="flex flex-col gap-[10px]" v-for="megamenuIcon in megamenuIcons"
                          :key="megamenuIcon.text">
                          <NuxtLink :to="megamenuIcon.link" @click="closeDropdown">
                            <img :src="megamenuIcon.image" alt="img"
                              class="w-full max-w-[60px] mx-auto hover:scale-110 duration-200">
                            <span class="poppins text-[22px]">{{ megamenuIcon.text }}</span>
                          </NuxtLink>
                        </div>
                      </div>
                      <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
                        :effect="'creative'" :autoplay="{ delay: 3000, disableOnInteraction: false }"
                        :creative-effect="{ prev: { shadow: true, translate: ['-100%', 0, -1] }, next: { translate: ['100%', 0, 0] } }"
                        class="max-w-[250px] !m-0">
                        <SwiperSlide v-for="megamenuSlider in megamenuSliders" :key="megamenuSlider.image"
                          class="ease-linear">
                          <a href="#" @click="closeDropdown">
                            <img :src="megamenuSlider.image" alt="img" class="w-full max-w-[250px]">
                          </a>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              <NuxtLink v-for="(item, index) in navigation.slice(1)" :key="item.name" :to="item.href"
                :class="[item.current ? 'uppercase text-[#A8370E] duration-300 hover:text-[#A8370E] text-sm' : 'text-[#A8370E] text-sm duration-300 hover:text-[#A8370E] uppercase', 'rounded-md px-[9px] poppins pt-[4px] pb-[7px] text-base font-normal']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="w-full lg:max-w-[120px] sm:max-w-[91px] max-w-[85px]">
            <NuxtLink to="/">
              <img src="../public/svg/Header.svg" alt="" class="">
            </NuxtLink>
          </div>
          <div class="flex gap-9 justify-end search-w-icon max-w-[538px] lg:w-full">
            <!-- search input -->
            <div class="lg:block hidden w-full">
              <div
                class="flex items-center justify-between gap-2 max-w-[342px] p-3 border-2 rounded-full  border-[#DA5323] ">
                <input
                  class="border-0 w-full focus:outline-none placeholder:text-[#787574] poppins font-normal placeholder:opacity-70 tracking-wide	"
                  type="text" placeholder="Search Products..." v-model.lazy="searchInput" />
                <button class="md:block hidden right-2 fill-current text-[#A8370F] max-w-[22px] w-full">
                  <img src="../public/svg/Header-search.svg" alt="">
                </button>
              </div>
            </div>
            <div class="flex items-center justify-end max-w-[155px] lg:gap-4 sm:gap-1.5 gap-1 w-full">
              <Menu as="div" class="relative lg:h-[41px] sm:h-[30px] h-[25px]">
                <MenuButton>
                  <img src="../public/svg/User.svg" alt="" class="w-full lg:max-w-[41px] sm:max-w-[30px] max-w-[25px]">
                </MenuButton>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute -right-10 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                      Profile</a>
                    </MenuItem>
                    <NuxtLink to="/login">
                      <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign
                        out</a>
                      </MenuItem>
                    </NuxtLink>
                  </MenuItems>
                </transition>
              </Menu>
              <a href="#">
                <img src="../public/svg/Heart.svg" alt=""
                  class="lg:block hidden w-full lg:max-w-[41px] sm:max-w-[30px] max-w-[25px]">
              </a>
              <!-- Profile dropdown -->
              <div class="relative flex rounded-full text-sm focus:outline-none " @click="openSidebarShopindPenel">
                <span class="absolute" />
                <span class="sr-only">Open user menu</span>
                <a href="#">
                  <img src="../public/svg/shopping.svg" alt=""
                    class="w-full lg:max-w-[41px] sm:max-w-[30px] max-w-[25px]">
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="block header-main-logo">
        <a href="#">
          <img src="../public/svg/header-logo.svg" alt="" class="lg:max-w-[77px] max-w-[48px] w-full lg:mr-[46px]">
        </a>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
    <div v-if="isSidebarOpen" class="fixed inset-0 z-50 flex justify-end">
      <div class="fixed inset-0 bg-black opacity-50" @click="openSidebarShopindPenel"></div>
      <div class="relative bg-white w-80">
        <button @click="openSidebarShopindPenel" class="absolute top-0 right-0 m-4">
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <p class="p-4 font-semibold">Cart Drawer</p>
        <ShoppingCart @addToCart="handleAddToCart" />
      </div>
    </div>
  </Disclosure>
</template>
<style scoped>
@media (max-width:1024px) {
  .header-main-logo {
    display: none;
  }

  .search-w-icon {
    max-width: 425px
  }
}

@media (max-width:768px) {
  .header-main-logo {
    display: block;
  }
}
</style>
