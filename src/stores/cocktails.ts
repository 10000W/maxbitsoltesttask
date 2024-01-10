import { reactive } from "vue";
import { defineStore } from "pinia";
import type {
  CocktailCode,
  CocktailDrinks,
  Cocktails,
} from "@/services/cocktails";
import { fetchCocktailDrinks } from "@/services/cocktails";

export const useCocktailsStore = defineStore("cocktails", () => {
  const cocktails = reactive({} as Cocktails);
  const fetchCocktail = async (code: CocktailCode) => {
    if (cocktails[code]) {
      return cocktails[code];
    }

    const drinks = await fetchCocktailDrinks(code);
    if (!drinks) {
      return [] as CocktailDrinks;
    }
    cocktails[code] = reactive([]);
    Object.assign(cocktails[code], drinks);
    return drinks;
  };

  return { cocktails, fetchCocktail };
});
