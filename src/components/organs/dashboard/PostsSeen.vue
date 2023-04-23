<template>
  <DashBoardCard :icon="icons.postsSeen" title="Posts Seen" :number="245">
    <PeriodBar
      text1="+22"
      text2="vs Previous Period"
      text3="+13%"
      class="mb-3 mt-6"
    />
    <PeriodBar text1="-22" text2="vs Last Year" text3="+13%" color="red" />
  </DashBoardCard>
</template>

<script setup>
import { icons } from "../../../utils/index";
import PeriodBar from "../../atoms/PeriodBar.vue";
import DashBoardCard from "../../molecule/DashBoardCard.vue";
</script>
