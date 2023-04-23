<template>
  <label class="checkbox flex items-center cursor-pointer h-6" :for="compId">
    <span class="text-indigo text-sm">{{ label }}</span>
    <input type="checkbox" :value="value" :id="compId" v-model="model" />
    <div class="checkbox__indicator"></div>
  </label>
</template>

<script setup>
import { generateString } from "@/utils";
import { computed } from "vue";

const compId = generateString(5);
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  value: { type: String },
  modelValue: { default: "" },
  label: { type: String, required: true },
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

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

$checkbox-check-color: #739600;

.checkbox {
  position: relative;
  padding-left: 30px;

  input {
    display: none;
  }

  &__indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: white;
    border: 1px solid $colorGray500;
    border-radius: 3px;
    transition: 125ms ease-out;

    &:after {
      content: "";
      position: absolute;
      left: 2px;
      top: 9px;
      width: 7px;
      height: 13px;
      transform: scaleX(-1) rotate(135deg);
      transform-origin: left top;
      border-right: 3px solid;
      border-top: 3px solid;
      border-image: linear-gradient(
          180deg,
          $gradientColorGroup1Color1,
          $gradientColorGroup1Color2
        )
        1;
      display: none;
    }
  }

  input:checked ~ .checkbox__indicator {
    background: white;
  }

  input:checked ~ .checkbox__indicator:after {
    animation: check 125ms;
    border-top: 3px solid;
    border-right: 3px solid;
    border-image: linear-gradient(
        180deg,
        $gradientColorGroup1Color1,
        $gradientColorGroup1Color2
      )
      1;
    display: block;
  }
}
</style>
