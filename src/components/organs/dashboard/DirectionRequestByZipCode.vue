<template>
  <DashBoardCard
    :icon="icons.directionRequestByZipCode"
    title="Direction Request By Zip Code"
  >
    <SimpleTable :data="data" :headers="headers" noHeader class="mt-6">
    </SimpleTable>
  </DashBoardCard>
</template>

<script setup>
import DashBoardCard from "../../molecule/DashBoardCard.vue";
import { icons } from "../../../utils/index";
import SimpleTable from "../../atoms/SimpleTable.vue";

const headers = [
  {
    text: "Zip code",
    key: "zipCode",
  },
  {
    text: "Count",
    key: "count",
  },
];
const data = [
  { zipCode: "1. 358748", count: 35, highlight: true, trClass: "bg-gray" },
  { zipCode: "2. 358748", count: 35 },
  { zipCode: "3. 358748", count: 35, trClass: "bg-gray-500" },
  { zipCode: "4. 358748", count: 35 },
  { zipCode: "5. 358748", count: 35, trClass: "bg-gray-500" },
  { zipCode: "6. 358748", count: 35 },
  { zipCode: "7. 358748", count: 35, trClass: "bg-gray-500" },
  { zipCode: "8. 358748", count: 35 },
];
</script>

<style></style>
