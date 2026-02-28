<script setup>
import ProductsHeader from './ProductsHeader.vue'
import ProductItem from './ProductItem.vue'
import { useProductsStore } from '@/stores/products'
const storeProductData = useProductsStore()

</script>

<template>
  <ProductsHeader v-slot="{ productsHeader }">
    <h1 class="product-header__category">{{ productsHeader }}</h1>
  </ProductsHeader>
  <ProductItem v-for="product in storeProductData.productDataCopy" 
  :key="product.name" 
  :image="product.image">
    <template #product-info>
      <p class="product-category"></p>
      <h2 class="product-name"></h2>
      <p class="product-price"></p>
    </template>
  </ProductItem>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/breakpoints.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@media (min-width: $mobile-view) {
  .product-header {
    &__category {
      font-size: 3rem;
      font-weight: changeWeight('font-700');
    }
  }
}
</style>
