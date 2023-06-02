<template>
  <Navbar />
  <div class="w-vw-100 h-vh-40 xl:h-vh-70 relative font-roboto">
    <img
      src="../assets/images/home-1.png"
      class="w-full h-vh-40 xl:h-vh-70 object-cover object-top"
    />
    <div
      class="flex flex-col absolute w-full h-full items-center justify-center cen top-0 z-20 font-kanit gap-4 pt-24"
    >
      <div class="text-5xl xl:text-9xl font-bold text-white">Contact Us!</div>
      <div class="text-xs xl:text-3xl font-semibold bg-white p-2">
        We’re here to help and answer any question you might have.
      </div>
      <div class="text-xs xl:text-3xl font-semibold bg-white p-2">
        We look forward to hearing from you..
      </div>
    </div>
    <div
      class="w-full h-full bg-gradient-to-b from-sv-yellow-300/100 to-sv-yellow-300/0 absolute top-0 z-10"
    ></div>
  </div>
  <div
    class="w-vw-100 xl:h-vh-70 flex justify-center items-center gap-0 px-48 font-roboto"
  >
    <div class="grid xl:grid-cols-2 place-items-center h-vh-60 xl:gap-32">
      <div class="flex flex-col justify-center items-center gap-2 xl:gap-8">
        <div class="text-7xl xl:text-9xl">
          <span class="fa fa-fw fa-address-book"></span>
        </div>
        <div class="text-xl xl:text-4xl font-semibold">CONTACT</div>
        <div
          class="flex flex-col xl:flex-row items-center justify-center xl:gap-24"
        >
          <a href="https://api.whatsapp.com/send?phone=6281232071554">
            <div class="flex flex-col items-center gap-2">
              <div class="text-sm xl:text-xl font-semibold">WhatsApp</div>
              <div class="text-sm xl:text-xl">(+62) 812 3207 1554</div>
            </div>
          </a>
          <a href="https://www.instagram.com/smartvisa.bali/?hl=en">
            <div class="flex flex-col items-center gap-2">
              <div class="text-sm xl:text-xl font-semibold">Instagram</div>
              <div class="text-sm xl:text-xl">@smartvisa.bali</div>
            </div>
          </a>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-2 xl:gap-8">
        <div class="text-7xl xl:text-9xl">
          <span class="fa fa-fw fa-envelope"></span>
        </div>
        <div class="text-xl xl:text-4xl font-semibold">E-MAIL</div>
        <div class="flex items-center justify-center gap-24">
          <a href="mailto:smartvisabali1@gmail.com">
            <div class="flex flex-col items-center gap-2">
              <div class="text-sm xl:text-xl font-semibold"></div>
              <div class="text-sm xl:text-xl">smartvisabali1@gmail.com</div>
              <div><br /></div>
            </div>
          </a>
        </div>
      </div>
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
  components: { Navbar, Footer },
};
</script>
