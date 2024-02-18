<script setup lang="ts">
import therapie_en_ligne from "../assets/therapie_en_ligne.png";
import anxiete from "../assets/anxiete.png";
import depression from "../assets/depression.png";
import probleme_de_couple from "../assets/probleme_de_couple.png";
</script>

<template>
  <div class="mt-10 border-t-2 border-opacity-70 border-black">
    <div class="flex justify-center mt-10">
      <h1 class="font-semibold text-5xl">Spécialités</h1>
    </div>
    <div
      class="flex flex-col md:flex-row md:flex-wrap w-full gap-5 my-10 justify-center items-center"
    >
      <div>
        <img class="w-auto" :src="therapie_en_ligne" alt="Thérapie en ligne" />
        <h2 class="text-2xl font-semibold mt-2 text-center">
          Thérapie en ligne
        </h2>
      </div>
      <div>
        <img class="w-auto" :src="anxiete" alt="Anxiété" />
        <h2 class="text-2xl font-semibold mt-2 text-center">Anxiété</h2>
      </div>
      <div class="flex flex-col md:flex-row gap-5">
        <div>
          <img class="w-auto" :src="depression" alt="Dépression" />
          <h2 class="text-2xl font-semibold mt-2 text-center">Dépression</h2>
        </div>
        <div>
          <img
            class="w-auto"
            :src="probleme_de_couple"
            alt="Problème de couple"
          />
          <h2 class="text-2xl font-semibold mt-2 text-center">
            Problème de couple
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
