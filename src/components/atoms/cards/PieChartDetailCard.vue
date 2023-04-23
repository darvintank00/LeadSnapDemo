<template>
  <div class="flex items-center">
    <div class="w-[40%]">
      <DoughnutChart v-if="chartData" :data="chartData" />
    </div>
    <div class="w-auto pl-4">
      <div class="font-bold text-indigo text-4xl">{{count}}</div>
      <div class="text-xs">
        {{ subtext }}
      </div>
    </div>
  </div>
</template>

<script setup>
import DoughnutChart from "../charts/DoughnutChart.vue";

defineProps({
  count: { type: [String, Number], default: null },
  subtext: {
    type: String,
    default: ''
  },
  chartData: {
    type: Array,
    default: null,
  }
});
</script>

<style></style>
