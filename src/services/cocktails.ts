export const cocktailCodes = ["margarita", "mojito", "a1", "kir"] as const;
export const defaultCocktailCode = cocktailCodes[0];
export type CocktailCode = (typeof cocktailCodes)[number];
export interface CocktailDrink {
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  [key: `strMeasure${number}`]: string | null;
  [key: `strIngredient${number}`]: string | null;
}
export type CocktailDrinks = Array<CocktailDrink>;
export type Cocktails = Record<CocktailCode, Array<CocktailDrink>>;
export type CocktailIngredientPair = [string, string];
export type CocktailIngredientPairs = Array<CocktailIngredientPair>;
const measureIngredientPairSize = 14;
const getUrl = (code: string) => {
  return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`;
};
export const fetchCocktailDrinks = async (code: CocktailCode | "") => {
  try {
    const res = await fetch(getUrl(code));
    const { drinks }: { drinks: CocktailDrinks } = await res.json();
    return drinks;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getIngredientPairs = (drink: CocktailDrink) => {
  const pairs: CocktailIngredientPairs = [];
  for (let i = 0; i <= measureIngredientPairSize; i++) {
    const measure = drink[`strMeasure${i + 1}`] || "";
    const ingredient = drink[`strIngredient${i + 1}`] || "";
    if (!measure && !ingredient) {
      return pairs;
    }

    pairs.push([measure, ingredient]);
  }
  return pairs;
};
