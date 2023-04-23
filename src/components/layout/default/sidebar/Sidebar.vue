<template>
  <aside
    id="sidebar"
    class="bg-indigo text-gray-100 w-[15%] space-y-5 px-0 justify-between overflow-y-auto"
  >
    <img
      src="https://leadsnap.com/wp-content/uploads/2022/02/sticky-logo.png"
      alt="Logo"
      class="pt-5 px-5"
    />
    <SidebarProfileCard />
    <SidebarSearch />
    <nav data-dev-hint="main navigation">
      <SidebarItem
        v-for="(item, index) in sidebar"
        :key="`sidevar-l1-${index}`"
        :title="item.title"
        :icon="item.img"
        :subItems="item?.subItems || null"
      />
    </nav>
  </aside>
</template>

<script setup>
import SidebarItem from "../sidebar/SidebarItem.vue";
import SidebarProfileCard from "../sidebar/SidebarProfileCard.vue";
import SidebarSearch from "../sidebar/SidebarSearch.vue";

// TODO: Repace icons
const sidebar = [
  {
    title: "CRM",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
    subItems: [
      {
        title: "Reputation",
        img: new URL("@/assets/icons/top-sources.png", import.meta.url)
          .href,
      },
      {
        title: "Rank Tracking",
        img: new URL("@/assets/icons/top-sources.png", import.meta.url)
          .href,
      },
    ],
  },
  {
    title: "Reputation",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
  {
    title: "Rank Tracking",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
  {
    title: "GBP",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
  {
    title: "Analytics",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
  {
    title: "Due Diligence",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
  {
    title: "Coaching Library",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
  {
    title: "Phone System",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
  {
    title: "Reports",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
  {
    title: "Setting",
    img: new URL("@/assets/icons/top-sources.png", import.meta.url).href,
  },
];
</script>
