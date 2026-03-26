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
    <Transition mode="out-in" name="v-cart">
      <EmptyCart v-if="cart.currentCartItem === 0">
        <template #empty-cart-content>
          <div class="empty-cart-content">
            <h1 class="empty-cart-content__cart-amount">Your Cart ({{ currentCartItem }})</h1>
            <img
              class="empty-cart-content__image"
              :src="emptyIllustrationData.src"
              :alt="emptyIllustrationData.alt"
            />
            <p class="empty-cart-content__info">Your added items will appear here</p>
          </div>
        </template>
      </EmptyCart>

      <div v-else class="cart-items-area">
        <h1 class="cart-items-area__header">Your Cart ({{ currentCartItem }})</h1>
        <TransitionGroup name="slide" tag="div" class="cart-items-list">
          <CartItem
            v-for="cartItem in cart.cartItems"
            :key="cartItem.name"
            :item="cartItem"
            :close-icon="RemoveItemIcon"
            :price="cartItem.price"
            @remove="cart.removeItem(cartItem.name)"
            v-show="cart.isVisible"
          />
        </TransitionGroup>
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
      </div>
    </Transition>
  </section>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
@use '../../assets/sass/breakpoints.scss' as *;
@media (min-width: $mobile-view) {
  .v-cart-enter-active,
  .v-cart-leave-active {
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
  .v-cart-enter-from {
    opacity: 0;
    transform: translateY(10px); 
  }
  .v-cart-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  .cart-items-list {
    @include flex-layout($flex-direction: column);
    @include set-gap($row-gap: 1em);
    .slide-enter-active,
    .slide-leave-active {
      transition: all 0.5s ease;
    }
    .slide-enter-from,
    .slide-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
  }
  .cart-container {
    @include flex-layout($flex-direction: column, $align-items: center);
    padding-bottom: 1em;
    .empty-cart-content {
      background-color: getColor('Rose-50');
      border-radius: 1em;
      width: 100%;
      padding: 1em;
      &__cart-amount {
        @include set-element-typography('Red', 'font-700', 1.5rem);
        padding-bottom: 1em;
      }
      &__image {
        width: 50%;
        transform: translateX(50%);
        padding-top: 1em;
      }
      &__info {
        @include set-element-typography('Rose-500', 'font-600', 1rem);
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
        @include set-element-typography('Red', 'font-700', 1.5rem);
      }
    }
    .cart-summary-total {
      @include flex-layout($flex-direction: row, $justify-content: space-between);
      width: 100%;
      &__price {
        @include set-element-typography('Rose-900', 'font-600', 2rem);
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
        width: 3.2em;
        height: 3.2em;
      }
    }
    .confirm-cart-button {
      padding: 0.75em 3em;
      border-radius: 4em;
      border: none;
      border: 0.1em solid getColor('Red');
      width: 100%;
      background-color: getColor('Red');
      @include set-element-typography('Rose-50', 'font-600', 1rem);
    }
  }
}
@media (min-width: $tablet-view) {
  .cart-container {
    padding: 0 0 1.5em 0;
    .cart-summary-notice {
      @include flex-layout($justify-content: center);
    }
  }
}
@media (min-width: $desktop-small){
  .cart-container{
    .cart-items-area{
      padding: 0 10em;
    }
  }
}
@media (min-width: $desktop-wide){
   .cart-container{
    .cart-items-area{
      padding: 1.5em 1.75em;
    }
  }
}
</style>
