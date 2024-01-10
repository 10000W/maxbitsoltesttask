<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { cocktailCodes } from "@/services/cocktails";
import TheNavLink from "@/components/nav/TheNavLink.vue";

const route = useRoute();
const isOpened = ref(false);

watch(
  () => route.params.code,
  () => {
    isOpened.value = false;
  },
);
</script>

<template>
  <nav class="nav" :class="isOpened ? 'opened' : ''">
    <button class="button" type="button" @click="isOpened = !isOpened">
      menu
    </button>
    <ul class="list">
      <li class="item" v-for="code in cocktailCodes" :key="code">
        <TheNavLink :code="code" />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  width: 200px;
  height: 100%;
  padding: 20px 0;
  background-color: white;

  @include respond-to(mobile) {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
}

.opened {
  @include respond-to(mobile) {
    transform: translateX(0);
  }
}

.button {
  position: absolute;
  top: 0;
  left: 100%;
  display: none;

  @include respond-to(mobile) {
    display: block;
  }
}
</style>
