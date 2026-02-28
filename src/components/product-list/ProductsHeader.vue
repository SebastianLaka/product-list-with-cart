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
@use '../../assets/sass/breakpoints.scss' as *;
@media (min-width: $mobile-view){
  .product-header{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 1em .25em;
    z-index: 100;
  }
}
</style>
