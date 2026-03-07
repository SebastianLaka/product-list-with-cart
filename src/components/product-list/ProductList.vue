<script setup>
import ProductsHeader from './ProductsHeader.vue'
import ProductItem from './ProductItem.vue'
import { useProductsStore } from '@/stores/products'
const storeProductData = useProductsStore()
</script>

<template>
  <section class="products-container">
    <ProductsHeader v-slot="{ productsHeader }">
      <h1 class="product-header__category">{{ productsHeader }}</h1>
    </ProductsHeader>
    <ProductItem
      v-for="product in storeProductData.productDataCopy"
      :key="product.name"
      :image="product.image"
      :class="`article-item-${product.category}`"
    >
      <template #product-info>
        <div class="product-info">
          <p class="product-info__category">{{ product.category }}</p>
          <h2 class="product-info__name">{{ product.name }}</h2>
          <p class="product-info__price">${{ product.price.toFixed(2) }}</p>
        </div>
      </template>
    </ProductItem>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/breakpoints.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .products-container {
    @include flex-layout($flex-direction: column);
    @include set-gap($row-gap: 3em);
    .product-header {
      &__category {
        font-size: 3rem;
        font-weight: changeWeight('font-700');
      }
    }
    .product-info {
      @include flex-layout($flex-direction: column);
      @include set-gap($row-gap: 0.5em);
      padding-top: 3em;
      &__category {
        color: getColor('Rose-500');
        font-weight: changeWeight('font-400');
      }
      &__name {
        color: getColor('Rose-900');
        font-weight: changeWeight('font-600');
        font-size: 1.1rem;
      }
      &__price {
        color: getColor('Red');
        font-weight: changeWeight('font-700');
        font-size: 1.2rem;
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .products-container {
    @include grid-layout($columns: 3);
    @include set-gap($row-gap: 2em, $column-gap: 2.25em);
  }
}
@media (min-width: 1200px) {
  .products-container {
    @include grid-child(1,3)
  }
}
</style>
