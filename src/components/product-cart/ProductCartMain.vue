<script setup>
import { ref, computed } from 'vue'
import EmptyCart from './EmptyCart.vue'
import CartItem from './CartItem.vue'
import RemoveItemIcon from '../icons/icon-remove-item.svg'
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
const currentCartItem = computed(() => cart.currentCartItem)
import IlluistrationEmptyCart from '../icons/illustration-empty-cart.svg'
const emptyIllustrationData = ref({
  src: IlluistrationEmptyCart,
  alt: 'Image with part of cake',
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
      />
    </section>
  </section>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
.cart-container {
  padding-top: 2.75em;
  .empty-cart-content {
    &__cart-amount {
      color: getColor('Red');
      font-size: 1.5rem;
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
    &__header {
      color: getColor('Red');
      font-size: 1.5rem;
    }
    .cart-desserts {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2em;
      .cart-item-details {
        display: flex;
        flex-direction: column;
        gap: 0.5em 0;

        .cart-item-pricing {
          display: flex;
          gap: 0 0.5em;
          &__amount {
            padding-right: 0.75em;
            color: getColor('Red');
            font-weight: changeWeight('font-600');
          }
          &__price,
          &__amount-price {
            color: getColor('Rose-500');
          }
          &__amount-price {
            font-weight: changeWeight('font-600');
          }
        }
      }
      .remove-cart-item {
        @include flex-layout($justify-content: center, $align-items: center);
        border-radius: 50%;
        border: 0.1em solid getColor('Rose-500');
        padding: 0.5em;
        height: 1.25rem;
        width: 1.25rem;
        cursor: pointer;
        &__icon {
          transform: translate(-0.01em, -0.02em);
          width: 10px;
          height: 10px;
        }
      }
    }
  }
}
</style>
