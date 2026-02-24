<script setup>
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'
const category = useCategoryStore()
onMounted(() => {
  category.setCategory('Desserts') 
})
</script>

<template>
  <slot :productsHeader="category.productCategory"></slot>
</template>

<style lang="scss" scoped></style>
