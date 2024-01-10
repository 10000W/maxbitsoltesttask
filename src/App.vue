<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNav from "@/components/nav/TheNav.vue";
</script>

<template>
  <TheNav class="nav" />
  <RouterView class="view" />
</template>

<style lang="scss">
@import "src/assets/scss/main";

.nav {
  position: sticky;
  top: 0;
  flex-shrink: 0;

  @include respond-to(mobile) {
    position: fixed;
    z-index: 1;
    left: 0;
  }
}

.view {
  flex-shrink: 1;
  flex-grow: 1;
  padding: 20px;
}
</style>
