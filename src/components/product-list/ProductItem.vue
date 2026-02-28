<script setup>
import CartButton from './cartButton.vue'
import addCartIcon from '../icons/icon-add-to-cart.svg'
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
</script>

<template>
  <div class="product-box">
    <div class="product-image-area">
      <img class="product-image" :src="getImageUrl(image.mobile)" :alt="props.image.desktop" />
      <CartButton :icon="addCartIcon" class="cart-button"><p>Add to Cart</p></CartButton>
    </div>

    <slot name="product-info" />
  </div>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@media (min-width: 375px) {
  .product-box {
    padding-top: 4em;
    .product-image-area {
      position: relative;
      .product-image {
        object-fit: cover;
      }
      .cart-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 0.5em;
        position: absolute;
        bottom: -1.5em;
        left: 25%;
        right: 25%;
        max-width: 225px;
        margin: 0 auto;
        padding: 0.5em 1em;
        border-radius: 4em;
        border: none;
        border: 0.1em solid getColor('Rose-900');
      }
    }
  }
}
</style>
