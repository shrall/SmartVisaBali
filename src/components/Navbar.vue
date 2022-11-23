<template>
  <div
    class="w-full h-vh-10 flex items-center justify-between px-8 xl:px-24 font-kanit z-50 py-12 bg-white absolute xl:shadow-sv-custom"
  >
    <router-link :to="{ name: 'Home' }">
      <img
        src="../assets/logo.svg"
        class="w-12 xl:w-20 hover:opacity-90 cursor-pointer"
    /></router-link>
    <div
      class="hidden xl:flex items-center gap-16 text-xs xl:text-2xl justify-evenly text-sv-black font-semibold"
    >
      <router-link :to="{ name: 'AboutUs' }">
        <a class="cursor-pointer hover:opacity-80"> About Us </a>
      </router-link>
      <router-link :to="{ name: 'Services' }">
        <a class="cursor-pointer hover:opacity-80"> Service </a>
      </router-link>
      <router-link :to="{ name: 'ContactUs' }">
        <a class="cursor-pointer hover:opacity-80"> Contact Us </a>
      </router-link>
    </div>
    <div class="xl:hidden">
      <div class="text-2xl" @click="toggleNavbar()">
        <span class="fa fa-fw fa-bars"></span>
      </div>
      <div
        v-if="navbarToggled"
        class="absolute flex flex-col gap-4 w-vw-30 right-0 pt-12 bg-white rounded-bl-3xl pl-4 pb-4"
      >
        <router-link :to="{ name: 'AboutUs' }">
          <a class="cursor-pointer hover:opacity-80"> About Us </a>
        </router-link>
        <router-link :to="{ name: 'Services' }">
          <a class="cursor-pointer hover:opacity-80"> Service </a>
        </router-link>
        <router-link :to="{ name: 'ContactUs' }">
          <a class="cursor-pointer hover:opacity-80"> Contact Us </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      navbarToggled: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarToggled = !this.navbarToggled;
    },
  },
};
</script>
