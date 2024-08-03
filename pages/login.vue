<script setup>
import { useRouter } from 'vue-router';
import { loginSchema } from '../validation/validation';

const router = useRouter();
const form = ref({
  email: '',
  password: ''
});

const validationErrors = ref({
  email: '',
  password: ''
});

const handleSubmitForm = () => {
  const { error } = loginSchema.validate(form.value, { abortEarly: false });
  if (error) {
    error.details.forEach(err => {
      validationErrors.value[err.context.key] = err.message;
    });
  } else {
    validationErrors.value = { email: '', password: '' };
    router.push('/');
  }
};
const clearError = (field) => {
  validationErrors.value[field] = '';
};


definePageMeta({
  layout: "custom"
});
</script>


<template>
  <!-- Navbar section -->
  <Navbar />
  <!-- Login page -->
  <div class="px-4">
    <div class="max-w-[698px] mx-auto w-full lg:py-[50px] py-[30px]">
      <form @submit.prevent="handleSubmitForm">
        <div class="flex flex-col lg:gap-[30px] gap-[12px]">
          <div>
            <h2
              class="text-center lg:text-[45px] text-2xl lg:leading-[67px] lg:pb-0 pb-[3px] tracking-tight text-brown poppins-bold">
              Login
            </h2>
          </div>
          <div>
            <div>
              <input id="email" v-model="form.email" name="email" type="email" placeholder="Enter your email..."
                autocomplete="email" @input="clearError('email')" class="max-w-[698px] lg:placeholder:text-xl placeholder:text-[11px] lg:text-xl text-sm placeholder:font-normal 
                  poppins lg:px-[25px] py-[11px] px-[15px] lg:py-[15px] w-full rounded-md border-[1px] border-[#63463B] 
                shadow-sm ring-0 ring-inset  focus:outline-none ring-[#63463B] placeholder:text-brown 
                  text-brown placeholder:opacity-75 focus:ring-1 focus:ring-inset" />
            </div>
            <span v-if="validationErrors.email" class="text-red-600  lg:text-base text-sm mt-2">
              {{ validationErrors.email }}
            </span>
          </div>

          <div>
            <div>
              <input id="password" v-model="form.password" name="password" placeholder="Enter your password"
                type="password" @input="clearError('password')" autocomplete="current-password" class="max-w-[698px] lg:placeholder:text-xl placeholder:text-[11px] lg:text-xl text-sm placeholder:font-normal poppins 
                lg:px-[25px] py-[11px] px-[15px] lg:py-[15px] w-full rounded-md border-[1px] border-[#63463B] shadow-sm
                ring-0 ring-inset  focus:outline-none ring-[#63463B] placeholder:text-brown text-brown placeholder:opacity-75 
                focus:ring-1 focus:ring-inset" />
            </div>
            <span v-if="validationErrors.password" class="text-red-600 inline-block !w-full lg:text-base text-sm mt-2">
              {{ validationErrors.password }}
            </span>
            <div class="border-b border-[#DA5323] lg:mt-2.5 my-2 inline-block">
              <h2 class="py-[5px] text-[#DA5323]">
                <a href="#" class="lg:text-[17px] text-xs capitalize poppins">
                  forget your password
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div class="max-w-[153px] mx-auto w-full pt-[15px]">
          <button type="submit"
            class="w-full mx-auto text-center rounded-[1px] tracking-wider  bg-[#9BC05B] text-white px-[32px] lg:py-[12px] py-[9px] leading-[25px] text-[19px] helvetica font-semibold uppercase">Sign
            in</button>
        </div>
      </form>
      <NuxtLink to="/signup"
        class="lg:text-[17px] text-xs lg:max-w-[175px] max-w-[124px] w-full block text-center mx-auto p-[5px] text-[#DA5323] border-b  border-[#DA5323] lg:mt-2.5 my-2 capitalize poppins">
        Create
        an
        account
      </NuxtLink>
    </div>
  </div>
  <!-- Footer section -->
  <Footer />
</template>
