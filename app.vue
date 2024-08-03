<template>
  <div>
    <NuxtLayout>

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
</script>

<style>
.helvetica {
  font-family: 'Helvetica';
}

.helvetica-bold {
  font-family: 'Helvetica-Bold';
}

.poppins {
  font-family: 'Poppins';
}

.poppins-bold {
  font-family: 'Poppins-Bold';
}

.poppins-extraBold {
  font-family: 'Poppins-extraBold';
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  filter: grayscale(1);
}
</style>
