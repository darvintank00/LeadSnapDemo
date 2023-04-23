<template>
  <DashBoardCard
    :icon="icons.yourTopTrafficSources"
    title="Your Top Traffic Sources"
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
  { zipCode: "1. Limo Company", count: 354, highlight: true, trClass: "bg-gray" },
  { zipCode: "2. Phoenix Limo Company", count: 235 },
  { zipCode: "3. Lanscping Company", count: 135, trClass: "bg-gray-500" },
  { zipCode: "4. HVAC Company", count: 35 },
  { zipCode: "5. Windows Tinting Company", count: 35, trClass: "bg-gray-500" },
  { zipCode: "6. Landscapers of Las Vegas", count: 35 },
];

</script>

<style></style>
