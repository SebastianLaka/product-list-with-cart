<script setup>
import ProductsHeader from './ProductsHeader.vue'

</script>

<template>
    <ProductsHeader v-slot="{ productsHeader }">
      <h1 class="product-header__category">{{productsHeader }}</h1>
    </ProductsHeader>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/breakpoints.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@media (min-width: $mobile-view){
.product-header{
  &__category{
    font-size: 3rem;
    font-weight: changeWeight('font-700');
  }
}
}
</style>
