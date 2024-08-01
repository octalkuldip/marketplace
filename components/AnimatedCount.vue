<template>
    <div>{{ formattedNumber }}+</div>
</template>

<script setup>
import { ref, watch, onMounted, computed,onBeforeUnmount  } from 'vue';

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
            let change = (props.number - displayNumber.value) / 100;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);
            displayNumber.value += change;
        }
    }, 15);
};

onMounted(() => {
  const target = document.querySelector('#count');
  if (target) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      });
    });

    observer.observe(target);
    onBeforeUnmount(() => {
      observer.disconnect();
    });
  }
});

watch(() => props.number, startCounting);

const formattedNumber = computed(() => {
    return displayNumber.value.toLocaleString();
});
</script>