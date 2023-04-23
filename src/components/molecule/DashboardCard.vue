<template>
  <div class="px-5 pt-5 pb-7 h-full drop-shadow-lg bg-white rounded-lg">
    <div class="flex pb-6 border-b border-indigo-500 items-center">
      <img v-if="icon" :src="icon" class="w-8 h-8 mr-3" />
      <div :class="{ 'min-h-[45px]': number }">
        <div class="text-indigo font-semibold">{{ title }}</div>
        <div
          class="text-blue font-semibold pt-2 text-[35px] leading-[35px]"
          v-if="number"
        >
          {{ number }}
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  number: {
    type: [String, Number],
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
});
</script>

<style></style>
