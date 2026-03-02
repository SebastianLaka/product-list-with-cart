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
.button-icon{
  width: 1.25em;
  height: 1.25em;
}
</style>
