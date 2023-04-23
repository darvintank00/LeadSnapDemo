<template>
  <div class="p-8">
    <div class="flex border-b border-indigo-500 pb-4 justify-between">
      <div class="flex flex-col">
        <slot name="leftside">
          <slot name="title">
            <span class="text-2xl text-indigo font-bold">{{ title }}</span>
          </slot>
          <slot name="subTitle">
            <span class="text-[10px] text-[#314456] font-normal">{{
              subTitle
            }}</span>
          </slot>
        </slot>
      </div>
      <div class="">
        <slot name="rightside"> </slot>
      </div>
    </div>
    <slot> </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
