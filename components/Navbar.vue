<template>
  <Disclosure as="nav" class="bg-white z-10 shadow-lg sticky top-0" v-slot="{ open }">
    <nav class="mx-auto max-w-7xl">
      <div class="relative flex items-center justify-between p-3">
        <div class="flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-start w-full">
          <div class="flex items-center">
            <!-- <NuxtLink to="/">
              <img class="rounded-[50%] md:max-w-20 max-w-12 object-cover"
                src="https://png.pngtree.com/template/20191108/ourmid/pngtree-beauty-spa-logo-design-template-woman-silhouette-logo-template-image_328588.jpg"
                alt="Your Company" />
            </NuxtLink> -->
          </div>
          <div class="hidden sm:block">
            <div class="flex items-center w-full">
              <div class="relative" @mouseenter="toggleDropdown(true)" @mouseleave="toggleDropdown(false)">
                <NuxtLink :to="navigation[0].href" class="rounded-md px-3 py-1.5 text-sm font-medium text-yellow-600 uppercase">
                  {{ navigation[0].name }}
                  <ChevronDownIcon class="inline-block ml-1 h-4 w-4 text-yellow-600" />
                </NuxtLink>
                <div v-if="dropdownOpen"  class="absolute  top-full pt-4 w-48 bg-white shadow-lg rounded-md">
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
                :class="[item.current ? 'uppercase text-yellow-600 duration-300 hover:text-yellow-500 text-sm' : 'text-yellow-600 text-sm duration-300 hover:text-yellow-500 uppercase', 'rounded-md px-3 py-1.5 text-base font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NuxtLink>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center gap-4 sm:static">
          <!-- search input -->
          <div class="relative flex items-center">
            <input
              class="border-2 md:block hidden border-yellow-600 py-1 px-4  lg:w-auto w-full  rounded-full focus:outline-none placeholder:text-gray-500 font-normal"
              type="text"
              placeholder="Search Products..."
              v-model.lazy="searchInput"
            />
            <svg
              class="absolute md:block hidden right-2 fill-current text-yellow-600"
              fill="none"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m22.241 24-7.414-7.414c-1.559 1.169-3.523 1.875-5.652 1.885h-.002c-.032 0-.07.001-.108.001-5.006 0-9.065-4.058-9.065-9.065 0-.038 0-.076.001-.114v.006c0-5.135 4.163-9.298 9.298-9.298s9.298 4.163 9.298 9.298c-.031 2.129-.733 4.088-1.904 5.682l.019-.027 7.414 7.414zm-12.942-21.487c-3.72.016-6.73 3.035-6.73 6.758 0 3.732 3.025 6.758 6.758 6.758s6.758-3.025 6.758-6.758c0-1.866-.756-3.555-1.979-4.778-1.223-1.223-2.912-1.979-4.778-1.979-.01 0-.02 0-.03 0h.002z"
              />
            </svg>
          </div>

          <div class="flex lg:gap-2 gap-1">
            <a href="#" @click="openSidebarShopindPenel">
              <ShoppingCartIcon class="w-8 h-8 border-2 border-yellow-600 rounded-full p-0.5 text-yellow-600" />
            </a>
            <a href="#">
              <HeartIcon class="w-8 h-8 border-2 border-yellow-600 rounded-full p-0.5 text-yellow-600" />
            </a>
  
            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <div>
                <MenuButton class="relative flex rounded-full text-sm focus:outline-none ">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <div>
                      <UserIcon class="w-8 h-8 border-2 border-yellow-600 rounded-full p-0.5 text-yellow-600" />
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
          </div>
        </div>
      </div>
    </nav>

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
const openSidebarShopindPenel = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
const handleAddToCart = (product) => {
  console.log(product ,'this emit log')
}
</script>