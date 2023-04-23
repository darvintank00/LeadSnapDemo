<template>
  <div class="relative">
    <button v-bind="$attrs" class="appbtn px-5 py-2 ">
      <slot></slot>
    </button>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.appbtn {
  border-radius: 4px;
  font-family: $appFamily;
  color: #000;
  /* box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5); */
  border: solid 2px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(180deg, $gradientColorGroup1Color1, $gradientColorGroup1Color2);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
}

</style>
