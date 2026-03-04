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
        <p>Your Cart ({{ currentCartItem }})</p>
        <img :src="emptyIllustrationData.src" :alt="emptyIllustrationData.alt" />
        <p>Your added items will appear here</p>
      </template>
    </EmptyCart>
    <CartItem v-else />
  </section>
</template>
<style lang="scss" scoped>
@media (min-width: 992px) {
  .cart-container {
    padding-top: 2.75em;
  }
}
</style>
