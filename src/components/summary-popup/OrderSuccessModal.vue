<script setup>
import SuccessModalContent from './SuccessModalContent.vue'
</script>
<template>
  <section class="order-modal-popup">
    <SuccessModalContent />
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
  @include position-element($position: fixed, $left: 0, $right: 0, $top: 0, $z-index: 100);
}
</style>
