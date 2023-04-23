<template>
  <div class="relative text-center align-middle">
    <Doughnut
      :data="chartConfig.data"
      :options="chartConfig.options"
      ref="chartRef"
    />
    <div class="absolute inset-0 text-indigo font-semibold text-xl" :style="{top: (canvasHeight/2)-13 + 'px'}">80%</div>
  </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import * as chartConfig from "./doughnutChartConfig.js";
import { computed, onMounted, ref } from "vue";
import cloneDeep from "lodash/cloneDeep";

const chartRef = ref(null);
ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps({
  data: null,
});

const chartData = computed(() => {
  const newChartConfig = cloneDeep(chartConfig.data);
  newChartConfig.datasets[0].data = props.data;
  return newChartConfig;
});

const canvasWidth = ref();
const canvasHeight = ref();
onMounted(function () {
  const canvas = chartRef.value.$el;
  const context = canvas.getContext("2d");
  canvasWidth.value = canvas.width;
  canvasHeight.value = canvas.height;
});
</script>
