<template>
  <div class="flex items-center">
    <img :src="profileImg" alt="profileImg" class="w-9 h-9 rounded-full" />
    <span class="text-subHeading font-bold leading-4 pl-4 pr-2">Patric Shannon</span>
    <DownArrowSolid class="h-3 w-3" fill="rgb(129, 137, 148)" />
  </div>
</template>

<script setup>
import DownArrowSolid from "@/assets/icons/DownArrowSolid.vue"
const profileImg = new URL("@/assets/avatar.jpg", import.meta.url).href;
</script>
