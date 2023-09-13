<script setup>
  import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
  import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
  import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
  import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
  import {useCategoryStore} from "@/stores/category";
  import {onMounted} from "vue";

  // 触发获取导航列表数据
  const categoryStore = useCategoryStore()
  onMounted(() => {categoryStore.getCategory()})
</script>


<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<style scoped>

</style>