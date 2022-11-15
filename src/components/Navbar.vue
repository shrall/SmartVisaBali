<template>
  <div
    class="
      w-full
      h-vh-10
      flex
      items-center
      xl:justify-between
      px-2
      xl:px-24
      py-4
      font-kanit
      drop-shadow-2xl
      z-50
    "
  >
    <router-link :to="{ name: 'Home' }">
      <img
        src="../assets/logo.svg"
        class="w-48 xl:w-20 hover:opacity-90 cursor-pointer"
    /></router-link>
    <div
      class="
        flex
        items-center
        gap-16
        text-xs
        xl:text-2xl
        justify-evenly
        text-sv-black
        font-semibold
      "
    >
      <a class="cursor-pointer hover:opacity-80"> About Us </a>
      <a class="cursor-pointer hover:opacity-80"> Service </a>
      <a class="cursor-pointer hover:opacity-80"> Contact Us </a>
    </div>
  </div>
</template>