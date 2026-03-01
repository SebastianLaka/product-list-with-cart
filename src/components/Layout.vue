<script setup>
import ProductList from './product-list/ProductList.vue'
</script>
<template>
  <main class="main-layout wrapper">
    <ProductList /> 
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/sass/breakpoints.scss' as *;
@use "../assets/sass/wrapper.scss" as *;
.main-layout{
  position: relative;
  padding: 1em .25em;
}
@media(min-width: 1200px){
  .main-layout{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
