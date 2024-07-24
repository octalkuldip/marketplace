<template>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between py-2">
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
        <div class="flex items-center w-full gap-6">
          <div class="flex items-center">
            <NuxtLink to="/">
              <img class="rounded-[50%] md:max-w-20 max-w-12 object-cover"
                src="https://png.pngtree.com/template/20191108/ourmid/pngtree-beauty-spa-logo-design-template-woman-silhouette-logo-template-image_328588.jpg"
                alt="Your Company" />
            </NuxtLink>
          </div>
          <div class="hidden sm:block">
            <div class="flex items-center w-full gap-4">
              <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                :class="[item.current ? 'bg-rose-950 hover:bg-white hover:-translate-y-1.5 border-2 duration-300 border-rose-950 hover:text-rose-950 text-white' : 'text-rose-950 hover:border-b-2 border-rose-950 hover:bg-gray-50', 'rounded-md px-3 py-1.5 text-base font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NuxtLink>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center gap-4 sm:static">
          <button type="button"
            class="relative rounded-full bg-gray-800 text-gray-400 focus:outline-none focus:ring-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
          </button>
          <a href="#">
            <img src="../public/cart.svg" alt="" class="max-w-[20px]">
          </a>
          <a href="#">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#501509" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17 6.99998C16.4067 4.69999 14.3267 3 11.84 3C9.35334 3 7.27334 4.69999 6.68 6.99998H3V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6.99998H17ZM15.6067 6.99998C15.06 5.44666 13.58 4.33333 11.84 4.33333C10.1 4.33333 8.62001 5.44666 8.07334 6.99998H15.6067ZM5 8.99998H19V19H5V8.99998Z"
                fill="#421107" />
            </svg>
          </a>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative">
            <div>
              <MenuButton class="relative flex rounded-full text-sm focus:outline-none ">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <svg fill="#421107" width="20" height="20" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"
                  id="memory-logout">
                  <path
                    d="M17 1V2H18V6H17V5H16V3H6V19H16V17H17V16H18V20H17V21H5V20H4V2H5V1H17M13 6H15V7H16V8H17V9H18V10H19V12H18V13H17V14H16V15H15V16H13V14H14V13H15V12H8V10H15V9H14V8H13V6Z" />
                </svg>
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
    </nav>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, ShoppingCartIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
</script>