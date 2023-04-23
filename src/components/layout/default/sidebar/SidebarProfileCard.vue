<template>
  <div class="flex px-5">
    <div class="bg-gradient rounded-full">
      <img
        :src="profileImg"
        alt="profileImg"
        class="w-12 h-12 rounded-full p-0.5"
      />
    </div>
    <div class="ml-3 flex flex-col justify-center">
      <span class="text-xs">Welcome</span>
      <span class="text-gradient font-bold leading-4">Patric Shannon</span>
    </div>
  </div>
</template>

<script setup>
const profileImg = new URL("@/assets/avatar.jpg", import.meta.url).href;
</script>

<style scoped>
.text-gradient {
  background: -moz-linear-gradient(137deg, #8ec320 0%, #15a0d3 100%);
  background: -webkit-linear-gradient(137deg, #8ec320 0%, #15a0d3 100%);
  background: linear-gradient(137deg, #8ec320 0%, #15a0d3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-gradient {
  background: rgb(143, 195, 30);
  background: -moz-linear-gradient(137deg, #8ec320 0%, #15a0d3 100%);
  background: -webkit-linear-gradient(137deg, #8ec320 0%, #15a0d3 100%);
  background: linear-gradient(137deg, #8ec320 0%, #15a0d3 100%);
}
</style>
