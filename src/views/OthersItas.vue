<template>
  <Navbar />
  <div
    class="
      font-roboto
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
        <div class="text-5xl font-kanit font-semibold">ARTIST KITAS</div>
        <div class="text-lg">
          Are you a singer, musician or DJ? Perhaps you are a model or an actor
          who dreams of living and working in Bali or somewhere else in
          Indonesia? We can make your dream a reality by providing you with
          Artist KITAS.
        </div>
        <div class="flex flex-col gap-4">
          <div class="font-extrabold">Documents required:</div>
          <ul class="list-disc pl-8">
            <li>
              Scanned copy of full page 1 (Identity Page) of Passport and cover
              (Must be in color and No photos).
            </li>
            <li>Passport valid for at least 10 month and minimum 2 blank</li>
            <li>
              Scanned copy Last Stamp of current Visa Minimum Validation 60 days
              /Valid visa is required during the process to avoid over stay
              (Onshore Application)
            </li>
            <li>Address in Original Country</li>
            <li>Address in Bali ( hotel or villa )</li>
            <li>
              Domicile Letter Address in Bali (if any) or Lease Agreement Letter
            </li>
            <li>Photo with red Background</li>
            <li>Personal Phone number & Email</li>
            <li>CV (Curriculum Vitae)</li>
            <li>Certificate of Degree Graduated or Expertise</li>
            <li>Working Activity Area in Indonesia</li>
            <li>Working Title / Position</li>
            <li>
              Onshore application – Full dose Vaccine Certificate (if any)
            </li>
            <li>
              Letter of transfer of sponsor if your sponsor is different from
              the visit visa sponsor
            </li>
            <li>
              Emergency Contact Person (family members) Address & Phone Number
            </li>
          </ul>
        </div>
      </div>
      <img
        src="../assets/images/artist-kitas.png"
        class="w-vw-50 rounded-3xl"
      />
    </div>
    <div class="grid grid-cols-2 place-items-center gap-32 py-24">
      <div class="flex flex-col justify-center gap-12">
        <div class="text-5xl font-kanit font-semibold">DEPENDENT KITAS</div>
        <div class="text-lg">
          A Dependent / Spousal KITAS is a temporary residence permit for
          foreign nationals who want to bring their family with them (husband,
          wife or children) to Indonesia. The Dependent or spousal KITAS can be
          obtained if a partner or parent has a work permit or a foreign
          investment KITAS. Below we explain the steps and the requirements
          needed to obtain a Dependent or Spousal KITAS in Indonesia.
        </div>
        <div class="flex flex-col gap-4">
          <div class="font-extrabold">Documents required:</div>
          <ul class="list-disc pl-8">
            <li>
              Passports valid for at least 18 months and minimum 2 blank pages.
            </li>
            <li>Scanned copy of the main page of the passport details.</li>
            <li>Scanned copy of the page of the passport cover</li>
            <li>
              Scanned copy of the Current Valid Visa (minimum 30 days valid
              visa) / Valid visa is required during the process to avoid over
              stay (Onshore Application).
            </li>
            <li>
              Document showing family ties to Primary Kitas holder (marriage
              certificate or birth certificate).
            </li>
            <li>Bank statement (minimum amount $1500)</li>
            <li>Address in original country.</li>
            <li>Address in Indonesia (hotel or villa).</li>
            <li>
              Domicile Letter Address in Bali (if any) or Lease Agreement Letter
            </li>
            <li>
              Scanned copy passport of Primary KITAS holder (Husband/Parent)
            </li>
            <li>KITAS of Primary KITAS holder (Husband/Parent)</li>
            <li>
              Onshore application – Full dose Vaccine Certificate (if any)
            </li>
            <li>
              Letter of transfer of sponsor if your sponsor is different from
              the visit visa sponsor
            </li>
            <li>
              Scanned copy document of Primary KITAS holder Company Sponsor
            </li>
          </ul>
        </div>
      </div>
      <img
        src="../assets/images/dependent-kitas.png"
        class="w-vw-50 rounded-3xl"
      />
    </div>
    <div class="grid grid-cols-2 place-items-center gap-32 py-24">
      <div class="flex flex-col justify-center gap-12">
        <div class="text-5xl font-kanit font-semibold">SPOUSE KITAS</div>
        <div class="text-lg">
          The Spouse KITAS is a Visa intended for foreigners who are married to
          Indonesian citizens. Below is an explanation of how to obtain a SPOUSE
          KITAS.
        </div>
        <div class="flex flex-col gap-4">
          <div class="font-extrabold">Documents required:</div>
          <ul class="list-disc pl-8">
            <li>
              Passports valid for at least 18 months and minimum 2 blank pages.
            </li>
            <li>Scanned copy of the main page of the passport details</li>
            <li>Scanned copy of the page of the passport cover</li>
            <li>
              Scanned copy of the Current Valid Visa (minimum 30 days valid
              visa) / Valid visa is required during the process to avoid over
              stay (Onshore Application)
            </li>
            <li>Bank statement (minimum amount $1500)</li>
            <li>Address in original country</li>
            <li>Address in Indonesia (hotel or villa)</li>
            <li>ID Card (KTP) of Indonesian spouse</li>
            <li>Family Card (Kartu Keluarga) of Indonesian spouse</li>
            <li>Birth certificate (Akta Lahir) of Indonesian spouse</li>
            <li>
              Marriage Certificate (already reported to civil registration
              Indonesia)
            </li>
            <li>
              Domicile Letter Address in Bali (if any) or Lease Agreement Letter
            </li>
            <li>
              Letter of transfer of sponsor if your sponsor is different from
              the visit visa sponsor
            </li>
            <li>
              Onshore application – Full dose Vaccine Certificate (if any)
            </li>
          </ul>
        </div>
      </div>
      <img
        src="../assets/images/spouse-kitas.png"
        class="w-vw-50 rounded-3xl"
      />
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