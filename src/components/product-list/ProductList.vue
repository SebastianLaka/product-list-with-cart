<script setup>
import ProductsHeader from './ProductsHeader.vue'
import ProductItem from './ProductItem.vue'
import { useProductsStore } from '@/stores/products'
const storeProductData = useProductsStore()
</script>

<template>
  <section class="products-container">

    <ProductItem
      v-for="product in storeProductData.productDataCopy"
      :key="product.name"
      :image="product.image"
      :product-data="product"
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
    padding-bottom: 1em;
    .product-header {
      &__category {
        @include set-element-typography('Rose-900', 'font-700', 3rem);
      }
    }
    .product-info {
      @include flex-layout($flex-direction: column);
      @include set-gap($row-gap: 0.5em);
      padding-top: 2.5em;
      &__category {
        @include set-element-typography('Rose-500', 'font-400', 1rem);
      }
      &__name {
        @include set-element-typography('Rose-900', 'font-600', 1.1rem);
      }
      &__price {
        @include set-element-typography('Red', 'font-700', 1.2rem);
      }
    }
  }
}
@media (min-width: $tablet-view) {
  .products-container {
    @include grid-layout($columns: 2);
    @include set-gap($row-gap: 2em, $column-gap: 2.25em);
  }
}
@media (min-width: $desktop-small) {
  .products-container {
    @include grid-layout($columns: 3);
  }
}
@media (min-width: $desktop-wide) {
  .products-container {
    @include grid-child(1,3)
  }
}
</style>
