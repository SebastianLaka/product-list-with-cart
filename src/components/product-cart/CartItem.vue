<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  closeIcon: String,
})
const emit = defineEmits(['remove'])
</script>

<template>
  <div class="cart-desserts">
    <div class="cart-item-details">
      <h2 class="cart-item-details__product-name">{{ item.name }}</h2>
      <div class="cart-item-pricing">
        <p class="cart-item-pricing__amount">{{ item.quantity }}x</p>
        <p class="cart-item-pricing__price">@${{ item.price.toFixed(2) }}</p>
        <p class="cart-item-pricing__amount-price">
          ${{ (item.price * item.quantity).toFixed(2) }}
        </p>
      </div>
    </div>
    <button class="remove-cart-item" @click="emit('remove')">
      <img :src="closeIcon" alt="Remove item" class="remove-cart-item__icon" />
    </button>
  </div>
  <div>

    
  </div>
</template>

<style lang="scss" scoped>
/* Tutaj wrzuć style dla .cart-desserts, .cart-item-details itd. */
</style>