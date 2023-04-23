<template>
  <div class="flex items-center">
    <slot name="label">
      <span class="text-indigo font-semibold mr-3 text-sm min-w-[90px]">
        {{ label }}
      </span>
    </slot>
    <!-- {{ date }} -->
    <VueDatePicker
      v-model="date"
      range
      multi-calendars
      :enable-time-picker="false"
      :placeholder="placeholder"
      class="app-date-picker"
      @internal-model-change="handleInternal"
    >
      <template #left-sidebar>
        <div
          class="flex flex-col min-w-[150px] h-[292px] overflow-y-auto custom-scroll"
        >
          <div
            class="p-3 border-b border-gray-400"
            v-for="(dateRange, index) in dateRanges"
            :key="'dateRange' + index"
          >
            {{ dateRange.label }}
          </div>
        </div>
      </template>

      <template #action-row="{ internalModelValue, selectDate, closePicker }">
        <div class="flex border-t border-gray-500 w-full p-4 justify-between">
          <div class="">
            <div class="font-semibold text-sm text-indigo">Compare To:</div>
            <div class="flex">
              <CheckBox
                v-model="as"
                label="Previous Period"
                value="previousPeriod"
              ></CheckBox>
              <CheckBox
                class="ml-5"
                v-model="as"
                label="Previous Year"
                value="previousYear"
              ></CheckBox>
            </div>
          </div>
          <div class="flex">
            <AppButton @click="closePicker">
              <div class="flex items-center">
                <img :src="cancelIcon" class="w-5" /><span
                  class="pl-2 font-semibold text-sm text-indigo"
                  >Cancel</span
                >
              </div></AppButton
            >
            <AppButton @click="selectDate" class="pl-2">
              <div class="flex items-center">
                <img :src="doneIcon" class="w-5" /><span
                  class="pl-2 font-semibold text-sm text-indigo"
                  >Apply</span
                >
              </div></AppButton
            >
          </div>
          <!-- <p class="current-selection">{{ internalModelValue }}</p> -->
        </div>
      </template>

      <template #input-icon>
        <!-- <img class="input-slot-image w-4 ml-2" :src="calenderIcon"/> -->
      </template>

      <template #dp-input="{ value, onInput, onEnter, onTab, onClear, onBlur }">
        <FormInput
          placeholder="Select"
          :modelValue="value"
          :icon="!value ? calenderIcon : null"
          class=" border-1 border-gray-500  drop-shadow-md"
          inputClass="placeholder:italic rounded-md"
        />
      </template>

<template 
          #month-year="{
              month,
              year,
              months,
              years,
              updateMonthYear,
              handleMonthYearChange,
              instance
      }">
      <!-- {{ instance }} -->
      <div class="grid grid-flow-dense">
        <FormInput v-if="instance === 0" v-model="fromDate" mask="date" placeholder="From" class="border-1 border-gray-500 drop-shadow-md " inputClass="rounded-md text-sm p-2"></FormInput>
        <FormInput v-if="instance === 1" v-model="toDate" mask="date" placeholder="To" class="border-1 border-gray-500 drop-shadow-md " inputClass="rounded-md text-sm p-2"></FormInput>
      
        <div class="custom-month-year-component flex items-center">
          <span 
          v-if="instance === 0"
              class="custom-icon cursor-pointer" 
              @click="handleMonthYearChange(false)">
            <LeftArrowIcon class="h-3 w-3" />
          </span>
          <select 
              class="p-2 w-28"
              :value="month" 
              @change="updateMonth($event, updateMonthYear, year)">
            <option v-for="m in months" :key="m.value" :value="m.value">{{ m.text }}</option>
          </select>
          <select 
              class="select-input w-28"
              :value="year"
              @change="updateYear($event, updateMonthYear, month)">
            <option v-for="y in years" :key="y.value" :value="y.value">{{ y.text }}</option>
          </select>
          <span 
          v-if="instance === 1"
              class="custom-icon cursor-pointer" 
              @click="handleMonthYearChange(true)">
            <LeftArrowIcon class="rotate-180 h-3 w-3 ml-4" />
          </span>
        </div>
      </div>    
      </template>

    </VueDatePicker>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import AppButton from "../atoms/form/Button.vue";
import FormInput from "../atoms/form/Input.vue";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
import CheckBox from "../atoms/form/CheckBox.vue";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.vue"

const doneIcon = new URL("@/assets/icons/done.png", import.meta.url).href;
const cancelIcon = new URL("@/assets/icons/close.png", import.meta.url).href;
const calenderIcon = new URL("@/assets/icons/calender.png", import.meta.url)
  .href;

const date = ref();
const as = ref([]);

const fromDate = ref()
const toDate = ref()

defineProps({
  label: "",
  placeholder: "",
});

const handleInternal = (date) => {
  // Do something
  fromDate.value = date && date[0] ? `${date[0].getMonth()+1}/${date[0].getDate()}/${date[0].getFullYear()}`  : "";
  toDate.value = date && date[1] ? `${date[1].getMonth()+1}/${date[0].getDate()}/${date[0].getFullYear()}`  : "";
}

const dateRanges = [
  {
    label: "First 7 Days",
    start: "",
    end: "",
  },
  {
    label: "First 30 Days",
    start: "",
    end: "",
  },
  {
    label: "First 60 Days",
    start: "",
    end: "",
  },
  {
    label: "First 90 Days",
    start: "",
    end: "",
  },
  {
    label: "First 6 Months",
    start: "",
    end: "",
  },
  {
    label: "Last 7 Days",
    start: "",
    end: "",
  },
  {
    label: "Last 30 Days",
    start: "",
    end: "",
  },
  {
    label: "Last 60 Days",
    start: "",
    end: "",
  },
  {
    label: "Last 90 Days",
    start: "",
    end: "",
  },
  {
    label: "Last 6 Months",
    start: "",
    end: "",
  },
];

const updateMonth = function(event, updateMonthYear, year) {
  updateMonthYear(+(event.target).value, year);
};

const updateYear = (event, updateMonthYear, month) => {
  updateMonthYear(month, +(event.target).value);
};
</script>

<style scoped>
.app-date-picker :deep(.dp__sidebar_left) {
  padding: 0;
}

.app-date-picker :deep(.dp__action_row) {
  padding: 0;
}

.app-date-picker,
.app-date-picker :deep(.dp__calendar_wrap) {
  font-family: "Montserrat", sans-serif !important;
}
.app-date-picker :deep(.dp__month_year_row){
  --dp-month-year-row-height: 85px;
}

.app-date-picker :deep(.dp__arrow_top) {
  right: 10%;
  left: unset;
}

.app-date-picker :deep(.dp__theme_light) {
  --dp-background-color: #ffffff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ebebeb;
  --dp-menu-border-color: #ebebeb;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-highlight-color: rgba(25, 118, 210, 0.1);
}

.app-date-picker :deep(.dp__instance_calendar[role="document"]) {
  padding: 8px;
}

.custom-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 0px;
  background-color: #f0f7ff;
}

.custom-scroll::-webkit-scrollbar {
  width: 2px;
  background-color: #f0f7ff;
}

.custom-scroll::-webkit-scrollbar-thumb {
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #014dfe;
}
</style>
