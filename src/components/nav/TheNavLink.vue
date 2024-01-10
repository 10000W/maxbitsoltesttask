<script setup lang="ts">
import type { PropType } from "vue";
import { RouterLink } from "vue-router";
import { type CocktailCode, defaultCocktailCode } from "@/services/cocktails";

defineProps({
  code: {
    type: String as PropType<CocktailCode>,
    default: defaultCocktailCode,
  },
});
</script>

<template>
  <RouterLink :to="`/${code}`" class="nav-link">
    {{ code }}
  </RouterLink>
</template>

<style scoped lang="scss">
.nav-link {
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: black;

  &.router-link-active {
    background-color: lightgray;
    box-shadow: 0 0 0 2px inset gray;
  }
}
</style>
