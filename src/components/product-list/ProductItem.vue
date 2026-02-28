<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
})
const getImageUrl = (path) => {
  const cleanPath = path.replace('./', '../../'); 
  return new URL(cleanPath, import.meta.url).href;
}
</script>

<template>
  <div class="product-box">
    <img class="product-image" :src="getImageUrl(image.mobile)" :alt="props.image.desktop" />
    <slot name="product-info" />
  </div>
</template>
<style lang="scss" scoped></style>
