import { createRouter, createWebHistory } from "vue-router";
import PlayersView from "@/views/PlayersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PlayersView,
    }
  ],
});

export default router;
