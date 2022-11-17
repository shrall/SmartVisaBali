<template>
  <div
    style="box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25)"
    class="
      w-full
      h-vh-10
      flex
      items-center
      xl:justify-between
      px-2
      xl:px-24
      font-kanit
      z-50
      py-12
      bg-white
      absolute
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