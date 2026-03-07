<script setup>
import { ref } from 'vue'
import CartButton from './CartButton.vue'
import addCartIcon from '../icons/icon-add-to-cart.svg'
import IncrementQuantity from '../icons/icon-increment-quantity.svg'
import DecrementQuantity from '../icons/icon-decrement-quantity.svg'
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
})

const getImageUrl = (path) => {
  const cleanPath = path.replace('./', '../../')
  return new URL(cleanPath, import.meta.url).href
}

const cartIcons = ref({
  buttonIcons: [addCartIcon, DecrementQuantity, IncrementQuantity],
})
</script>

<template>
  <div class="products-box">
    <div class="product-image-area">
      <picture>
        <source :srcset="getImageUrl(image.desktop)" media="(min-width: 992px)" />
        <source :srcset="getImageUrl(image.tablet)" media="(min-width: 768px)" />
        <img :src="getImageUrl(image.mobile)" class="product-image" :alt="image.desktop"/>
      </picture>
      <picture></picture>
      <CartButton
        class="cart-button"
        v-if="cart.currentCartItem === 0"
        @click="cart.updateCartAmount"
      >
        <template #cart-content>
          <img :src="cartIcons.buttonIcons[0]" alt="" class="cart-icon" />
          <p class="cart-button__content">Add to Cart</p>
        </template>
      </CartButton>
      <CartButton v-else class="cart-button activated-cart-button">
        <template #cart-content>
          <button class="add-cart-item" @click="cart.decrementCartAmount">
            <img :src="cartIcons.buttonIcons[1]" alt="" class="remove-cart-icon" />
          </button>
          <p class="activated-cart-button__content">{{ cart.currentCartItem }}</p>
          <button class="remove-cart-item" @click="cart.updateCartAmount">
            <img :src="cartIcons.buttonIcons[2]" alt="" class="add-cart-icon" />
          </button>
        </template>
      </CartButton>
    </div>
    <slot name="product-info" />
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/breakpoints.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
@media (min-width: 375px) {
  .products-box {
    padding-top: 4em;
    .product-image-area {
      @include position-element($position: relative);
      .cart-button {
        @include flex-layout($justify-content: center, $align-items: center);
        @include set-gap($column-gap: 0.5em);
        @include position-element($position: absolute, $bottom: -1.25em, $left: 25%, $right: 25%);
        max-width: 225px;
        height: 50px;
        margin: 0 auto;
        padding: 0.5em 1em;
        border-radius: 4em;
        border: none;
        border: 0.1em solid getColor('Rose-900');
        .cart-icon {
          width: 2em;
          height: 2em;
        }
      }
      .activated-cart-button {
        @include flex-layout($justify-content: space-between, $align-items: center);
        background-color: getColor('Red');
        border: 0.1em solid getColor('Red');
        &__content {
          color: getColor('Rose-50');
        }
        .add-cart-item,
        .remove-cart-item {
          margin: 0 1px;
          @include flex-layout($justify-content: center, $align-items: center);
          border-radius: 50%;
          border: none;
          outline: 0.1em solid getColor('Rose-50');
          padding: 0;
          background-color: transparent;
          height: 1.25rem;
          width: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          img {
            width: 10px;
            height: auto;
            filter: brightness(0) invert(1);
          }
          &:hover {
            background-color: getColor('Rose-50');
            outline-color: getColor('Red');
            img {
              filter: invert(26%) sepia(90%) saturate(6255%) hue-rotate(351deg) brightness(91%)
                contrast(105%);
            }
          }
        }
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .products-box {
    padding-top: 3em;
    .product-image-area {
      .cart-button {
        padding: 0.5em 0.5em;
        @include position-element($bottom: -1.2em, $left: 15%, $right: 15%);
        &__content {
          font-size: 0.875rem;
        }
        .cart-icon {
          width: 1.25em;
          height: 1.25em;
        }
      }
      .activated-cart-button {
        .add-cart-item,
        .remove-cart-item {
          margin: 0 4px;
        }
      }
    }
  }
}
</style>
