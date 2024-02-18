<script setup lang="ts">
import "../styles/Hero.css";
import { ref, onMounted, onUnmounted } from "vue";

const text = ref("Psychologue, Psychanaliste, basée à Casablanca");

const updateText = () => {
  text.value =
    window.innerWidth >= 768
      ? "Thérapie Familiale pour les Personnes à Casablanca"
      : "Psychologue, Psychanaliste, basée à Casablanca";
};

onMounted(() => {
  window.addEventListener("resize", updateText);
  updateText();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateText);
});

const handleCLick = () => {
  window.location.href = "/services";
};
</script>

<template>
  <div
    class="bg-image -mt-[115px] flex flex-col items-center justify-center h-screen shadow-lg gap-6"
  >
    <h1
      class="text-[#03045E] text-4xl md:text-6xl 2xl:text-8xl text-center font-black w-[70%] md:w-[50%] 2xl:w-[50%] tracking-wide"
    >
      {{ text }}
    </h1>
    <h3 class="hidden md:flex text-white font-bold text-2xl tracking-wide">
      Stresse | Problèmes de couple | Anxiété
    </h3>
    <button
      @click="handleCLick"
      class="px-8 md:px-14 py-3 bg-[#D7D8D1] text-2xl mt-4 tracking-wide hover:border-black transition-all duration-300 ease-in-out shadow-xl border-transparent border md:border-[#D7D8D1] rounded-lg"
    >
      Commencer
    </button>
  </div>
</template>
