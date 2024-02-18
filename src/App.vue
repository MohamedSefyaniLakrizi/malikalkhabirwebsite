<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./output.css";
import "./style.css";
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>
