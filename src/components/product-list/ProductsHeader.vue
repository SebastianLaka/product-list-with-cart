<script setup>
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'
const category = useCategoryStore()
onMounted(() => {
  category.setCategory('Desserts')
})
</script>

<template>
  <header class="product-header">
    <slot :productsHeader="category.productCategory"></slot>
  </header>
</template>

<style lang="scss" scoped>
@media (min-width: 375px){
  .product-header{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 1em .25em;
  }
}
</style>
