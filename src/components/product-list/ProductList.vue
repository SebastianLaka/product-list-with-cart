<script setup>
import ProductsHeader from './ProductsHeader.vue'

</script>

<template>
  <section class="product-container">
    <ProductsHeader v-slot="{ productsHeader }">
      <h1 class="product-header">{{productsHeader }}</h1>
    </ProductsHeader>
  </section>
</template>

<style lang="scss" scoped></style>
