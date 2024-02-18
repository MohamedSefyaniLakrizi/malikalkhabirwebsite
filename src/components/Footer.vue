<script setup lang="ts"></script>

<template>
  <div class="flex flex-wrap justify-center gap-5 md:gap-20 mt-10 mb-20">
    <div class="w-[80%] md:w-auto">
      <h3 class="font-semibold">Menu de bas de page</h3>
      <div class="grid grid-cols-2 mt-3 gap-3">
        <a class="underline" href="/">Acceuil</a>
        <a class="underline" href="/about">à propos</a>
        <a class="underline" href="/services">Services</a>
        <a class="underline" href="/contact">Prendre un rendez-vous</a>
      </div>
    </div>
    <div>
      <h3 class="font-semibold">Contact</h3>
      <div class="mt-3 flex flex-col gap-3">
        <a href="mailto:example@example.com">Email: Example@Example.com</a>
        <h5>Adresse: 1, Quartier Maarif, Casablanca.</h5>
      </div>
    </div>
  </div>
  <div class="ml-10 mb-3"><p>© 2024, Tout droits réservés</p></div>
</template>
