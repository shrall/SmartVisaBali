<template>
  <div v-bind:class="['v-vw-100 px-36 py-16 text-sv-black', bgColor]">
    <div class="grid grid-cols-12 items-center justify-center">
      <div class="col-span-9">
        <div class="flex flex-col gap-12 pr-24">
          <div class="flex items-start text-4xl justify-between font-roboto">
            <div class="flex flex-col gap-2">
              <router-link :to="{ name: 'AboutUs' }">
                <div class="font-semibold font-kanit cursor-pointer">
                  About Us
                </div>
              </router-link>
            </div>
            <div class="flex flex-col gap-2">
              <div class="font-semibold font-kanit cursor-pointer">
                Services
              </div>
              <ul class="list-none text-xl">
                <li>E-Visa (B211 A)</li>
                <li>E-Visa (B211 B)</li>
                <li>KITAS</li>
                <li>Visa Extention</li>
                <li>Other Services</li>
              </ul>
            </div>
            <div class="flex flex-col gap-2">
              <div class="font-semibold font-kanit cursor-pointer">
                Location
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="font-semibold font-kanit cursor-pointer">
                Contact Us
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 text-xl font-semibold">
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <span class="fa fa-fw fa-phone"></span>
                (+62)81238655358
              </div>
              <div class="flex items-center gap-2">
                <span class="fa fa-fw fa-envelope-open-text"></span>
                smartvisabali1@gmail.com
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex items-start gap-2">
                <span class="fa fa-fw fa-map-marker-alt"></span>
                Jl. Tukad Batanghari VI A GBM 1 No.1, Panjer, Kec. Denpasar
                Bar., Kota Denpasar, Bali 80225
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 flex flex-col gap-2">
        <img src="../assets/logo.svg" class="w-full" />
        <div class="flex items-center text-6xl justify-evenly">
          <a
            href="https://www.instagram.com/smartvisa.bali/?hl=en"
            class="cursor-pointer hover:opacity-90"
            ><span class="fab fa-instagram"></span
          ></a>
          <a href="#" class="cursor-pointer hover:opacity-90"
            ><span class="fab fa-facebook"></span
          ></a>
          <a href="#" class="cursor-pointer hover:opacity-90"
            ><span class="fab fa-whatsapp"></span
          ></a>
        </div>
      </div>
      <div class="col-span-12 text-center text-xl">
        2022 © All rights reserved by Smart Visa Bali
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bgColor"],
};
</script>

<style>
</style>