<script setup>
import { ref, computed } from 'vue'
import EmptyCart from './EmptyCart.vue'
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'
import IlluistrationEmptyCart from '../icons/illustration-empty-cart.svg'
import RemoveItemIcon from '../icons/icon-remove-item.svg'
import OrderIcon from '../icons/icon-carbon-neutral.svg'
import CartButton from '../product-list/CartButton.vue'
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
const currentCartItem = computed(() => cart.currentCartItem)
const emptyIllustrationData = ref({
  src: IlluistrationEmptyCart,
  alt: 'Image with part of cake',
})
const noticeCartOrder = ref({
  src: OrderIcon,
  alt: 'This a carbon-neutral delivery',
})
</script>
<template>
  <section class="cart-container">
    <EmptyCart v-if="cart.currentCartItem === 0">
      <template #empty-cart-content>
        <section class="empty-cart-content">
          <h1 class="empty-cart-content__cart-amount">Your Cart ({{ currentCartItem }})</h1>
          <img
            class="empty-cart-content__image"
            :src="emptyIllustrationData.src"
            :alt="emptyIllustrationData.alt"
          />
          <p class="empty-cart-content__info">Your added items will appear here</p>
        </section>
      </template>
    </EmptyCart>
    <section v-else class="cart-items-area">
      <h1 class="cart-items-area__header">Your Cart ({{ currentCartItem }})</h1>
      <CartItem
        v-for="cartItem in cart.cartItems"
        :key="cartItem.name"
        :item="cartItem"
        :close-icon="RemoveItemIcon"
        :price="cartItem.price"
        @remove="cart.removeItem(cartItem.name)"
      />
      <CartSummary>
        <div class="cart-summary-total">
          <p class="cart-summary-total__content">Order Total</p>
          <p class="cart-summary-total__price">${{ cart.sumUpCart.toFixed(2) }}</p>
        </div>
        <div class="cart-summary-notice">
          <img
            :src="noticeCartOrder.src"
            :alt="noticeCartOrder.alt"
            class="cart-summary-notice__icon"
          />
          <p class="cart-summary-notice__order-type">
            This a <strong>carbon-neutral</strong> delivery
          </p>
        </div>
        <CartButton class="confirm-cart-button" @click="cart.showModal">
          <template #cart-content> Confirm Order </template>
        </CartButton>
      </CartSummary>
    </section>
  </section>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
@use '../../assets/sass/breakpoints.scss' as *;
@media (min-width: $mobile-view) {
  .cart-container {
    @include flex-layout($flex-direction: column, $align-items: center);
    padding: 2.75em 1.5em 1.5em 1.5em;
    .empty-cart-content {
      background-color: getColor('Rose-50');
      border-radius: 1em;
      width: 100%;
      padding: 1em;
      &__cart-amount {
        color: getColor('Red');
        font-size: 1.5rem;
        padding-bottom: 1em;
      }
      &__image {
        width: 50%;
        transform: translateX(50%);
        padding-top: 1em;
      }
      &__info {
        color: getColor('Rose-500');
        font-weight: changeWeight('font-600');
        text-align: center;
      }
    }
    .cart-items-area {
      @include flex-layout($flex-direction: column);
      @include set-gap($row-gap: 1.75em);
      background-color: getColor('Rose-50');
      border-radius: 1em;
      width: 100%;
      padding: 1.5em;
      &__header {
        color: getColor('Red');
        font-size: 1.5rem;
      }
    }
    .cart-summary-total {
      @include flex-layout($flex-direction: row, $justify-content: space-between);
      width: 100%;
      &__content,
      &__price {
        color: getColor('Rose-900');
      }
      &__price {
        font-weight: changeWeight('font-600');
        font-size: 2rem;
      }
    }
    .cart-summary-notice {
      @include flex-layout(
        $flex-direction: row,
        $justify-content: space-between,
        $align-items: center
      );
      @include set-gap($column-gap: 1em);
      &__icon {
        width: 32px;
        height: 32px;
      }
    }
    .confirm-cart-button {
      padding: 0.75em 3em;
      border-radius: 4em;
      border: none;
      border: 0.1em solid getColor('Red');
      width: 100%;
      background-color: getColor('Red');
      font-weight: changeWeight('font-600');
      color: getColor('Rose-50');
    }
  }
}

@media (min-width: 768px){
  .cart-container{
      padding: 2.75em 0 1.5em 1.5em;
      .cart-summary-notice {
      @include flex-layout(
        $justify-content: center
      );
    }
  }
}
</style>
