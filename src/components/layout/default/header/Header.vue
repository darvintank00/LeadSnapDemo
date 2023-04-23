<template>
  <header class="bg-header flex h-13 items-center">
    <MenuIcon class="h-5 w-5 mx-6 cursor-pointer" />
    <div>progress widget</div>
    <div class="ml-auto py-2 flex items-center">
      <BellIcon class="w-6 h-6" fill="#818994" />
      <HelpIcon class="w-6 h-6 ml-2" fill="#818994" />
      <PlayCircleIcon class="w-6 h-6 ml-2" fill="#818994" />
      <HeaderProfileCard class="ml-10 mr-5" />
    </div>
  </header>
</template>

<script setup>
import BellIcon from "@/assets/icons/BellIcon.vue";
import HelpIcon from "@/assets/icons/HelpIcon.vue";
import PlayCircleIcon from "@/assets/icons/PlayCircleIcon.vue";
import MenuIcon from "@/assets/icons/MenuIcon.vue";
import HeaderProfileCard from "./HeaderProfileCard.vue";
</script>

<style></style>
