<template>
  <div>
    <div  :class="`font-semibold text-4xl ${titleClass}`" >
      {{ title }}
    </div>
    <div class="font-normal text-sm mb-3" :class="subTitleClass">
      {{ subTitle }}
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  subTitle: {
    type: String,
    default: null,
  },
  titleClass: {
    type: String,
    default: 'text-indigo'
  },
  subTitleClass: {
    type: String,
    default: 'text-indigo'
  },
});
</script>

<style></style>
