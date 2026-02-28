<script setup>

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <button>
    <img :src="props.icon" class="button-icon"/>
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.button-icon{
    width: 2em;
    height: 2em;
}
</style>
