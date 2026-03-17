<script setup>
import ProductList from './product-list/ProductList.vue'
import ProductCartMain from './product-cart/ProductCartMain.vue';
import SummaryPopup from './summary-popup/OrderSuccessModal.vue'
</script>
<template>
  <main class="main-layout wrapper">
    <ProductList /> 
    <ProductCartMain/>
    <SummaryPopup />
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/sass/breakpoints.scss' as *;
@use "../assets/sass/wrapper.scss" as *;
.main-layout{
  position: relative;
  padding: 1em .25em;
  min-height: 100svh;
}
@media(min-width: 1200px){
  .main-layout{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 1em;
  }
}
</style>
