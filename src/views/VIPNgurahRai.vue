<template>
  <Navbar />
  <div
    class="
      font-roboto
      w-vw-100
      bg-sv-yellow-300
      flex flex-col
      items-center
      gap-0
      pt-36
      px-36
      pb-24
    "
  >
    <div class="grid grid-cols-2 place-items-center gap-32">
      <div class="flex flex-col justify-center gap-12">
        <div class="text-5xl font-kanit font-semibold">
          VIP AIRPORT SERVICE AT NGURAH RAI INTERNATIONAL AIRPORT
        </div>
        <div class="flex flex-col gap-4">
          <div class="font-extrabold">
            Your dedicated Personal Assistant will welcome you off your flight
            and ensure your arrival into Bali is a quick and effortless
            experience.
          </div>
        </div>
        <a href="https://linktr.ee/smartvisa.bali">
          <div class="flex">
            <div
              class="
                bg-sv-black
                text-white
                hover:bg-white hover:text-sv-black
                font-kanit font-semibold
                text-4xl
                rounded-2xl
                text-center
                justify-center
                px-24
                py-4
                shadow-md shadow-sv-black
                cursor-pointer
              "
            >
              Apply Now
            </div>
          </div>
        </a>
      </div>
      <img
        src="../assets/images/vip-ngurahrai.png"
        class="w-vw-50 rounded-3xl"
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