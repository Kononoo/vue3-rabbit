<script setup>

import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeProduct />
</template>

<style scoped>

</style>