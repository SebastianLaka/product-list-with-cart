<script setup>
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'
const category = useCategoryStore()
onMounted(() => {
  category.setCategory('Desserts')
})
</script>

<template>
  <header class="product-header wrapper">
    <slot :productsHeader="category.productCategory"></slot>
  </header>
</template>
