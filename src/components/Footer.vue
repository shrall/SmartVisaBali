<template>
  <div
    v-bind:class="[
      'v-vw-100 px-4 xl:px-36 py-8 xl:py-16 text-sv-black',
      bgColor,
    ]"
  >
    <div class="grid grid-cols-12 items-center justify-center">
      <div class="col-span-12 xl:col-span-9">
        <div class="flex flex-col gap-4 xl:gap-12 xl:pr-24">
          <div
            class="
              flex
              items-start
              text-md
              xl:text-4xl
              justify-between
              font-roboto
            "
          >
            <div class="flex flex-col gap-2">
              <router-link :to="{ name: 'AboutUs' }">
                <div class="font-semibold font-kanit cursor-pointer">
                  About Us
                </div>
              </router-link>
            </div>
            <div class="flex flex-col gap-2">
              <router-link :to="{ name: 'Services' }">
                <div class="font-semibold font-kanit cursor-pointer">
                  Services
                </div>
              </router-link>
              <ul class="list-none text-xs xl:text-xl">
                <li>E-Visa (B211 A)</li>
                <li>E-Visa (B211 B)</li>
                <li>KITAS</li>
                <li>Visa Extention</li>
                <li>Other Services</li>
              </ul>
            </div>
            <div class="flex flex-col gap-2">
              <a target="_blank" href="https://www.google.com/maps/place/Smart+Visa+Bali/@-8.6817493,115.2291635,19z/data=!4m5!3m4!1s0x0:0x7ba2bf94f9295005!8m2!3d-8.6818644!4d115.2293275?shorturl=1" class="font-semibold font-kanit cursor-pointer">
                Location
              </a>
            </div>
            <div class="flex flex-col gap-2">
              <router-link :to="{ name: 'ContactUs' }">
                <div class="font-semibold font-kanit cursor-pointer">
                  Contact Us
                </div>
              </router-link>
            </div>
          </div>
          <div class="flex xl:hidden flex-col gap-2">
            <img src="../assets/logo.svg" class="w-vw-40 mx-auto xl:w-full" />
            <div class="flex items-center text-4xl xl:text-6xl justify-evenly">
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
          <div class="grid grid-cols-2 text-xs xl:text-xl font-semibold">
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
      <div class="col-span-12 xl:col-span-3 hidden xl:flex flex-col gap-2">
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
      <div class="col-span-12 text-center text-xs xl:text-xl">
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