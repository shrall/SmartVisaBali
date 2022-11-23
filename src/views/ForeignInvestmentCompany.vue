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
          FOREIGN INVESTMENT COMPANY (PMA)
        </div>
        <img
          src="../assets/images/foreign-investment-company.png"
          class="w-vw-70 rounded-3xl block xl:hidden mx-auto mb-12"
        />
        <div class="flex flex-col gap-2 text-md xl:text-xl mb-12">
          <div class="font-extrabold text-center xl:text-start">
            A PMA (Foreign Investment Company) is the establishment of a
            business in the Republic of Indonesia designed for foreign
            investors. It can be created using full foreign capital or partially
            with a domestic investor. Once you have your own PMA you can apply
            for a foreign investment Kitas under your own company. As the
            director or commissioner, you can legally manage your company with a
            KITAS
          </div>
        </div>
      </div>
      <img
        src="../assets/images/foreign-investment-company.png"
        class="w-vw-50 rounded-3xl hidden xl:block"
      />
    </div>
    <div
      class="w-vw-100 py-12 flex flex-col gap-12 items-center font-kanit font-semibold"
    >
      <div class="text-3xl xl:text-5xl">DOCUMENTS REQUIRED</div>
      <div
        class="grid grid-flow-row xl:grid-cols-2 gap-12 auto-rows-auto px-4 xl:px-0"
      >
        <div
          class="bg-sv-black rounded-3xl text-white px-16 py-12 text-center flex flex-col cursor-pointer gap-16"
        >
          <div class="text-md xl:text-xl font-roboto font-normal">
            <ul class="list-disc text-start flex flex-col gap-4">
              <li>
                Scanned copy of passport cover and details in color of Share
                Holder (Director & Commissioner).
              </li>
              <li>Minimum 2 Share Holder (Director & Commissioner)</li>
              <li>
                3 different names of the company (1st, 2nd, 3rd choice) the
                company name must contain 3 words
              </li>
              <li>
                Company Activity (can be more than 1 activity) You can have up
                to 5 different categories
              </li>
            </ul>
          </div>
        </div>
        <div
          class="bg-sv-black rounded-3xl text-white px-16 py-8 xl:py-12 flex flex-col cursor-pointer gap-8"
        >
          <div class="text-2xl xl:text-4xl font-medium">Process</div>
          <div class="text-md xl:text-xl font-roboto font-normal">
            <ul class="list-disc text-start flex flex-col gap-4">
              <li>Process maximum 6 months PMA</li>
              <li>
                Once notary certificate and company registration numbers are
                issued around 30 days. You can then start trading.
              </li>
              <li>
                Meanwhile we continue the process for business license and
                investment kitas at the same time (3 months)
              </li>
              <li>
                Operational license must be completed within 2 years from the
                start of the process.
              </li>
            </ul>
          </div>
        </div>
      </div>
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
