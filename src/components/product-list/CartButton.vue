<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <button @click="cart.updateCartAmount">
    <img :src="props.icon" class="button-icon"/>
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.button-icon{
    width: 2em;
    height: 2em;
}
.button-icon{
  width: 1.25em;
  height: 1.25em;
}
</style>
