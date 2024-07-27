<template>
  <Disclosure as="nav" class="bg-white z-10 shadow-lg sticky top-0" v-slot="{ open }">
<div class="flex justify-between items-center px-4 py-2">
    <nav class="mx-auto max-w-[90rem] w-full">
      <div class="relative flex items-center justify-around">
        <div class="flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <div v-if="!open">
              <img src="../public/SVG/bars.svg" alt="">
            </div>
            <XMarkIcon v-else class="block h-6 w-6 text-[#DA5323]" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-start w-full">
          <div class="flex items-center justify-between w-full">
            <div class="hidden sm:block">
              <div class="flex items-center w-full">
                <div class="relative" @mouseenter="toggleDropdown(true)" @mouseleave="toggleDropdown(false)">
                  <NuxtLink :to="navigation[0].href" class="rounded-md px-3 py-1.5 text-sm font-normal text-[#A8370E] uppercase">
                    {{ navigation[0].name }}
                    <ChevronDownIcon class="inline-block ml-1 h-4 w-4 text-[#A8370E]" />
                  </NuxtLink>
                  <div v-if="dropdownOpen"  class="absolute  mt-1 w-48 bg-white shadow-lg rounded-md">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50">Submenu Item 1</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50">Submenu Item 2</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50">Submenu Item 3</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50">Submenu Item 4</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50">Submenu Item 5</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50">Submenu Item 6</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50">Submenu Item 7</a>
                  </div>
                </div>
                <NuxtLink v-for="(item, index) in navigation.slice(1)" :key="item.name" :to="item.href"
                  :class="[item.current ? 'uppercase text-[#A8370E] duration-300 hover:text-[#A8370E] text-sm' : 'text-[#A8370E] text-sm duration-300 hover:text-[#A8370E] uppercase', 'rounded-md px-3 py-1.5 text-base font-normal']"
                  :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NuxtLink>
              </div>
            </div>
            <div>
              <img src="../public/SVG/Header.svg" alt="" class="lg:w-full w-[91px]">
            </div>
            <div class="flex gap-9">
              <!-- search input -->
              <div class="relative flex items-center">
               <input
                 class="border-2 lg:block hidden border-[#DA5323] py-1.5 px-4   rounded-full focus:outline-none placeholder:text-[#787574] font-[300]"
                 type="text"
                 placeholder="Search Products..."
                 v-model.lazy="searchInput"
               />
              <div class="absolute md:block hidden right-2 fill-current text-[#A8370F]">
                <img src="../public/SVG/Header-search.svg" alt="">
              </div>
             </div>
       
             <div class="flex items-center lg:gap-4 gap-1">
               <a href="#" @click="openSidebarShopindPenel" class="relative flex">
                <img src="../public/SVG/User.svg" alt="" class="lg:w-[41px] w-[25px]">
               </a>
               <a href="#">
                <img src="../public/SVG/Heart.svg" alt="" class="lg:w-[41px] w-[25px] lg:block hidden">
               </a>
       
               <!-- Profile dropdown -->
               <Menu as="div" class="relative">
                 <div>
                   <MenuButton class="relative flex rounded-full text-sm focus:outline-none ">
                     <span class="absolute -inset-1.5" />
                     <span class="sr-only">Open user menu</span>
                     <div>
                      <img src="../public/SVG/shopping.svg" alt="" class="lg:w-[41px] w-[25px]">
                     </div>
                   </MenuButton>
                 </div>
                 <transition enter-active-class="transition ease-out duration-100"
                   enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                   leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                   leave-to-class="transform opacity-0 scale-95">
                   <MenuItems
                     class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
               <div>
           </div>
             </div>
           </div>
          </div>

        </div>
        <!-- <div class="absolute inset-y-0 right-0 flex items-center gap-4 sm:static">
        </div> -->
      </div>
    </nav>
    <div class="">
      <img src="../public/SVG/header-logo.svg" alt="" class="lg:max-w-[77px] max-w-[48px] w-full lg:mr-[46px]">

    </div>
  
</div>
    

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>

    <!-- Sidebar -->
    <div v-if="isSidebarOpen" class="fixed inset-0 z-50 flex justify-end">
      <div class="fixed inset-0 bg-black opacity-50" @click="openSidebarShopindPenel"></div>
      <div class="relative bg-white w-80">
        <!-- Sidebar content goes here -->
        <button @click="openSidebarShopindPenel" class="absolute top-0 right-0 m-4">
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <p class="p-4 font-semibold">Cart Drawer</p>
        <ShoppingCart @addToCart="handleAddToCart" />
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, ShoppingCartIcon, ShoppingBagIcon,ChevronDownIcon, XMarkIcon, UserIcon,HeartIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Brand', href: '/dashboard', current: true },
  { name: 'Shop', href: '#', current: false },
  { name: 'About Edehati', href: '#', current: false },
  { name: 'Our Blogs', href: '#', current: false },
]

const isSidebarOpen = ref(false);
const dropdownOpen = ref(false);
const toggleDropdown = (state) => {
  dropdownOpen.value = state
}
const searchInput  = ref('');
const count  = ref(0);
const openSidebarShopindPenel = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
const handleAddToCart = (product) => {
  console.log(product ,'this emit log')
}
</script>