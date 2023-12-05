import { createRouter, createWebHistory } from "vue-router";
import Houses from "./components/Houses.vue";
import Persons from "./components/Persons.vue";
import Quotes from "./components/Quotes.vue";

const routes = [
  { path: "/", component: Houses },
  {
    path: "/persons",
    component: Persons,
  },
  {
    path: "/quotes",
    component: Quotes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
