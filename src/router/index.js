import { createRouter, createWebHistory } from "vue-router";

import Home from "/src/views/Home.vue";
import AboutUs from "/src/views/AboutUs.vue";

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
  {
    path: "/aboutus",
    name: "AboutUs",
    component: AboutUs,
    meta: {
      title: "AboutUs",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;