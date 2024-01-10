<script setup lang="ts">
import { type PropType, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useCocktailsStore } from "@/stores/cocktails";
import {
  type CocktailCode,
  type CocktailDrinks,
  cocktailCodes,
  defaultCocktailCode,
} from "@/services/cocktails";
import CocktailDrink from "@/components/CocktailDrink.vue";

const cocktailsStore = useCocktailsStore();
const props = defineProps({
  code: {
    type: String as PropType<CocktailCode | "">,
    default: "",
  },
});
const state = reactive({
  isLoading: false,
  drinks: [] as CocktailDrinks,
});
const router = useRouter();
const updateCocktail = async () => {
  try {
    state.isLoading = true;
    if (props.code !== "" && !cocktailCodes.includes(props.code)) {
      router.replace("/404");
      return;
    }
    state.drinks = await cocktailsStore.fetchCocktail(
      props.code ? props.code : defaultCocktailCode,
    );
  } catch (e) {
    router.replace("/404");
  } finally {
    state.isLoading = false;
  }
};
updateCocktail();

watch(
  () => props.code,
  () => {
    updateCocktail();
  },
);
</script>

<template>
  <div>
    <p v-if="state.isLoading">Loading</p>
    <template v-else>
      <CocktailDrink
        v-for="(drink, idx) in state.drinks"
        :key="idx"
        :drink="drink"
        class="drink"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.drink {
  margin-bottom: 40px;
}
</style>
