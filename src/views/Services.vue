<template>
  <Navbar />
  <div class="w-vw-100 h-vh-40 xl:h-vh-70 relative font-roboto">
    <img
      src="../assets/images/services.png"
      class="w-full h-vh-40 xl:h-vh-70 object-cover object-top"
    />
    <div
      class="flex flex-col absolute w-full h-full items-center justify-center cen top-0 z-20 font-kanit gap-4 pt-24"
    >
      <div class="text-4xl xl:text-9xl font-bold text-white text-center">
        Your Visa Solution!
      </div>
    </div>
    <div
      class="w-full h-full bg-gradient-to-b from-sv-yellow-300/100 to-sv-yellow-300/0 absolute top-0 z-10"
    ></div>
  </div>
  <div class="v-vw-100 font-roboto">
    <div class="flex justify-center py-12">
      <div class="text-4xl xl:text-6xl underline font-kanit font-semibold">
        Our Service
      </div>
    </div>
    <div class="flex xl:hidden items-center justify-evenly font-roboto py-8">
      <div class="flex flex-col relative group">
        <img
          @click="selectMenu(1)"
          v-if="selectedMenu != 1"
          src="../assets/images/services-1.png"
          class="object-cover rounded-2xl h-vh-30 w-vw-40 absolute xl:w-vw-20"
        />
        <div
          @click="selectMenu(1)"
          v-if="selectedMenu != 1"
          class="flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-16 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
        >
          <div class="text-md xl:text-3xl">E-Visa<br />(B211 A)</div>
        </div>
        <div
          class="flex flex-col items-center justify-center text-center bg-sv-yellow-300 w-vw-40 xl:w-vw-20 h-vh-30 rounded-2xl"
        >
          <router-link
            v-if="selectedMenu == 1"
            class="w-full"
            :to="{ name: 'OffshoreSingleEntry' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Offshore Single Entry <br />
              Visit e-Visa B211A
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 1"
            class="w-full"
            :to="{ name: 'OnshoreSingleEntry' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Onshore Single Entry <br />
              Visit e-Visa B211A
            </div>
          </router-link>
        </div>
      </div>
      <router-link :to="{ name: 'EVisaB211B' }">
        <div class="flex flex-col relative group cursor-pointer">
          <img
            src="../assets/images/services-2.png"
            class="object-cover rounded-2xl h-vh-30 w-vw-40 xl:w-vw-20"
            alt=""
            srcset=""
          />
          <div
            class="flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-16 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
          >
            <div class="text-md xl:text-3xl">E-Visa<br />(B211 B)</div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="flex xl:hidden items-center justify-evenly font-roboto py-8">
      <div class="flex flex-col relative group">
        <img
          @click="selectMenu(3)"
          v-if="selectedMenu != 3"
          src="../assets/images/services-3.png"
          class="object-cover rounded-2xl h-vh-30 w-vw-40 absolute xl:w-vw-20"
        />
        <div
          @click="selectMenu(3)"
          v-if="selectedMenu != 3"
          class="flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-16 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
        >
          <div class="text-md xl:text-3xl">K I T A S</div>
        </div>
        <div
          class="flex flex-col items-center justify-center text-center bg-sv-yellow-300 w-vw-40 xl:w-vw-20 h-vh-30 rounded-2xl"
        >
          <router-link
            v-if="selectedMenu == 3"
            class="w-full"
            :to="{ name: 'InvestorItas' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Investor KITAS
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 3"
            class="w-full"
            :to="{ name: 'WorkingItas' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Working KITAS
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 3"
            class="w-full"
            :to="{ name: 'FamilyItas' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Family KITAS
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 3"
            class="w-full"
            :to="{ name: 'RetirementItas' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Retirement KITAS
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 3"
            class="w-full"
            :to="{ name: 'OthersItas' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Others KITAS
            </div>
          </router-link>
        </div>
      </div>
      <div class="flex flex-col relative group">
        <img
          @click="selectMenu(4)"
          v-if="selectedMenu != 4"
          src="../assets/images/services-4.png"
          class="object-cover rounded-2xl h-vh-30 w-vw-40 absolute xl:w-vw-20"
        />
        <div
          @click="selectMenu(4)"
          v-if="selectedMenu != 4"
          class="flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-16 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
        >
          <div class="text-md xl:text-3xl">Visa Extension</div>
        </div>
        <div
          class="flex flex-col items-center justify-center text-center bg-sv-yellow-300 w-vw-40 xl:w-vw-20 h-vh-30 rounded-2xl"
        >
          <router-link
            v-if="selectedMenu == 4"
            class="w-full"
            :to="{ name: 'VoaExtension' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              VOA Extension
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 4"
            class="w-full"
            :to="{ name: 'SingleEntryVisaB211AExtension' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Single Entry Visa <br />
              B211A Extension
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex xl:hidden items-center justify-evenly font-roboto py-8">
      <div class="flex flex-col relative group">
        <img
          @click="selectMenu(5)"
          v-if="selectedMenu != 5"
          src="../assets/images/services-5.png"
          class="object-cover rounded-2xl h-vh-30 w-vw-40 absolute xl:w-vw-20"
        />
        <div
          @click="selectMenu(5)"
          v-if="selectedMenu != 5"
          class="flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-16 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
        >
          <div class="text-md xl:text-3xl">Other Services</div>
        </div>
        <div
          class="flex flex-col items-center justify-center text-center bg-sv-yellow-300 w-vw-40 xl:w-vw-20 h-vh-30 rounded-2xl"
        >
          <div
            class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
          >
            Fast Track
          </div>
          <router-link
            v-if="selectedMenu == 5"
            class="w-full"
            :to="{ name: 'DrivingLicense' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Driving License
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 5"
            class="w-full"
            :to="{ name: 'ForeignInvestmentCompany' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Foreign Investment Company (PMA)
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 5"
            class="w-full"
            :to="{ name: 'ResidencyCertificate' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              Residency Certificate (SKTT)
            </div>
          </router-link>
          <router-link
            v-if="selectedMenu == 5"
            class="w-full"
            :to="{ name: 'VIPNgurahRai' }"
          >
            <div
              class="text-sm xl:text-3xl hover:bg-white w-full py-2 cursor-pointer h-10 xl:h-20 flex items-center justify-center"
            >
              VIP Airport Service in Ngurah Rai
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden xl:flex items-center justify-evenly font-roboto py-8">
      <div class="flex flex-col relative group">
        <img
          src="../assets/images/services-1.png"
          class="object-cover rounded-2xl group-hover:hidden h-vh-60 absolute w-vw-20"
          alt=""
          srcset=""
        />
        <div
          class="group-hover:hidden flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-28 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
        >
          <div class="text-3xl">E-Visa<br />(B211 A)</div>
        </div>
        <div
          class="flex flex-col items-center justify-center text-center bg-sv-yellow-300 w-vw-20 h-vh-60 rounded-2xl"
        >
          <router-link class="w-full" :to="{ name: 'OffshoreSingleEntry' }">
            <div
              class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Offshore Single Entry <br />
              Visit e-Visa B211A
            </div>
          </router-link>
          <router-link class="w-full" :to="{ name: 'OnshoreSingleEntry' }">
            <div
              class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Onshore Single Entry <br />
              Visit e-Visa B211A
            </div>
          </router-link>
        </div>
      </div>
      <router-link :to="{ name: 'EVisaB211B' }">
        <div class="flex flex-col relative group cursor-pointer">
          <img
            src="../assets/images/services-2.png"
            class="object-cover rounded-2xl h-vh-60 w-vw-20"
            alt=""
            srcset=""
          />
          <div
            class="flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-28 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
          >
            <div class="text-3xl">E-Visa<br />(B211 B)</div>
          </div>
        </div>
      </router-link>
      <div class="flex flex-col relative group">
        <img
          src="../assets/images/services-3.png"
          class="object-cover rounded-2xl group-hover:hidden h-vh-60 absolute w-vw-20"
          alt=""
          srcset=""
        />
        <div
          class="group-hover:hidden flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-28 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
        >
          <div class="text-3xl">K I T A S</div>
        </div>
        <div
          class="flex flex-col items-center justify-center text-center bg-sv-yellow-300 w-vw-20 h-vh-60 rounded-2xl"
        >
          <router-link class="w-full" :to="{ name: 'InvestorItas' }">
            <div
              class="text-3xl hover:bg-white py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Investor KITAS
            </div>
          </router-link>
          <router-link class="w-full" :to="{ name: 'WorkingItas' }">
            <div
              class="text-3xl hover:bg-white py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Working KITAS
            </div>
          </router-link>
          <router-link class="w-full" :to="{ name: 'FamilyItas' }">
            <div
              class="text-3xl hover:bg-white py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Family KITAS
            </div>
          </router-link>
          <router-link class="w-full" :to="{ name: 'RetirementItas' }">
            <div
              class="text-3xl hover:bg-white py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Retirement KITAS
            </div>
          </router-link>
          <router-link class="w-full" :to="{ name: 'OthersItas' }">
            <div
              class="text-3xl hover:bg-white py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Others KITAS
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden xl:flex items-center justify-evenly font-roboto py-8">
      <div class="flex flex-col relative group">
        <img
          src="../assets/images/services-4.png"
          class="object-cover rounded-2xl group-hover:hidden h-vh-60 absolute w-vw-20"
          alt=""
          srcset=""
        />
        <div
          class="group-hover:hidden flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-28 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
        >
          <div class="text-3xl">Visa Extension</div>
        </div>
        <div
          class="flex flex-col items-center justify-center text-center bg-sv-yellow-300 w-vw-20 h-vh-60 rounded-2xl"
        >
          <router-link class="w-full" :to="{ name: 'VoaExtension' }">
            <div
              class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              VOA Extension
            </div>
          </router-link>
          <router-link
            class="w-full"
            :to="{ name: 'SingleEntryVisaB211AExtension' }"
          >
            <div
              class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Single Entry Visa <br />
              B211A Extension
            </div>
          </router-link>
        </div>
      </div>
      <div class="flex flex-col relative group">
        <img
          src="../assets/images/services-5.png"
          class="object-cover rounded-2xl group-hover:hidden h-vh-60 absolute w-vw-20"
          alt=""
          srcset=""
        />
        <div
          class="group-hover:hidden flex justify-center items-center text-center gap-4 absolute rounded-b-2xl bg-sv-black h-28 font-kanit font-semibold z-20 text-white w-full p-4 bottom-0"
        >
          <div class="text-3xl">Other Services</div>
        </div>
        <div
          class="flex flex-col items-center justify-center text-center bg-sv-yellow-300 w-vw-20 h-vh-60 rounded-2xl"
        >
          <div
            class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
          >
            Fast Track
          </div>
          <router-link class="w-full" :to="{ name: 'DrivingLicense' }">
            <div
              class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Driving License
            </div>
          </router-link>
          <router-link
            class="w-full"
            :to="{ name: 'ForeignInvestmentCompany' }"
          >
            <div
              class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Foreign Investment Company (PMA)
            </div>
          </router-link>
          <router-link class="w-full" :to="{ name: 'ResidencyCertificate' }">
            <div
              class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              Residency Certificate (SKTT)
            </div>
          </router-link>
          <router-link class="w-full" :to="{ name: 'VIPNgurahRai' }">
            <div
              class="text-3xl hover:bg-white w-full py-2 cursor-pointer h-20 flex items-center justify-center"
            >
              VIP Airport Service in Ngurah Rai
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="v-vw-100 font-roboto">
    <div class="flex flex-col items-center gap-6 justify-center py-12">
      <div class="text-xl xl:text-5xl font-kanit font-semibold text-center xl:w-vw-60">
        WHAT IS THE DIFFERENCE BETWEEN
      </div>
      <div class="text-xl xl:text-5xl font-kanit font-semibold text-center xl:w-vw-60">
        OFFSHORE AND ONSHORE?
      </div>
    </div>
    <div class="flex flex-col xl:flex-row items-center justify-center gap-12 mb-12">
      <div
        class="rounded-2xl bg-sv-black flex flex-col items-center w-vw-90 xl:w-vw-40 p-8 gap-4"
      >
        <div class="text-2xl xl:text-5xl text-white font-kanit font-semibold text-center">
          OFFSHORE VISA
        </div>
        <div
          class="text-sm xl:text-xl text-white text-center h-vh-25 flex flex-col justify-center"
        >
          For foreigners who will travel to the territory of Indonesia in the
          framework of official government duties, tours, socio-cultural
          activities, family visits, business talks.
          <br /><br />This visa allows you to stay in Indonesia for a maximum of
          60 days and can be extended 4 times. Each extension with 30 days.
        </div>
        <router-link :to="{ name: 'OffshoreVisa' }">
          <div
            class="bg-sv-yellow-300 text-sv-black hover:text-white font-kanit font-semibold text-xl xl:text-4xl rounded-2xl text-center flex justify-center px-4 py-2 shadow-lg cursor-pointer shadow-sv-yellow-300"
          >
            Find Out More
          </div>
        </router-link>
      </div>
      <div
        class="rounded-2xl bg-sv-black flex flex-col items-center w-vw-90 xl:w-vw-40 p-8 gap-4"
      >
        <div class="text-2xl xl:text-5xl text-white font-kanit font-semibold text-center">
          ONSHORE VISA
        </div>
        <div
          class="text-sm xl:text-xl text-white text-center h-vh-25 flex flex-col justify-center"
        >
          For foreigners who stay in Bali and would like to continue living here
          This visa allows you to stay in Indonesia for a maximum of 30 days and
          can be extended 4 times. Each extension with 30 days.
        </div>
        <router-link :to="{ name: 'OnshoreVisa' }">
          <div
            class="bg-sv-yellow-300 text-sv-black hover:text-white font-kanit font-semibold text-xl xl:text-4xl rounded-2xl text-center flex justify-center px-4 py-2 shadow-lg cursor-pointer shadow-sv-yellow-300"
          >
            Find Out More
          </div>
        </router-link>
      </div>
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
      selectedMenu: 0,
    };
  },
  methods: {
    selectMenu(id) {
      this.selectedMenu = id;
    },
  },
  components: { Navbar, Footer },
};
</script>
