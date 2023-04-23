<template>
  <DashBoardCard
    :icon="icons.websiteClicks"
    title="Website Clicks"
    :number="186"
  >
    <PeriodBar
      text1="+22"
      text2="vs Previous Period"
      text3="+13%"
      class="mb-3 mt-6"
    />
    <PeriodBar text1="-22" text2="vs Last Year" text3="+13%" color="red" />
    <BarChart :data="barChartData" />
  </DashBoardCard>
</template>

<script setup>
import { icons } from "../../../utils/index";
import PeriodBar from "../../atoms/PeriodBar.vue";
import BarChart from "../../atoms/charts/BarChart.vue";
import { barChartData } from "../../../mockdata/charts";
import DashBoardCard from "../../molecule/DashBoardCard.vue";
</script>

<style></style>
