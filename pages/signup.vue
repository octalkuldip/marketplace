<template>
    <Navbar />
    <section class="px-[15px]">
        <div class="max-w-[698px] w-full mx-auto lg:py-[50px] py-[30px]">
            <h2 class="px-5 poppins-bold lg:text-[45px] text-[25px] lg:leading-[67px] text-brown text-center">
                Create account
            </h2>
            <form class="flex flex-col lg:gap-7 gap-3 lg:mt-[30px] mt-4">
                <div v-for="(field, index) in formFields" :key="index">
                    <div v-if="field.type === 'password'" class="relative">
                        <input :type="passwordFieldType" :name="field.name" :placeholder="field.placeholder"
                            v-model="form[field.name]" @input="clearError(field.name)"
                            class="w-full lg:py-[15px] py-[13px] lg:px-[25px] px-[15px] border border-[#63463B] focus:outline-none focus:ring-brown focus:ring-1 focus:ring-inset placeholder:text-brown placeholder:opacity-75 text-brown poppins font-semibold placeholder:font-normal rounded-[5px] lg:text-xl text-xs"
                            id="myInput" />
                        <button type="button" @click="togglePasswordVisibility"
                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <img v-if="passwordFieldType === 'password'" src="../public/svg/closeeye.svg" alt=""
                                class="w-full bg-transparent opacity-75" />
                            <img v-else src="../public/svg/faeye.svg" alt="" class="opacity-75 w-full bg-transparent" />
                        </button>
                    </div>
                    <div v-else>
                        <input :type="field.type" :name="field.name" :placeholder="field.placeholder"
                            v-model="form[field.name]" @input="clearError(field.name)"
                            class="w-full lg:py-[15px] py-[13px] lg:px-[25px] px-[15px] border border-[#63463B] focus:outline-none focus:ring-brown focus:ring-1 focus:ring-inset placeholder:text-brown placeholder:opacity-75 text-brown poppins font-semibold placeholder:font-normal rounded-[5px] lg:text-xl text-xs"
                            id="myInput" />
                    </div>
                    <span v-if="validationErrors[field.name]" class="text-red-600 lg:text-base text-sm mt-2">
                        {{ validationErrors[field.name] }}
                    </span>
                </div>
                <div class="lg:pt-0 pt-[3px]">
                    <button type="button" @click="handleSubmitForm"
                        class="w-full border border-lightgreen mx-auto block lg:py-[11px] py-[9px] px-[35px] max-w-[160px] bg-lightgreen uppercase text-white helvetica font-bold rounded-[1px] text-[19px]">
                        Sign Up
                    </button>
                </div>
            </form>
            <div
                class="p-[5px] border-b border-[#DA5323] mt-[10px] text-center lg:max-w-[217px] max-w-[156px] mx-auto w-full block">
                <NuxtLink to="/login" class="text-[#DA5323] lg:text-[17px] text-xs poppins capitalize">
                    Login with your account
                </NuxtLink>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginSchema } from '../validation/validation';

const router = useRouter();
const form = ref({
    name: '',
    phone: '',
    email: '',
    password: ''
});

const validationErrors = ref({
    name: '',
    phone: '',
    email: '',
    password: ''
});


const handleSubmitForm = () => {
    const { error } = loginSchema.validate(form.value, { abortEarly: false });
    if (error) {
        validationErrors.value = { name: '', phone: '', email: '', password: '' };
        error.details.forEach(err => {
            validationErrors.value[err.context.key] = err.message;
        });
    } else {
        validationErrors.value = { name: '', phone: '', email: '', password: '' };
        router.push('/login');
    }
};

const clearError = (field) => {
    validationErrors.value[field] = '';
};

const formFields = [
    { name: 'name', type: 'text', placeholder: 'Enter Your Name' },
    { name: 'phone', type: 'tel', placeholder: 'Enter Your Phone No.' },
    { name: 'email', type: 'email', placeholder: 'Enter Your Email...' },
    { name: 'password', type: 'password', placeholder: 'Enter Password' },
];

const passwordFieldType = ref('password');

const togglePasswordVisibility = () => {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
};

definePageMeta({
    layout: "custom"
});
</script>
