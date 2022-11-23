<template>
  <Navbar />
  <div
    class="font-roboto w-vw-100 h-vh-100 bg-sv-yellow-300 flex flex-col items-center gap-0 pt-36 xl:px-48"
  >
    <div class="flex justify-center">
      <div class="text-4xl xl:text-6xl underline font-kanit font-semibold">
        About Us
      </div>
    </div>
    <div
      class="grid grid-cols-1 px-8 xl:px-0 xl:grid-cols-2 place-items-center h-vh-60 xl:gap-32"
    >
      <img src="../assets/logo.svg" class="w-vw-50 xl:w-vw-30" />
      <div class="flex flex-col justify-center">
        <div
          class="text-3xl font-kanit font-semibold text-center xl:text-start"
        >
          Smart Visa Bali
        </div>
        <div class="text-lg text-center xl:text-start">
          Smart Visa Bali is recommended visa agency in Bali. With more than 5
          years experience, we are trusted agency. Handling quickly and your
          passport is in safe hand with us.
        </div>
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
