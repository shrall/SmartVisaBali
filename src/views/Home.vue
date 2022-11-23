<template>
  <Navbar />
  <div class="w-vw-100 h-full relative pt-24 font-roboto">
    <img
      id="carousel-1"
      v-if="carouselImage == 1"
      src="../assets/images/home-1.png"
      class="h-vh-30 object-cover xl:h-full xl:w-full"
    />
    <img
      id="carousel-2"
      v-else-if="carouselImage == 2"
      src="../assets/images/home-2.png"
      class="h-vh-30 object-cover xl:h-full xl:w-full"
    />
    <img
      id="carousel-3"
      v-else-if="carouselImage == 3"
      src="../assets/images/home-3.png"
      class="h-vh-30 object-cover xl:h-full xl:w-full"
    />
    <div
      class="grid grid-cols-12 absolute w-full xl:h-full xl:items-center top-28 xl:top-0 z-20 font-kanit"
    >
      <div class="col-span-4 xl:col-span-6"></div>
      <div
        class="col-span-8 xl:col-span-6 flex flex-col items-end mr-4 xl:mr-24"
      >
        <div class="text-lg xl:text-5xl font-semibold mb-4">
          Welcome to Smart Visa Bali
        </div>
        <div class="text-xxs xl:text-lg text-right font-roboto mb-4">
          Smart Visa Bali is recommended visa agency in Bali.<br />With more
          than 5 years experience, we are trusted agency.<br />Handling quickly
          and your passport is in safe hand with us.
        </div>
        <router-link :to="{ name: 'AboutUs' }">
          <div
            class="bg-sv-black xl:text-4xl font-semibold hover:bg-white hover:text-sv-black cursor-pointer rounded-lg xl:rounded-3xl text-white py-1 px-4 xl:px-8 xl:py-6"
          >
            Learn More
          </div>
        </router-link>
      </div>
    </div>
    <div
      class="w-full flex justify-center absolute bottom-0 z-50 gap-2 text-xs xl:text-2xl mb-2"
    >
      <div
        v-bind:class="
          carouselImage == 1
            ? 'text-gray-100'
            : 'text-gray-400' + ' cursor-pointer'
        "
        @click="changeCarousel(1)"
      >
        <span class="fa fa-fw fa-circle"></span>
      </div>
      <div
        v-bind:class="
          carouselImage == 2
            ? 'text-gray-100'
            : 'text-gray-400' + ' cursor-pointer'
        "
        @click="changeCarousel(2)"
      >
        <span class="fa fa-fw fa-circle"></span>
      </div>
      <div
        v-bind:class="
          carouselImage == 3
            ? 'text-gray-100'
            : 'text-gray-400' + ' cursor-pointer'
        "
        @click="changeCarousel(3)"
      >
        <span class="fa fa-fw fa-circle"></span>
      </div>
    </div>
    <div
      class="w-full h-full bg-gradient-to-r from-sv-yellow-300/0 to-sv-yellow-300/100 absolute top-0 z-10"
    ></div>
  </div>
  <div
    class="w-vw-100 xl:px-16 py-12 bg-sv-yellow-500 flex flex-col xl:gap-12 items-center font-kanit font-semibold"
  >
    <div class="text-4xl xl:text-5xl text-center mb-4 xl:mb-0">What We Do?</div>
    <div class="hidden xl:flex items-center justify-center gap-16">
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-4xl font-semibold rounded-3xl text-white px-32 py-6 h-32 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer"
        >
          E-Visa<br />(B211 A)
        </div>
      </router-link>
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-4xl font-semibold rounded-3xl text-white px-32 py-6 h-32 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer"
        >
          E-Visa<br />(B211 B)
        </div>
      </router-link>
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-4xl font-semibold rounded-3xl text-white px-32 py-6 h-32 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer"
        >
          K I T A S
        </div>
      </router-link>
    </div>
    <div class="hidden xl:flex items-center justify-center gap-16">
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-4xl font-semibold rounded-3xl text-white px-32 py-6 h-32 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer"
        >
          Visa Extension
        </div>
      </router-link>
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-4xl font-semibold rounded-3xl text-white px-32 py-6 h-32 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer"
        >
          Other Services
        </div>
      </router-link>
    </div>
    <div class="flex xl:hidden items-center justify-center mb-4 xl:mb-0 xl:gap-4">
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-md font-semibold rounded-lg text-white px-4 w-vw-40 justify-center py-4 h-12 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer mx-2 xl:mx-0"
        >
          E-Visa<br />(B211 A)
        </div>
      </router-link>
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-md font-semibold rounded-lg text-white px-4 w-vw-40 justify-center py-4 h-12 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer mx-2 xl:mx-0"
        >
          E-Visa<br />(B211 B)
        </div>
      </router-link>
    </div>
    <div class="flex xl:hidden items-center justify-center mb-4 xl:mb-0 xl:gap-4">
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-md font-semibold rounded-lg text-white px-4 w-vw-40 justify-center py-4 h-12 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer mx-2 xl:mx-0"
        >
          K I T A S
        </div>
      </router-link>
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-md font-semibold rounded-lg text-white px-4 w-vw-40 justify-center py-4 h-12 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer mx-2 xl:mx-0"
        >
          Visa Extension
        </div>
      </router-link>
    </div>
    <div class="flex xl:hidden items-center justify-center xl:gap-4">
      <router-link :to="{ name: 'Services' }">
        <div
          class="bg-sv-black text-md font-semibold rounded-lg text-white px-4 w-vw-40 justify-center py-4 h-12 text-center flex items-center hover:bg-white hover:text-sv-black cursor-pointer mx-2 xl:mx-0"
        >
          Other Services
        </div>
      </router-link>
    </div>
  </div>
  <div
    class="w-vw-100 px-4 xl:px-36 py-12 bg-white grid grid-cols-12 font-roboto"
  >
    <div
      class="col-span-12 xl:col-span-5 flex flex-col items-start justify-end gap-4 pr-44"
    >
      <div class="text-xl xl:text-5xl font-kanit font-semibold">
        Visit Our Office
      </div>
      <div class="text-xs xl:text-xl font-roboto">
        Jl. Tukad Batanghari VI A GBM 1 No.1, Panjer, Kec. Denpasar Bar., Kota
        Denpasar, Bali 80225
      </div>
    </div>
    <div class="hidden col-span-7 xl:flex justify-end">
      <iframe
        class="rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15776.407980946418!2d115.2293278!3d-8.6818502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ba2bf94f9295005!2sSmart%20Visa%20Bali!5e0!3m2!1sen!2sid!4v1668527983857!5m2!1sen!2sid"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="flex col-span-12 xl:hidden justify-end mt-4">
      <iframe
        class="rounded-3xl w-full h-vh-30"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15776.407980946418!2d115.2293278!3d-8.6818502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ba2bf94f9295005!2sSmart%20Visa%20Bali!5e0!3m2!1sen!2sid!4v1668527983857!5m2!1sen!2sid"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <Footer v-bind:bgColor="'bg-sv-yellow-400'"></Footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  setup() {},
  data() {
    return {
      carouselImage: 1,
    };
  },
  methods: {
    changeCarousel(id) {
      this.carouselImage = id;
    },
  },
  components: { Navbar, Footer },
};
</script>
