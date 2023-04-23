<template>
  <div class="min-h-screen flex">
    <Sidebar />
    <main class="w-[85%]">
        <Header />
        <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Header from "./default/header/Header.vue";
import Sidebar from "./default/sidebar/Sidebar.vue";
</script>

<style></style>
