<template>
  <div class="px-5">
    <div class="uppercase font-semibold mb-2">General</div>
    <FormInput
      inputClass="bg-[#3C4E62] placeholder:italic font-montserrat leading-4 text-sm rounded-md border border-[#51606f] placeholder:text-indigo-500"
      placeholder="Search ..."
      :icon="searchIcon"
    />
  </div>
</template>

<script setup>
import FormInput from "../../../atoms/form/Input.vue";
const searchIcon = new URL('@/assets/icons/search.png', import.meta.url).href
</script>

<style></style>
#3C4E62
