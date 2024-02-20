<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import image_portrait from "../assets/image_portrait.png";

const text =
  ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`);

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const truncatedText = computed(() => {
  return windowWidth.value < 1269 && text.value.length > 400
    ? text.value.slice(0, 400) + "..."
    : text.value;
});
</script>

<template>
  <div
    class="h-auto w-full flex flex-col items-center justify-center border-t border-gray-300 md:border-transparent"
  >
    <div
      class="h-auto md:w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-8 py-16 md:pt-10"
      v-motion-slide-visible-once-top
    >
      <img class="w-[90%] md:w-auto" :src="image_portrait" alt="Portrait" />
      <div
        class="md:h-[617px] relative flex flex-col md:items-start items-center"
      >
        <h1
          class="md:text-5xl font-semibold text-3xl text-center md:text-start"
        >
          Découvrez votre Psy
        </h1>
        <h6 class="text-center md:text-start">Lorem ipsum dolor sit amet</h6>
        <p class="mt-8 leading-loose">
          {{ truncatedText }}
        </p>
        <a href="/services" class="md:absolute md:bottom-0 md:-translate-y-0">
          <button
            class="bg-[#2D2D4D] text-white px-12 py-3 mt-4 rounded-xl md:rounded-none"
          >
            En savoir plus
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
