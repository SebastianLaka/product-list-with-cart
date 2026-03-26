<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  closeIcon: String,
  inOrder: Boolean,
})
const images = import.meta.glob('../../assets/images/*.jpg', { eager: true });
const getImageUrl = (path) => {
  const filename = path.split('/').pop();
  const key = Object.keys(images).find(key => key.endsWith(filename));
  return images[key]?.default || '';
}
const emit = defineEmits(['remove'])
</script>

<template>
  <div class="cart-desserts">
    <div class="cart-desserts-container">
      <img
        :src="getImageUrl(item.image.mobile)"
        alt="Dessert in summary modal when you completed your order."
        v-if="inOrder"
        class="cart-desserts-container__image"
      />
      <div class="cart-item-details cart-item-section">
        <h2 class="cart-item-details__product-name">{{ item.name }}</h2>
        <div class="cart-item-pricing">
          <p class="cart-item-pricing__amount">{{ item.quantity }}x</p>
          <p class="cart-item-pricing__price">@${{ item.price.toFixed(2) }}</p>
          <p class="cart-item-pricing__amount-price" v-if="!inOrder">
            ${{ (item.price * item.quantity).toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
    <p class="cart-desserts__modal-price" v-if="inOrder">
      ${{ (item.price * item.quantity).toFixed(2) }}
    </p>
    <button class="remove-cart-item" @click="emit('remove')" v-if="!inOrder">
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
    @include set-gap($column-gap: 1em);
    padding: 0 1em;
    width: 100%;
    .cart-desserts-container{
      @include flex-layout();
      @include set-gap($column-gap: 1em);
      &__image {
        width: 4.688em;
        height: 4.688em;
      }
    }
    .cart-item-section {
      @include flex-layout($flex-direction: column);
      @include set-gap($row-gap: 1em);
      &__product-name {
        color: getColor('Rose-900');
      }
      .cart-item-pricing {
        @include flex-layout();
        @include set-gap($row-gap: 0em, $column-gap: 0.5em);
        &__amount {
          padding-right: 0.75em;
          @include set-element-typography('Red', 'font-600', 1rem);
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
    &__modal-price {
      font-weight: changeWeight('font-600');
    }
    .remove-cart-item {
      @include flex-layout($justify-content: center, $align-items: center);
      border-radius: 50%;
      border: 0.1em solid getColor('Rose-500');
      padding: 0.5em;
      height: 1.25rem;
      width: 1.25rem;
      &__icon {
        transform: translate(-0.01em, -0.02em);
        width: 0.625em;
        height: 0.625em;
      }
    }
  }
}
</style>
