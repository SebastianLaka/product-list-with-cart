<script setup>
const props = defineProps({
  productData: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <slot name="cart-items" />
</template>
<style lang="scss" scoped></style>
