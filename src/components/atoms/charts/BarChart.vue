<template>
  <Bar :data="chartData" :options="chartOptions" ref="barChart" />
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import * as chartConfig from "./barChartConfig.js";
import { computed, onBeforeMount, onMounted, reactive, ref, watch } from "vue";
import cloneDeep from "lodash/cloneDeep";

const loaded = ref(false);
const barChart = ref(null);
// const configs = reactive(chartConfig)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  data: null,
  options: {
    type: Object,
    default: {}
  }
});

const chartData = computed(() => {
  const newChartConfig = cloneDeep(chartConfig.data);
  newChartConfig.datasets[0].data = props.data;
  return newChartConfig;
});

const chartOptions = computed(() => {
  const newChartConfig = cloneDeep(chartConfig.options);
  
  Object.assign(newChartConfig, props.options)

  // newChartConfig.datasets[0].data = props.data;
  return newChartConfig;
})
</script>

<style></style>
