<template>
  <Navbar />
  <div
    class="font-roboto w-vw-100 bg-sv-yellow-300 flex flex-col items-center gap-0 pt-36 xl:px-36 pb-24"
  >
    <div class="grid xl:grid-cols-2 place-items-center gap-32">
      <div class="flex flex-col justify-center gap-12">
        <div
          class="text-3xl xl:text-5xl font-kanit font-semibold text-center xl:text-start"
        >
          RETIREMENT ITAS
        </div>
        <img
          src="../assets/images/retirement-itas.png"
          class="w-vw-70 rounded-3xl block xl:hidden mx-auto"
        />
        <div class="text-lg text-center xl:text-start px-4 xl:px-0">
          For foreigners who retire and dream of spending the golden years in
          exotic & beautiful places. Indonesia is one of the best destinations
          to live out your retirement years. The retirement visa is a multiple
          entry visa which is valid for a period of one year.
        </div>
        <div class="flex flex-col gap-4">
          <div class="font-extrabold text-center xl:text-start">
            The benefits are:
          </div>
          <ul class="list-disc px-16 xl:pl-8">
            <li>1 year stay permit with possibility of extend up to 5 years</li>
            <li>Possibility to open bank account</li>
            <li>
              Possibility to obtain driving license and buying car or motorbike
            </li>
            <li>Possibility to get a medical insurance</li>
            <li>Discount for a medical assistance</li>
            <li>Chance for permanent stay in 5 years</li>
          </ul>
        </div>
        <a href="https://linktr.ee/smartvisa.bali">
          <div class="flex">
            <div
              class="bg-sv-black text-white hover:bg-white hover:text-sv-black font-kanit font-semibold xl:text-4xl rounded-2xl text-center justify-center px-12 mx-auto xl:mx-0 xl:px-24 py-4 shadow-md shadow-sv-black cursor-pointer"
            >
              Apply Now
            </div>
          </div>
        </a>
      </div>
      <img
        src="../assets/images/retirement-itas.png"
        class="w-vw-50 rounded-3xl hidden xl:block"
      />
    </div>
  </div>
  <Footer v-bind:bgColor="'bg-white'"></Footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  setup() {},
  components: { Navbar, Footer },
};
</script>
