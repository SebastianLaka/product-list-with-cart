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

<style lang="scss" scoped>
@use '../../assets/sass/breakpoints.scss' as *;
@use '../../assets/sass/wrapper.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .product-header {
    padding: 1em 0.25em;
    @include position-element($position: fixed, $left: 0, $right: 0, $top: 0, $z-index: 100);
  }
}
</style>
