<script setup>
import CartButton from '../product-list/CartButton.vue'
const props = defineProps({
  type: Object,
  required: true,
})
</script>
<template>
  <div class="success-modal-content">
    <slot name="order-confirm" />
    <div class="cart-summary">
      <div class="cart-summary-details">
        <h2 class="cart-item-details__product-name">{{ props.name }}</h2>
        <div class="cart-item-pricing">
          <p class="cart-item-pricing__amount">{{ props.quantity }}x</p>
          <p class="cart-item-pricing__price">@${{ props.price }}</p>
          <p class="cart-item-pricing__amount-price">${{ props.price * props.quantity }}</p>
        </div>
      </div>
    </div>
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
  padding: 4em 2em 1em;
  height: 85svh;
}
.cart-button {
  width: 100%;
  padding: 1em;
  border-radius: 4em;
  border: 0.1em solid getColor('Rose-900');
  border: none;
  background-color: getColor('Red');
  color: getColor('Rose-50');
  font-weight: changeWeight('font-600');
}
@media (min-width: 1200px){
  .success-modal-content{
     @include flex-layout($align-items: center, $justify-content: space-between);
     max-width: 600px;
     height: 75svh;
     border-radius: 1em;
  }
  
}
</style>
