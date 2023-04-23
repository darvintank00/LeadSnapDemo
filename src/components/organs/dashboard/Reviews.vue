<template>
        <DashBoardCard :icon="icons.reviews" title="Reviews" :number="103">
          <PeriodBar
            text1="+22"
            text2="vs Previous Period"
            text3="+13%"
            class="mb-3 mt-6"
          />
          <PeriodBar
            text1="-22"
            text2="vs Last Year"
            text3="+13%"
            color="red"
          />
          <BarChart :data="barChartData" />
        </DashBoardCard>
</template>
    
<script setup>
import {icons} from "../../../utils/index"
import PeriodBar from "../../atoms/PeriodBar.vue";
import BarChart from "../../atoms/charts/BarChart.vue";
import DashBoardCard from "../../molecule/DashBoardCard.vue";
import { barChartData } from "../../../mockdata/charts";
</script>
    
<style>
    
</style>