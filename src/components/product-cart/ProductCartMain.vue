<script setup>
import { ref, computed } from 'vue'
import EmptyCart from './EmptyCart.vue'
import CartItem from './CartItem.vue'
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
          <img class="empty-cart-content__image" :src="emptyIllustrationData.src" :alt="emptyIllustrationData.alt" />
          <p class="empty-cart-content__info">Your added items will appear here</p>
        </section>
      </template>
    </EmptyCart>
    <CartItem v-else />
  </section>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
.cart-container {
  padding-top: 2.75em;
  .empty-cart-content{
    &__cart-amount{
      color: getColor('Red');
      font-size: 1.5rem;
    }
    &__image{
      width: 50%;
      transform: translateX(50%);
      padding-top: 1em;
    }
    &__info{
      color: getColor('Rose-500');
      font-weight: changeWeight('font-600');
      text-align: center;
    }
  }
}
</style>
