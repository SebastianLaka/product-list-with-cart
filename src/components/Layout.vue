<script setup>
import ProductsHeader from '../components/product-list/ProductsHeader.vue'
import ProductList from './product-list/ProductList.vue'
import ProductCartMain from './product-cart/ProductCartMain.vue'
import SummaryPopup from './summary-popup/OrderSuccessModal.vue'
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>
<template>
  <main class="main-layout wrapper">
    <ProductsHeader v-slot="{ productsHeader }">
      <h1 class="product-header__category">{{ productsHeader }}</h1>
    </ProductsHeader>
    <ProductList />
    <ProductCartMain />
    <Transition name="show-modal">
      <SummaryPopup v-if="cart.isClicked" />
    </Transition>
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/sass/breakpoints.scss' as *;
@use '../assets/sass/wrapper.scss' as *;
@use '../assets/sass/colors.scss' as *;
@use '../assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .main-layout {
    min-height: 100svh;
    padding: 0 0.25em;
    .show-modal-enter-active,
    .show-modal-leave-active {
      transition:
        opacity 0.5s ease,
        transform 0.5s ease;
    }
    .show-modal-enter-from,
    .show-modal-leave-to {
      opacity: 0;
    }
    .product-header {
      padding: 2em 0;
      &__category {
        @include set-element-typography('Rose-900', 'font-700', 3rem);
      }
    }
  }
}
@media (min-width: $desktop-wide) {
  .main-layout {
    @include grid-layout($columns: 3);
    @include set-gap($row-gap: 1em);
  }
}
</style>
