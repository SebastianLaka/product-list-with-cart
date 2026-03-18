<script setup>
import SuccessModalContent from './SuccessModalContent.vue'
import { ref } from 'vue'
import SuccessIcon from '../icons/icon-order-confirmed.svg'

const iconData = ref({
  src: SuccessIcon,
  alt: 'Success icon modal at top',
})
</script>
<template>
  <section class="order-modal-popup">
    <SuccessModalContent>
      <template #order-confirm>
        <div class="success-modal-content">
          <img :src="iconData.src" :alt="iconData.alt" class="success-modal-content__icon" />
          <h1 class="success-modal-content__header">Order Confirmed</h1>
          <p class="success-modal-content__description">We hope enjoy your food!</p>
        </div>
      </template>
    </SuccessModalContent>
  </section>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/colors.scss' as *;
@use '../../assets/sass/fonts.scss' as *;
@use '../../assets/sass/mixins.scss' as *;
@use '../../assets/sass/breakpoints.scss' as *;
.order-modal-popup {
  min-height: 100svh;
  background-color: getColor('Black-shadow');
  @include position-element($position: fixed, $left: 0, $right: 0, $bottom: 0, $z-index: 100);
  @include flex-layout($justify-content: end, $flex-direction: column);
  .success-modal-content {
    &__icon {
      width: 3em;
      height: 3em;
      margin-bottom: 1em;
    }
    &__header {
      font-size: 2.25rem;
      word-spacing: 50em;
      line-height: 125%;
    }
    &__description {
      font-size: 1rem;
    }
  }
}
@media (min-width: 1200px) {
  .order-modal-popup {
    @include flex-layout($justify-content: center, $align-items: center, $flex-direction: column);
  }
}
</style>
