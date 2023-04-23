<template>
  <table class="w-full">
    <tr v-if="!noHeader">
      <th
        class="py-4 border border-gray-500"
        v-for="(item, index) in headers"
        :key="'th' + index"
      >
        {{ item.text }}
      </th>
    </tr>
    <tr
      v-for="(row, index) in data"
      :key="'tr-' + index"
      :class="[
        { 'font-semibold bg-gray border-b-2 text-sm': row.highlight },
        row.trClass,
      ]"
    >
      <td
        v-for="(item, index) in headers"
        :key="'td' + index"
        class="py-3 pl-4 border border-gray-300 text-[13px]"
      >
        {{ row[item.key] }}
      </td>
    </tr>
  </table>
</template>

<script setup>
defineProps({
  noHeader: {
    type: Boolean,
    default: false,
  },
  headers: {
    type: Array,
  },
  data: {
    type: Array,
  },
});
</script>

<style></style>
