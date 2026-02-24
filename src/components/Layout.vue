<script setup>
import ProductList from './product-list/ProductList.vue'
</script>
<template>
  <main class="main-layout">
    <ProductList /> 
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/sass/breakpoints.scss' as *;
.main-layout{
  position: relative;
  padding: 1em .25em;
}
</style>
