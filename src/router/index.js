import { createRouter, createWebHistory } from "vue-router";

import Home from "/src/views/Home.vue";

//Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;