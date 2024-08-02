<script setup>
import { useRouter } from 'vue-router'
const formError = ref(false);
const router = useRouter();
  const form = ref({
    name:'',
    email:''
  })
  const handleSubmitForm = () => {
    if(form.value.email && form.value.password){
      router.push('/')
    }else{
      formError.value = true;
      setTimeout(() => {
        formError.value = false
      },3000)
    }
  }
  definePageMeta({
    layout:"custom"
  });
</script>
<style>
    
</style>

<template>
    <div class="flex h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm cursor-pointer">
        <img class="rounded-[50%] md:max-w-32 mx-auto max-w-12 object-cover"
                src="https://png.pngtree.com/template/20191108/ourmid/pngtree-beauty-spa-logo-design-template-woman-silhouette-logo-template-image_328588.jpg"
                alt="Your Company" />
        <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">Sign in to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="handleSubmitForm()" class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required="" class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" />
            </div>
            <span v-if="formError" class="text-red-600 font-medium text-sm mt-2">
              email field required
            </span>
          </div>
          
          <div>
            <div class="flex items-center justify-between">
              <label for="password"  class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-rose-600 hover:text-rose-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password" required="" class="block p-2 w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" />
            </div>
            <span v-if="formError" class="text-red-600 font-medium text-sm mt-2">
              password field required
            </span>
          </div>
  
          <div>
              <button @click="handleSubmitForm()" type="submit" class="flex w-full justify-center rounded-md bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm">Login</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          {{ ' ' }}
          <NuxtLink to="/signup">
            <a href="#" class="font-semibold leading-6 text-rose-600 hover:text-rose-500">Sign? your accout</a>
          </NuxtLink>
        </p>
      </div>
    </div>
  </template>
  
