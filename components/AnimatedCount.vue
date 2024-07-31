<template>
    <div>{{ formattedNumber }}+</div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';

const props = defineProps({
    number: {
        type: Number,
        default: 0
    }
});

const displayNumber = ref(0);
let interval = null;

const startCounting = () => {
    clearInterval(interval);

    if (props.number === displayNumber.value) {
        return;
    }

    interval = window.setInterval(() => {
        if (displayNumber.value !== props.number) {
            let change = (props.number - displayNumber.value) / 10;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);
            displayNumber.value += change;
        }
    }, 45);
};

onMounted(() => {
    document.getElementById("count").onscroll = function () { startCounting() };
    startCounting();
});

watch(() => props.number, startCounting);

const formattedNumber = computed(() => {
    return displayNumber.value.toLocaleString();
});
</script>