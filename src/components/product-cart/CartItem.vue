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
</template>

<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
@use '../../assets/sass/breakpoints.scss' as *;
@media (min-width: $mobile-view) {
  .cart-desserts {
    @include flex-layout($justify-content: space-between, $align-items: center);
    padding: 1em 0;
    .cart-item-details {
      @include flex-layout($flex-direction: column);
      gap: 0.5em 0;
      @include set-gap($row-gap: 1em);
      &__product-name {
        color: getColor('Rose-900');
      }
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
</style>
