<template>
  <Navbar />
  <div
    class="font-roboto w-vw-100 bg-sv-yellow-300 flex flex-col items-center gap-0 pt-36 xl:px-36"
  >
    <div class="grid xl:grid-cols-2 place-items-center h-vh-60 gap-32">
      <div class="flex flex-col justify-center px-8 xl:px-0">
        <div
          class="text-3xl xl:text-5xl font-kanit font-semibold text-center xl:text-start mb-12"
        >
          E-VISA (B211 B)
        </div>
        <img
          src="../assets/images/evisab211b.png"
          class="w-vw-70 rounded-3xl block xl:hidden mx-auto mb-12"
        />
        <div class="flex flex-col gap-2 text-md xl:text-xl mb-12">
          E-Visa B211 B allows you to stay in Indonesia for a total of 6 months.
          It is available to the foreign nationals that are currently staying in
          Indonesia with an emergency visa extension (such as travelers that
          arrived to the country with visa exemption) or who's KITAS is
          expiring.
        </div>
      </div>
      <img
        src="../assets/images/evisab211b.png"
        class="w-vw-50 rounded-3xl hidden xl:block"
      />
    </div>
  </div>
  <div
    class="font-roboto w-vw-100 bg-sv-yellow-300 flex flex-col items-center gap-12 xl:px-48 py-12"
  >
    <div class="col-span-2 flex justify-center">
      <div
        class="text-2xl xl:text-6xl font-kanit font-semibold text-center xl:text-start"
      >
        VISA REQUIREMENTS
      </div>
    </div>
    <div
      class="grid grid-cols-2 xl:flex justify-evenly items-center gap-16 text-white font-roboto font-semibold"
    >
      <div
        class="rounded-full bg-sv-black xl:p-8 flex flex-col gap-4 justify-center items-center w-32 h-32 xl:w-64 xl:h-64"
      >
        <div class="text-lg xl:text-4xl">1</div>
        <div class="text-xs xl:text-xl text-center">
          Photo of Passport Identity & Cover Passport
        </div>
      </div>
      <div
        class="rounded-full bg-sv-black xl:p-8 flex flex-col gap-4 justify-center items-center w-32 h-32 xl:w-64 xl:h-64"
      >
        <div class="text-lg xl:text-4xl">2</div>
        <div class="text-xs xl:text-xl text-center">Pas Photo</div>
      </div>
      <div
        class="rounded-full bg-sv-black xl:p-8 flex flex-col gap-4 justify-center items-center w-32 h-32 xl:w-64 xl:h-64"
      >
        <div class="text-lg xl:text-4xl">3</div>
        <div class="text-xs xl:text-xl text-center">Return Flight Ticket</div>
      </div>
      <div
        class="rounded-full bg-sv-black xl:p-8 flex flex-col gap-4 justify-center items-center w-32 h-32 xl:w-64 xl:h-64"
      >
        <div class="text-lg xl:text-4xl">4</div>
        <div class="text-xs xl:text-xl text-center">Vaccine Certificate</div>
      </div>
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
