import { createRouter, createWebHistory } from "vue-router";

import Home from "/src/views/Home.vue";
import AboutUs from "/src/views/AboutUs.vue";
import ContactUs from "/src/views/ContactUs.vue";
import Services from "/src/views/Services.vue";
import OffshoreVisa from "/src/views/OffshoreVisa.vue";
import OnshoreVisa from "/src/views/OnshoreVisa.vue";
import EVisaB211B from "/src/views/EVisaB211B.vue";
import InvestorItas from "/src/views/InvestorItas.vue";

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
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      title: "ContactUs",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
    meta: {
      title: "Services",
    },
  },
  {
    path: "/offshore-visa",
    name: "OffshoreVisa",
    component: OffshoreVisa,
    meta: {
      title: "OffshoreVisa",
    },
  },
  {
    path: "/onshore-visa",
    name: "OnshoreVisa",
    component: OnshoreVisa,
    meta: {
      title: "OnshoreVisa",
    },
  },
  {
    path: "/evisa-b211b",
    name: "EVisaB211B",
    component: EVisaB211B,
    meta: {
      title: "EVisaB211B",
    },
  },
  {
    path: "/investor-itas",
    name: "InvestorItas",
    component: InvestorItas,
    meta: {
      title: "InvestorItas",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
