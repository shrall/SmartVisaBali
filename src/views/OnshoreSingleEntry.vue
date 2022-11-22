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
          ONSHORE SINGLE ENTRY VISIT E-VISA B211A
        </div>
        <img
          src="../assets/images/onshore-single-entry.png"
          class="w-vw-70 rounded-3xl block xl:hidden mx-auto"
        />
        <div class="flex flex-col gap-2 text-xl">
          <div class="font-extrabold text-center xl:text-start">
            Document requirements:
          </div>
          <ul class="list-disc p-8">
            <li>
              Passports valid for at least 12 months at the date of entry.
            </li>
            <li>Scanned copy of the main page of the passport Details.</li>
            <li>Scanned copy of the passport cover page.</li>
            <li>
              Bank statement with a minimum amount of $1500 USD or equivalent
              currency. Needs to show Name and Balance. (This is required from
              immigration to show you can support yourself whilst staying in
              Indonesia).
            </li>
            <li>Passport Photo in colour 4 x 6 digital.</li>
            <li>Address in country of origin.</li>
            <li>Address in Indonesia (hotel or villa).</li>
            <li>
              Personal contact details (phone number, WhatsApp number, email)
            </li>
            <li>Emergency contact details (family members)</li>
          </ul>
        </div>
      </div>
      <img
        src="../assets/images/onshore-single-entry.png"
        class="w-vw-50 rounded-3xl hidden xl:block"
      />
    </div>
    <div
      class="w-vw-100 py-12 flex flex-col gap-12 items-center font-kanit font-semibold"
    >
      <div class="text-5xl">OUR STEPS</div>
      <div
        class="grid grid-flow-row xl:grid-cols-3 gap-12 auto-rows-auto px-4 xl:px-0"
      >
        <div
          class="bg-sv-black rounded-3xl text-white px-16 py-12 text-center flex flex-col cursor-pointer gap-4 xl:gap-16"
        >
          <div class="text-2xl xl:text-4xl font-medium">Preparation</div>
          <div class="text-sm xl:text-xl font-roboto font-normal">
            <ul class="list-disc text-start flex flex-col gap-4">
              <li>Documents Collected</li>
              <li>Documents Checked</li>
              <li>Payment Received</li>
            </ul>
          </div>
        </div>
        <div
          class="bg-sv-black rounded-3xl text-white px-16 py-12 text-center flex flex-col cursor-pointer gap-4 xl:gap-16"
        >
          <div class="text-2xl xl:text-4xl font-medium">Confirmation</div>
          <div class="text-sm xl:text-xl font-roboto font-normal">
            <ul class="list-disc text-start flex flex-col gap-4">
              <li>Application Process Begins</li>
              <li>
                Submission and registration at the department of immigration
              </li>
            </ul>
          </div>
        </div>
        <div
          class="bg-sv-black rounded-3xl text-white px-16 py-12 text-center flex flex-col cursor-pointer gap-4 xl:gap-16"
        >
          <div class="text-2xl xl:text-4xl font-medium">Completion</div>
          <div class="text-sm xl:text-xl font-roboto font-normal">
            <ul class="list-disc text-start flex flex-col gap-4">
              <li>We send your e-Visa to your email.</li>
              <li>Download and print it out</li>
              <li>Show Your e-VISA to the immigration officer upon arrival</li>
              <li>Attach Your Covid-19 Health Check Result</li>
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
