import { createRouter, createWebHistory } from "vue-router";

import Home from "/src/views/Home.vue";
import AboutUs from "/src/views/AboutUs.vue";
import ContactUs from "/src/views/ContactUs.vue";
import Services from "/src/views/Services.vue";
import OffshoreVisa from "/src/views/OffshoreVisa.vue";
import OnshoreVisa from "/src/views/OnshoreVisa.vue";
import EVisaB211B from "/src/views/EVisaB211B.vue";
import InvestorItas from "/src/views/InvestorItas.vue";
import WorkingItas from "/src/views/WorkingItas.vue";
import FamilyItas from "/src/views/FamilyItas.vue";
import RetirementItas from "/src/views/RetirementItas.vue";
import OthersItas from "/src/views/OthersItas.vue";
import VIPNgurahRai from "/src/views/VIPNgurahRai.vue";
import OffshoreSingleEntry from "/src/views/OffshoreSingleEntry.vue";
import OnshoreSingleEntry from "/src/views/OnshoreSingleEntry.vue";

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
      title: "About Us",
    },
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      title: "Contact Us",
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
      title: "Offshore Visa",
    },
  },
  {
    path: "/onshore-visa",
    name: "OnshoreVisa",
    component: OnshoreVisa,
    meta: {
      title: "Onshore Visa",
    },
  },
  {
    path: "/evisa-b211b",
    name: "EVisaB211B",
    component: EVisaB211B,
    meta: {
      title: "E-Visa (B211B)",
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
  {
    path: "/working-itas",
    name: "WorkingItas",
    component: WorkingItas,
    meta: {
      title: "WorkingItas",
    },
  },
  {
    path: "/family-itas",
    name: "FamilyItas",
    component: FamilyItas,
    meta: {
      title: "Family Itas",
    },
  },
  {
    path: "/retirement-itas",
    name: "RetirementItas",
    component: RetirementItas,
    meta: {
      title: "Retirement Itas",
    },
  },
  {
    path: "/others-itas",
    name: "OthersItas",
    component: OthersItas,
    meta: {
      title: "Others Itas",
    },
  },
  {
    path: "/vip-ngurahrai",
    name: "VIPNgurahRai",
    component: VIPNgurahRai,
    meta: {
      title: "VIP Ngurah Rai Service",
    },
  },
  {
    path: "/offshore-single-entry",
    name: "OffshoreSingleEntry",
    component: OffshoreSingleEntry,
    meta: {
      title: "Offshore Single Entry",
    },
  },
  {
    path: "/onshore-single-entry",
    name: "OnshoreSingleEntry",
    component: OnshoreSingleEntry,
    meta: {
      title: "Onshore Single Entry",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
