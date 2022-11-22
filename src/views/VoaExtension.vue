<template>
  <Navbar />
  <div
    class="font-roboto w-vw-100 bg-sv-yellow-300 flex flex-col items-center gap-0 pt-36 xl:px-36 pb-24"
  >
    <div class="grid xl:grid-cols-2 place-items-center gap-32">
      <div class="flex flex-col justify-center gap-12">
        <div
          class="text-3xl xl:text-5xl font-kanit font-semibold text-center xl:text-start"
        >
          VOA EXTENSION IN INDONESIA
        </div>
        <img
          src="../assets/images/voa-extension.png"
          class="w-vw-70 rounded-3xl block xl:hidden mx-auto"
        />
        <div class="flex flex-col gap-2 text-xl">
          <div class="font-extrabold text-center xl:text-start">
            There are several things you need to know about Visa Extensions,
            especially if you may want to stay longer than 30 or 60 days and
            depending on your visa type.
          </div>
          <ul class="list-disc p-8">
            <li>
              Extensions are now 30 days for VOA. This needs to be done 10 days
              before your expiry date.
            </li>
            <li>
              Total time for regular extension processing is up to 14 business
              days.
            </li>
            <li>
              Total time for express extension processing is up to 5 business
              days.
            </li>
          </ul>
        </div>
      </div>
      <img
        src="../assets/images/voa-extension.png"
        class="w-vw-50 rounded-3xl hidden xl:block"
      />
    </div>
    <div
      class="w-vw-100 py-12 flex flex-col gap-8 xl:gap-12 px-4 xl:px-0 items-center font-kanit font-semibold"
    >
      <div class="text-3xl xl:text-5xl">OUR STEPS</div>
      <div class="flex items-center justify-center gap-8">
        <div
          class="bg-sv-black rounded-3xl text-white px-12 xl:px-16 py-12 text-center flex flex-col cursor-pointer gap-16"
        >
          <div class="text-xl font-roboto font-normal">
            <ul class="list-disc text-start flex flex-col gap-4">
              <li>
                Drop your passport and make payment at one of our office
                locations. We may be able to organize a courier at a reasonable
                price from your accommodation (depending on the distance).
              </li>
              <li>
                We take the passport to the Immigration office where we complete
                all the necessary paperwork and the Immigration starts the Visa
                extension process.
              </li>
              <li>
                Immigration will notify us when they require you to appear for
                Biometrics (Photograph and fingerprints). This can take 5 - 7
                working days for regular processing before you will need to go
                to immigration. PLEASE DO NOT GO TO IMMIGRATION WITHOUT
                NOTIFICATION FROM OUR STAFF.
              </li>
              <li>
                You are not required to take anything with you for this visit.
              </li>
              <li>
                Immigration continues to process your visa extension with your
                passport.
              </li>
              <li>
                We collect your passport from immigration after they notify us
                that it is complete.
              </li>
              <li>
                We will notify you via whatsapp to either collect your passport
                within 3 days or continue with your extension process.
              </li>
              <li>
                For B211 extensions total cost is 2,700,000.00 IDR per
                extension.
              </li>
              <li>
                For VOA extensions the cost is 850,000.00 IDR per extension.
              </li>
              <li>
                You will need to go to immigration for biometric for every
                extension.
              </li>
              <li>
                Please note the total processing time can be up to 14 Working
                days.
              </li>
              <li>
                We can provide express processing up to 5 business days for an
                additional charge.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a href="https://linktr.ee/smartvisa.bali">
      <div class="flex">
        <div
          class="bg-sv-black text-white hover:bg-white hover:text-sv-black font-kanit font-semibold xl:text-4xl rounded-2xl text-center justify-center px-12 mx-auto xl:mx-0 xl:px-24 py-4 shadow-md shadow-sv-black cursor-pointer"
        >
          Apply Now
        </div>
      </div>
    </a>
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
