<template>
  <DashBoardCard :icon="icons.searchViews" title="Search Views">
    <div class="flex">
      <PieChartDetailCard
        class="border-r border-b pt-6 w-1/3"
        :chart-data="[20, 80]"
        count="3,210"
        subtext="Profile Views on Google Maps on Desktop and Mobile Devices."
      />
      <Card
        title="984"
        sub-title="Desktop"
        class="pt-6 border-r border-b w-1/3 px-3 pb-6"
      >
        <PeriodBar
          text1="+22"
          text2="vs Previous Period"
          text3="+13%"
          class="mb-3"
        />
        <PeriodBar text1="-22" text2="vs Last Year" text3="+13%" color="red" />
      </Card>
      <Card
        title="984"
        sub-title="Desktop"
        class="pt-6 border-b w-1/3 px-3 pb-6"
      >
        <PeriodBar
          text1="+22"
          text2="vs Previous Period"
          text3="+13%"
          class="mb-3"
        />
        <PeriodBar text1="-22" text2="vs Last Year" text3="+13%" color="red" />
      </Card>
    </div>
    <BarChart :data="[10, 15, 17, 16, 10]" :options="{ aspectRatio: 2 }" />
  </DashBoardCard>
</template>

<script setup>
import PeriodBar from "../../atoms/PeriodBar.vue";
import DashBoardCard from "../../molecule/DashBoardCard.vue";
import { icons } from "../../../utils/index";
import Card from "../../atoms/cards/Card.vue";
import BarChart from "../../atoms/charts/BarChart.vue";
import PieChartDetailCard from "../../atoms/cards/PieChartDetailCard.vue";
</script>

<style></style>
