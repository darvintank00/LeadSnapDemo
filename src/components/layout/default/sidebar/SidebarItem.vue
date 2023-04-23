<template>
  <a
    href="#"
    class="font-montserrat flex border-y border-indigo-500 items-center py-5 px-5 transition duration-200 text-indigo-500 hover:bg-indigo-800"
  >
    <img :src="icon" :alt="title" class="w-4" />
    <span class="ml-2">{{ title }}</span>
    <img
      :src="downArrow"
      alt="down-arrow"
      class="w-4 ml-auto"
      v-if="subItems"
    />
  </a>
</template>

<script setup>

const downArrow = new URL(
  "@/assets/icons/down-arrow.png",
  import.meta.url
).href;


const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  subItems: {
    type: Array,
    default: null,
  },
});
</script>
