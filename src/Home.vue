<script setup lang="ts">
import Hero from "./components/Hero.vue";
import Quote from "./components/Quote.vue";
import EnSavoirPlus from "./components/EnSavoirPlus.vue";
import Discover from "./components/Discover.vue";
import C2A from "./components/C2A.vue";
import Specialite from "./components/Specialite.vue";
import "./output.css";
import "./style.css";
</script>

<template>
  <Hero />
  <Quote />
  <div class="w-full flex flex-col items-center">
    <div class="w-[90%] md:w-[80%] 2xl:w-[70%] 3xl:w-[60%]">
      <EnSavoirPlus />
      <Discover />
      <Specialite />
    </div>
  </div>
  <C2A />
</template>
