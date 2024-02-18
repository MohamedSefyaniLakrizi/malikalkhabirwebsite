<script setup lang="ts">
import logo_large from "../assets/logo_large.svg";
import hamburger from "../assets/hamburger.svg";
import logo_mobile from "../assets/logo_mobile.svg";
import close from "../assets/close.svg";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedIn.svg";
import "../styles/Header.css";

const toggle_menu = () => {
  const menu = document.querySelector("nav");
  menu?.classList.toggle("-translate-x-full");
  if (document.body.style.overflow !== "hidden") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
</script>

<template>
  <header
    class="bg-transparent md:bg-white h-[115px] w-full flex items-center justify-between md:px-12 relative"
  >
    <img
      @click="toggle_menu"
      class="md:hidden ml-8 z-20"
      :src="hamburger"
      alt="Hamburger Menu"
    />
    <a href="/" class="md:hidden">
      <img :src="logo_mobile" alt="Mobile Logo" />
    </a>
    <div class="w-6 h-full mr-8 md:hidden"></div>
    <a class="hidden md:flex" href="/">
      <img :src="logo_large" alt="Main Logo" />
    </a>
    <nav
      class="absolute h-screen w-full list-none transform -translate-x-full duration-300 bg-white md:h-auto md:w-auto md:translate-x-0 md:bg-transparent top-0 z-50 md:static md:flex md:gap-5 2xl:gap-[34px] items-center 2xl:text-xl"
    >
      <div class="h-[115px] flex items-center justify-start ml-8">
        <img
          @click="toggle_menu"
          class="md:hidden"
          :src="close"
          alt="Close Icon"
        />
      </div>
      <li class="ml-3 px-5 py-3 border-b border-gray-300 md:border-b-0">
        <a href="/">Accueil</a>
      </li>
      <li class="ml-3 px-5 py-3 border-b border-gray-300 md:border-b-0">
        <a href="/a-propos">à propos</a>
      </li>
      <li class="ml-3 px-5 py-3 border-b border-gray-300 md:border-b-0">
        <a href="/services">services</a>
      </li>
      <li class="ml-3 px-5 py-2 bg-[#2D2D4D] text-white">
        <a>Prendre rendez-vous</a>
      </li>
      <li class="absolute block bottom-[10%] ml-8 md:hidden">
        <p>Adresse: 1, Quartier Maarif, Casablanca.</p>
        <p>Email: Example@Example.com</p>
        <div class="flex gap-3 mt-3">
          <img class="w-6 h-6" :src="facebook" alt="Facebook" />
          <img class="w-6 h-6" :src="linkedIn" alt="LinkedIn" />
        </div>
      </li>
    </nav>
  </header>
</template>
