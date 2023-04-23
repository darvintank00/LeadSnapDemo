<template>
  <PageWrapper title="Analytics" sub-title="Analytics > Dashboard">
    <template v-slot:rightside>
      <div class="min-w-[360px]">
        <DateRangePicker label="Date Range:" placeholder="Select" />

      </div>
    </template>

    <div class="grid grid-cols-12 gap-6 pt-6">
      <div class="col-span-3">
        <WebsiteClicks />
      </div>
      <div class="col-span-3">
        <DashboardCard
          :icon="icons.callClicks"
          title="Call Clicks"
          :number="258"
        >
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
          <BarChart key="asdfasdf456" :data="[20, 25, 24, 26, 85, 42]" />
        </DashboardCard>
      </div>
      <div class="col-span-3">
        <DirectionRequests />
      </div>
      <div class="col-span-3">
        <Reviews />
      </div>
      <div class="col-span-6">
        <CategoricalSearches />
      </div>
      <div class="col-span-6">
        <YourTopTrafficSources />
      </div>
      <div class="col-span-6">
        <MapViews />
      </div>
      <div class="col-span-6">
        <SearchViews />
      </div>
      <div class="col-span-4">
        <DiscoverySearch />
      </div>
      <div class="col-span-4">
        <DirectSearch />
      </div>
      <div class="col-span-4">
        <DirectionRequestByZipCode />
      </div>
      <div class="col-span-4">
        <PostsSeen />
      </div>
      <div class="col-span-4">
        <PhotoViews />
      </div>
      <div class="col-span-4">
        <Conversation />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import DateRangePicker from "../molecule/DateRangePicker.vue";
import DashboardCard from "../molecule/DashboardCard.vue";
import PageWrapper from "./PageWrapper.vue";
import PeriodBar from "../atoms/PeriodBar.vue";
import BarChart from "../atoms/charts/BarChart.vue";

import { barChartData } from "../../mockdata/charts";
// import DoughnutChart from "../atoms/charts/DoughnutChart.vue";
import PieChartDetailCard from "../atoms/cards/PieChartDetailCard.vue";
import Card from "../atoms/cards/Card.vue";
import Reviews from "../organs/dashboard/Reviews.vue";
import WebsiteClicks from "../organs/dashboard/WebsiteClicks.vue";
import DirectionRequests from "../organs/dashboard/DirectionRequests.vue";
import CategoricalSearches from "../organs/dashboard/CategoricalSearches.vue";
import MapViews from "../organs/dashboard/MapViews.vue";
import SearchViews from "../organs/dashboard/SearchViews.vue";
import Conversation from "../organs/dashboard/Conversation.vue";
import PhotoViews from "../organs/dashboard/PhotoViews.vue";
import PostsSeen from "../organs/dashboard/PostsSeen.vue";
import DiscoverySearch from "../organs/dashboard/DiscoverySearch.vue";
import DirectSearch from "../organs/dashboard/DirectSearch.vue";
import DirectionRequestByZipCode from "../organs/dashboard/DirectionRequestByZipCode.vue";
import YourTopTrafficSources from "../organs/dashboard/YourTopTrafficSources.vue";
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale
// } from 'chart.js'
// import { Bar } from 'vue-chartjs'
// import {data, options} from './chartConfig.js'
// // console.log("Legend", Legend);
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
// console.log("ChartJS",ChartJS);

const icons = {
  websiteClicks: new URL("@/assets/icons/website-clicks.png", import.meta.url)
    .href,
  callClicks: new URL("@/assets/icons/call-clicks.png", import.meta.url).href,
  directionRequests: new URL("@/assets/icons/map-location.png", import.meta.url)
    .href,
  reviews: new URL("@/assets/icons/reviews.png", import.meta.url).href,
  categoricalSearches: new URL(
    "@/assets/icons/categorical-searches.png",
    import.meta.url
  ).href,
  yourTopTrafficSources: new URL(
    "@/assets/icons/conversation.png",
    import.meta.url
  ).href,
  mapViews: new URL("@/assets/icons/start-heatmap.png", import.meta.url).href,
  searchViews: new URL("@/assets/icons/search.png", import.meta.url).href,
  discoverySearch: new URL("@/assets/icons/search.png", import.meta.url).href,
  directSearch: new URL("@/assets/icons/search.png", import.meta.url).href,
  directionRequestByZipCode: new URL(
    "@/assets/icons/zip-code.png",
    import.meta.url
  ).href,
  postsSeen: new URL("@/assets/icons/post.png", import.meta.url).href,
  photoViews: new URL("@/assets/icons/photo-views.png", import.meta.url).href,
  conversation: new URL("@/assets/icons/conversation.png", import.meta.url)
    .href,
};
</script>

<style></style>
