<script setup>
import Layout from './components/Layout.vue';
</script>

<template>
    <Layout />
</template>

<style lang="scss">
@use './assets/sass/reset.scss' as *;
@use './assets/sass/colors.scss' as *;
body{
    background-color: getColor('Rose-100');
    min-height: 100svh;
}

</style>
