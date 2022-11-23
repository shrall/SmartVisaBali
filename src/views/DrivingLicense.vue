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
          DRIVING LICENSE
        </div>
        <img
          src="../assets/images/driving-license.png"
          class="w-vw-70 rounded-3xl block xl:hidden mx-auto mb-12"
        />
        <div class="flex flex-col gap-2 text-md xl:text-xl mb-12">
          <div class="font-extrabold text-center xl:text-start">
            To be eligible to receive a driving license in Indonesia, foreign
            nationals must fulfill the additional requirements as explained
            below
          </div>
        </div>
      </div>
      <img
        src="../assets/images/driving-license.png"
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
              <li>Passport</li>
              <li>Scanned copy of the main page of the passport details.</li>
              <li>Scanned copy of the page of the passport cover.</li>
              <li>Address in country of origin.</li>
              <li>Address in Indonesia (hotel or villa)</li>
              <li>Blood Type</li>
              <li>Father Name</li>
              <li>Mother Name</li>
            </ul>
          </div>
        </div>
        <div
          class="bg-sv-black rounded-3xl text-white px-16 py-8 xl:py-12 flex flex-col cursor-pointer gap-8"
        >
          <div class="text-2xl xl:text-4xl font-medium">Process</div>
          <div class="text-md xl:text-xl font-roboto font-normal">
            <ul class="list-disc text-start flex flex-col gap-4">
              <li>
                We register and provide all documentation to the police station.
              </li>
              <li>You will be required to provide Biometrics.</li>
              <li>Validation Process</li>
              <li>Driving License Issued</li>
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
