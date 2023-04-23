<template>
  <DashBoardCard :icon="icons.directSearch" title="Direct Search">
    <div class="border-b">
      <PieChartDetailCard
        class="py-6 w-2/3 m-auto"
        :chart-data="[20, 80]"
        count="3,210"
        subtext="Profile Views on Google Maps on Desktop and Mobile Devices."
      />
    </div>
    <div class="flex">
      <Card
        title="984"
        class="pt-6 border-r border-b w-1/2 px-3 pb-6"
        titleClass="text-blue"
      >
        <PeriodBar text1="-22" text2="vs Last Year" text3="+13%" color="red" />
      </Card>
      <Card
        title="98"
        class="pt-6 border-b w-1/2 px-3 pb-6"
        titleClass="text-blue"
      >
        <PeriodBar
          text1="+22"
          text2="vs Previous Period"
          text3="+13%"
          class="mb-3"
        />
      </Card>
    </div>
    <BarChart :data="[10, 15, 17, 16, 10]" :options="{ aspectRatio: 2 }" />
  </DashBoardCard>
</template>

<script setup>
import { icons } from "../../../utils/index";
import PeriodBar from "../../atoms/PeriodBar.vue";
import Card from "../../atoms/cards/Card.vue";
import PieChartDetailCard from "../../atoms/cards/PieChartDetailCard.vue";
import BarChart from "../../atoms/charts/BarChart.vue";
import DashBoardCard from "../../molecule/DashBoardCard.vue";
</script>

<style></style>
