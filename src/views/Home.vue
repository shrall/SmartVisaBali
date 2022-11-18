<template>
  <Navbar />
  <div class="w-vw-100 h-full relative pt-24">
    <img
      id="carousel-1"
      v-if="carouselImage == 1"
      :src="`src/assets/images/home-1.png`"
      class="w-full"
    />
    <img
      id="carousel-2"
      v-else-if="carouselImage == 2"
      :src="`src/assets/images/home-2.png`"
      class="w-full"
    />
    <img
      id="carousel-3"
      v-else-if="carouselImage == 3"
      :src="`src/assets/images/home-3.png`"
      class="w-full"
    />
    <div
      class="
        grid grid-cols-2
        absolute
        w-full
        h-full
        items-center
        top-0
        z-20
        font-kanit
      "
    >
      <div class="col-span-1"></div>
      <div class="col-span-1 flex flex-col items-end gap-4 mr-48">
        <div class="text-5xl font-semibold">Welcome to Smart Visa Bali</div>
        <div class="text-lg text-right font-roboto">
          Smart Visa Bali is recommended visa agency in Bali.<br />With more
          than 5 years experience, we are trusted agency.<br />Handling quickly
          and your passport is in safe hand with us.
        </div>
        <div
          class="
            bg-sv-black
            text-4xl
            font-semibold
            hover:bg-white hover:text-sv-black
            cursor-pointer
            rounded-3xl
            text-white
            px-8
            py-6
          "
        >
          Learn More
        </div>
      </div>
    </div>
    <div
      class="
        w-full
        flex
        justify-center
        absolute
        bottom-0
        z-50
        gap-2
        text-2xl
        mb-2
      "
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
      class="
        w-full
        h-full
        bg-gradient-to-r
        from-sv-yellow-300/0
        to-sv-yellow-300/100
        absolute
        top-0
        z-10
      "
    ></div>
  </div>
  <div
    class="
      w-vw-100
      px-16
      py-12
      bg-sv-yellow-500
      flex flex-col
      gap-12
      items-center
      font-kanit font-semibold
    "
  >
    <div class="text-5xl">What We Do?</div>
    <div class="flex items-center justify-center gap-16">
      <div
        class="
          bg-sv-black
          text-4xl
          font-semibold
          rounded-3xl
          text-white
          px-32
          py-6
          h-32
          text-center
          flex
          items-center
          hover:bg-white hover:text-sv-black
          cursor-pointer
        "
      >
        E-Visa<br />(B211 A)
      </div>
      <div
        class="
          bg-sv-black
          text-4xl
          font-semibold
          rounded-3xl
          text-white
          px-32
          py-6
          h-32
          text-center
          flex
          items-center
          hover:bg-white hover:text-sv-black
          cursor-pointer
        "
      >
        E-Visa<br />(B211 B)
      </div>
      <div
        class="
          bg-sv-black
          text-4xl
          font-semibold
          rounded-3xl
          text-white
          px-32
          py-6
          h-32
          text-center
          flex
          items-center
          hover:bg-white hover:text-sv-black
          cursor-pointer
        "
      >
        K I T A S
      </div>
    </div>
    <div class="flex items-center justify-center gap-16">
      <div
        class="
          bg-sv-black
          text-4xl
          font-semibold
          rounded-3xl
          text-white
          px-32
          py-6
          h-32
          text-center
          flex
          items-center
          hover:bg-white hover:text-sv-black
          cursor-pointer
        "
      >
        Visa Extension
      </div>
      <div
        class="
          bg-sv-black
          text-4xl
          font-semibold
          rounded-3xl
          text-white
          px-32
          py-6
          h-32
          text-center
          flex
          items-center
          hover:bg-white hover:text-sv-black
          cursor-pointer
        "
      >
        Other Services
      </div>
    </div>
  </div>
  <div class="w-vw-100 px-36 py-12 bg-white grid grid-cols-12">
    <div class="col-span-5 flex flex-col items-start justify-end gap-4 pr-44">
      <div class="text-5xl font-kanit font-semibold">Visit Our Office</div>
      <div class="text-xl font-roboto">
        Jl. Tukad Batanghari VI A GBM 1 No.1, Panjer, Kec. Denpasar Bar., Kota
        Denpasar, Bali 80225
      </div>
    </div>
    <div class="col-span-7 flex justify-end">
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