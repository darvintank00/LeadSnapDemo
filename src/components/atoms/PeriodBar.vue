<template>
  <div
    :class="{ 'bg-blue-500': color == 'blue', 'bg-red-500': color == 'red' }"
    class="rounded-md py-2 font-semibold text-xs"
  >
    <span
      :class="{ 'text-blue': color == 'blue', 'text-red': color == 'red' }"
      class="text-blue pl-3"
      >{{ text1 }}</span
    >
    {{ text2 }}
    <span
      :class="{ 'text-blue': color == 'blue', 'text-red': color == 'red' }"
      class="text-blue float-right pr-2"
      >{{ text3 }}</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "blue",
    validator(val) {
      return ["red", "blue"].includes(val);
    },
  },
  text1: {
    type: String,
    default:''
  },
  text2: {
    type: String,
    default:''
  },
  text3: {
    type: String,
    default:''
  }
});
</script>
