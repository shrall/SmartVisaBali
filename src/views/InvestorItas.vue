<template>
  <Navbar />
  <div
    class="font-roboto w-vw-100 bg-sv-yellow-300 flex flex-col items-center gap-0 pt-36 xl:px-36 pb-24"
  >
    <div class="grid xl:grid-cols-2 place-items-center gap-32">
      <div class="flex flex-col justify-center px-8 xl:px-0">
        <div
          class="text-3xl xl:text-5xl font-kanit font-semibold text-center xl:text-start mb-12"
        >
          INVESTOR ITAS
        </div>
        <img
          src="../assets/images/investor-itas.png"
          class="w-vw-70 rounded-3xl block xl:hidden mx-auto mb-12"
        />
        <div class="flex flex-col gap-2 text-md xl:text-xl mb-12">
          For foreigners who invest & manage their business in a company in
          Indonesia Indonesian Investor ITAS consists a lot of benefits, with
          the most profitable ones include the ease of application and the
          waiver of work permit fee.
        </div>
        <div class="flex flex-col gap-4">
          <div class="font-extrabold text-center xl:text-start">
            Types of Investor ITAS:
          </div>
          <ul class="list-disc px-36 xl:pl-8">
            <li>1 Year ITAS</li>
            <li>2 Year ITAS</li>
          </ul>
        </div>
        <a href="https://linktr.ee/smartvisa.bali">
          <div class="flex">
            <div
              class="bg-sv-black text-white hover:bg-white hover:text-sv-black font-kanit mt-4 font-semibold xl:text-4xl rounded-2xl text-center justify-center px-12 mx-auto xl:mx-0 xl:px-24 py-4 shadow-md shadow-sv-black cursor-pointer"
            >
              Apply Now
            </div>
          </div>
        </a>
      </div>
      <img
        src="../assets/images/investor-itas.png"
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
