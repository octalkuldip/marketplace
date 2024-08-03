<script setup>

</script>
<style></style>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="!sticky top-0 z-10">
      <AnnouncementBar />
      <Navbar />
    </div>
    <FoodCategories />
    <slot />
    <Footer class="mt-auto"/>
  </div>
</template>
