import { createRouter, createWebHistory } from "vue-router";
import CocktailView from "../views/CocktailView.vue";
import { defaultCocktailCode } from "@/services/cocktails";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: `/${defaultCocktailCode}`,
    },
    { path: `/:code`, name: "cocktail", component: CocktailView, props: true },
    {
      path: "/404",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
