<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import { getIngredientPairs } from "@/services/cocktails";
import type { CocktailDrink } from "@/services/cocktails";

const props = defineProps({
  drink: {
    type: Object as PropType<CocktailDrink>,
    default: () => {},
  },
});

const ingredientPairs = computed(() => {
  return getIngredientPairs(props.drink);
});
</script>

<template>
  <article>
    <img
      class="img"
      loading="lazy"
      :src="drink.strDrinkThumb"
      :alt="drink.strDrink"
    />
    <h1 class="title">
      {{ drink.strDrink }}
    </h1>
    <p>
      {{ drink.strCategory }}
    </p>
    <p>
      {{ drink.strAlcoholic }}
    </p>
    <p>
      {{ drink.strGlass }}
    </p>
    <section>
      <h2>Instructions:</h2>
      <p>
        {{ drink.strInstructions }}
      </p>
    </section>
    <section>
      <h2>List of ingredients:</h2>
      <ol>
        <li v-for="(pair, index) in ingredientPairs" :key="index">
          <span>{{ pair[0] }}</span> <span>{{ pair[1] }}</span>
        </li>
      </ol>
    </section>
  </article>
</template>

<style scoped lang="scss">
.img {
  float: right;
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-left: 16px;

  @include respond-to(mobile) {
    float: none;
    width: 100%;
    margin-left: 0;
  }
}
</style>
