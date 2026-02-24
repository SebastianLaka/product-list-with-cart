<script setup>
import ProductsHeader from './ProductsHeader.vue'

</script>

<template>
    <ProductsHeader v-slot="{ productsHeader }">
      <h1 class="product-header__category">{{productsHeader }}</h1>
    </ProductsHeader>
</template>

<style lang="scss" scoped>
@media (min-width: 375px){
.product-header{
  &__category{
    font-size: 2.5rem;
  }
}
}
</style>
