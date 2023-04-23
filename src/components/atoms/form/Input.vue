<template>
  <div class="relative">
    <input
      class="w-full p-3 focus-visible:outline-none"
      :placeholder="placeholder"
      :class="inputClass"
      :type="type"
      v-model="model"
    />
    <div v-if="icon" class="absolute right-3 top-3">
      <img :src="icon" class="w-4" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const masks = {
  date: "##/##/####",
};

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  type: {
    type: String,
    defaault: "text",
  },
  inputClass: {
    type: String,
    default: null,
  },
  placeholder: "",
  modelValue: "",
  icon: null,
  mask: {
    type: String,
    default: null,
    validator(val) {
      return ["date"].includes(val);
    },
  },
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

</script>

<style></style>
