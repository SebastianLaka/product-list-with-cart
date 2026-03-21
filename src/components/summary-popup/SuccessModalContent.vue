<script setup>
import CartButton from '../product-list/CartButton.vue'
import CartItem from '../product-cart/CartItem.vue'
import CartSummary from '../product-cart/CartSummary.vue'
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>
<template>
  <div class="success-modal-content">
    <slot name="order-confirm" />
    <div class="modal-cart-items">
      <CartItem
        v-for="cartItem in cart.cartItems"
        :key="cartItem.name"
        :item="cartItem"
        :price="cartItem.price"
        :in-order="true"
      />
    </div>
    <CartSummary>
      <div class="cart-summary-total">
        <p class="cart-summary-total__content">Order Total</p>
        <p class="cart-summary-total__price">${{ cart.sumUpCart.toFixed(2) }}</p>
      </div>
    </CartSummary>
    <CartButton class="cart-button">
      <template #cart-content>Start New Order</template>
    </CartButton>
  </div>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
@use '../../assets/sass/breakpoints.scss' as *;
.success-modal-content {
  @include flex-layout($flex-direction: column, $justify-content: center);
  background-color: getColor('Rose-50');
  padding: 2em;
  height: 90svh;
  border-radius: 1em;
  @include set-gap($row-gap: 2em);
  .cart-summary-total {
       @include flex-layout($justify-content: space-between);
      &__price {
        font-size: 1.75rem;
      }
    }
  .modal-cart-items {
    @include flex-layout($flex-direction: column, $align-items: start);
    @include set-gap($row-gap: 0.5em);
    overflow-y: scroll;
  }
}
.cart-button {
  width: 100%;
  padding: 0.75em;
  margin-top: 0.5em;
  border-radius: 4em;
  border: 0.1em solid getColor('Rose-900');
  border: none;
  background-color: getColor('Red');
  color: getColor('Rose-50');
  font-weight: changeWeight('font-600');
}
@media (min-width: 768px) {
  .success-modal-content {
    @include flex-layout($justify-content: space-evenly);
    max-width: 500px;

  }
}
</style>
