<template>
  <div class="cart-summary">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
@use '../../assets/sass/mixins.scss' as *;
@use '../../assets/sass/breakpoints.scss' as *;
@media (min-width: $mobile-view) {
  .cart-summary {
    @include flex-layout($flex-direction: column, $justify-content: center);
    @include set-gap($row-gap: 2.5em);
  }
}

@media (min-width: 1200px){
    .cart-summary{
        width: 100%;
    }
}
</style>
