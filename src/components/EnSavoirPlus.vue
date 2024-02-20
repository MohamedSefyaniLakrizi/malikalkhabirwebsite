<script setup lang="ts">
import en_savoir_plus_image from "../assets/en_savoir_plus_image.png";
</script>

<template>
  <div class="w-full flex justify-center my-16" v-motion-slide-visible-once-top>
    <div
      class="flex flex-col md:flex-row gap-5 justify-center items-center esp:w-auto"
    >
      <div class="flex flex-col items-center">
        <p class="text-[40px] tracking-tighter leading-none">
          La thérapie cognitivo-comportementale
          <strong
            >réduit l’anxiété en changeant votre façon de voir le monde.</strong
          >
        </p>
        <a href="/services" class="mt-3">
          <button
            class="bg-[#2D2D4D] text-white px-12 py-3 mt-4 rounded-xl md:rounded-none"
          >
            En savoir plus
          </button>
        </a>
      </div>
      <img
        class="w-[90%] md:w-1/2 esp:w-full"
        :src="en_savoir_plus_image"
        alt="En savoir plus"
      />
    </div>
  </div>
</template>
