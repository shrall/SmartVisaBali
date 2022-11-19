<template>
  <Navbar />
  <div
    class="
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
        <div class="text-5xl font-kanit font-semibold">WORKING ITAS</div>
        <div class="text-lg">
          For foreigners who work in a company in Indonesia or obtain income in
          Indonesia. Valid for 6 months or 1 year, includes multiple entry visa.
        </div>
        <div class="flex flex-col gap-4">
          <div class="font-extrabold">The benefits are:</div>
          <ul class="list-disc pl-8">
            <li>Possibility to open bank account</li>
            <li>Possibility to obtain driving license</li>
            <li>Possibility to get a medical insurance</li>
          </ul>
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
        src="../assets/images/investor-itas.png"
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